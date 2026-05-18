import { useEffect, useState } from "react";
import { useScannerStore } from "../../store/useScannerStore.js";

const DeviationBar = ({ltp, symbol}) => {
  const {allQuotes} = useScannerStore();
  const [range, setRange] = useState(null);

  const getPivotsFromSymbol = () => {
    const quote = allQuotes.find((data) => data.symbol === symbol);
    return quote.intradayPivots;
  }

  const getRangeFromPivots = (pivots) => {
    if(ltp < pivots.s3) return "Below S3";
    else if(ltp > pivots.r3) return "Above R3";
    else{
      const ranges = [
        {name: "S3,S2", low: pivots.s3, high: pivots.s2},
        {name: "S2,S1", low: pivots.s2, high: pivots.s1},
        {name: "S1,PP", low: pivots.s1, high: pivots.pp},
        {name: "PP,R1", low: pivots.pp, high: pivots.r1},
        {name: "R1,R2", low: pivots.r1, high: pivots.r2},
        {name: "R2,R3", low: pivots.r2, high: pivots.r3},
      ];
      
      for(let range of ranges) {
        if(ltp >= range.low && ltp <= range.high) return range;
      }
    }
  }

  useEffect(() => {
    const pivots = getPivotsFromSymbol();

    setRange(getRangeFromPivots(pivots));
  }, []);

  return (
    <article className='flex justify-center items-center gap-2'>
      {(range && typeof range === "object") ?
      <div className="flex justify-center items-center gap-1">
        <p>{range.name.split(",")[0]}</p>
        <meter min={range.low} max={range.high} value={ltp}></meter>
        <p>{range.name.split(",")[1]}</p>
      </div> :
      <p>{range}</p>}
    </article>
  );
}

export default DeviationBar
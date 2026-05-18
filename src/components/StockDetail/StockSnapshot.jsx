import { useEffect, useState } from "react"
import { fetchSnapshot } from "../../services/stockService.js";

const StockSnapshot = ({symbol}) => {
  const [snapshotData, setSnapshotData] = useState();

  useEffect(() => {
    const onLoadHandler = async () => {
        try {
            const res = await fetchSnapshot(symbol);

            setSnapshotData(res.data);
            console.log(res.data);
        } catch (error) {
            console.error("Error while fetching snapshot", error);
        }
    }

    onLoadHandler();
  }, []);
  
  return (
    <section className='w-11/12 grid grid-cols-3 md:grid-cols-6 gap-2 text-center border border-gray-300'>
        <div>
            <p className="text-gray-400">OPEN</p>
            <p>{snapshotData?.ohlc.open}</p>
        </div>
        <div>
            <p className="text-gray-400">HIGH</p>
            <p>{snapshotData?.ohlc.high}</p>
        </div>
        <div>
            <p className="text-gray-400">LOW</p>
            <p>{snapshotData?.ohlc.low}</p>
        </div>
        <div>
            <p className="text-gray-400">CLOSE</p>
            <p>{snapshotData?.ohlc.close}</p>
        </div>
        <div>
            <p className="text-gray-400">VOLUME</p>
            <p>{snapshotData?.ohlc.volume}</p>
        </div>
        <div>
            <p className="text-gray-400">VOL CH</p>
            <p>{snapshotData?.volumeIntradayJump}</p>
        </div>
        <div>
            <p className="text-gray-400">VWAP</p>
            <p>{snapshotData?.vwap}</p>
        </div>
        <div>
            <p className="text-gray-400">MKT CAP</p>
            <p>{snapshotData?.marketCap}</p>
        </div>
        <div>
            <p className="text-gray-400">EPS</p>
            <p>{snapshotData?.eps}</p>
        </div>
        <div>
            <p className="text-gray-400">PE RATIO</p>
            <p>{snapshotData?.pe}</p>
        </div>
        <div>
            <p className="text-gray-400">OI CH</p>
            <p>{snapshotData?.pe}</p>
        </div>
    </section>
  )
}

export default StockSnapshot
import { useParams } from "react-router-dom"
import StockSnapshot from "../components/StockDetail/StockSnapshot";
import ChartPanel from "../components/StockDetail/ChartPanel";

const StockDetailPage = () => {
  const {symbol} = useParams();

  return (
    <section className="mt-5 flex flex-col items-center">
        <StockSnapshot symbol={symbol} />
        <ChartPanel symbol={symbol} />
    </section>
  )
}

export default StockDetailPage
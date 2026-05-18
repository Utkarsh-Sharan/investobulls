import { useParams } from "react-router-dom"
import StockSnapshot from "../components/StockDetail/StockSnapshot";
import ChartPanel from "../components/StockDetail/ChartPanel";

const StockDetailPage = () => {
  const {symbol} = useParams();

  return (
    <section className="pt-5 h-screen flex flex-col items-center dark:bg-gray-800 dark:text-white">
        <StockSnapshot symbol={symbol} />
        <ChartPanel symbol={symbol} />
    </section>
  )
}

export default StockDetailPage
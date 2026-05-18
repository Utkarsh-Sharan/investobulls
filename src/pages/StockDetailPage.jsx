import { useParams } from "react-router-dom"
import StockSnapshot from "../components/StockDetail/StockSnapshot";
import ChartPanel from "../components/StockDetail/ChartPanel";

const StockDetailPage = () => {
  const {symbol} = useParams();

  return (
    <section>
        <StockSnapshot symbol={symbol} />
        <ChartPanel symbol={symbol} />
    </section>
  )
}

export default StockDetailPage
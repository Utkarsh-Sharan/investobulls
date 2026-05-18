import { useEffect, useState } from "react"
import { fetchChart } from "../../services/stockService";

const ChartPanel = ({symbol}) => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetchChart(symbol, "1D");
            
            console.log(res);
        } catch (error) {
            console.error("Error fetching chart data!", error);
        }
    }

    fetchData();
  }, [symbol]);

  return (
    <div>{symbol}</div>
  )
}

export default ChartPanel
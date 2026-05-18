import axios from "axios";

const baseURL = "https://intradayscreener.com/api";

export const fetchOHL = () => {
    return axios.get(`${baseURL}/openhighlow/cash`);
}
export const fetchQuotes = () => {
    return axios.get(`${baseURL}/allQuotesCompact?isPivots=true`);
}
export const fetchSnapshot = (symbol) => {
    return axios.get(`${baseURL}/TechnicalAnaysis/stocksnapshot/${symbol}`);
}
export const fetchChart = (symbol, interval) => {
    return axios.get(`${baseURL}/CandlestickAnalysis/chartData/${symbol}/${interval}`);
}
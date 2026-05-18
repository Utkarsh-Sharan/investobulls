import axios from "axios";
import { create } from "zustand";
import { fetchOHL, fetchQuotes } from "../services/stockService";

export const useScannerStore = create((set, get) => ({
    ohlData: [],
    allQuotes: [],

    setMatTableData: async () => {
        try {
            const [apiOne, apiTwo] = await Promise.all([fetchOHL(), fetchQuotes()]);

            set({ohlData: apiOne.data, allQuotes: apiTwo.data});
        } catch (error) {
            console.log(error?.message);
        }
    }
}));
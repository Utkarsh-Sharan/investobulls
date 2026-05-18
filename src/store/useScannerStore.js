import axios from "axios";
import { create } from "zustand";
import { api1, api2 } from "../utils/constants";

export const useScannerStore = create((set, get) => ({
    ohlData: [],
    allQuotes: [],

    setMatTableData: async () => {
        try {
            const [apiOne, apiTwo] = await Promise.all([axios.get(api1), axios.get(api2)]);

            console.log(apiOne.data, apiTwo.data);
            set({ohlData: apiOne.data, allQuotes: apiTwo.data});
        } catch (error) {
            console.log(error?.message);
        }
    }
}));
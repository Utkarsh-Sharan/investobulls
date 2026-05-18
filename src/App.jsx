import { useState } from "react"
import ScannerPage from "./pages/ScannerPage.jsx"
import { useTheme } from "./context/ThemeContext.jsx";
import { Route, Routes } from "react-router-dom";
import StockDetailPage from "./pages/StockDetailPage.jsx";

function App() {
  const {theme} = useTheme();

  return (
    <section className={theme === "dark" ? "dark" : ""}>
      <Routes>
        <Route path="/" element={<ScannerPage />} />
        <Route path="/stock/:symbol" element={<StockDetailPage />} />
      </Routes>
    </section>
  )
}

export default App

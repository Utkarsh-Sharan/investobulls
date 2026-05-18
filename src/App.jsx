import { useState } from "react"
import ScannerPage from "./pages/ScannerPage.jsx"
import { useTheme } from "./context/ThemeContext.jsx";
import { Route, Routes } from "react-router-dom";
import StockDetailPage from "./pages/StockDetailPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const {theme} = useTheme();

  return (
    <section className={theme === "dark" ? "dark" : ""}>
      <Navbar />

      <Routes>
        <Route path="/" element={<ScannerPage />} />
        <Route path="/stock/:symbol" element={<StockDetailPage />} />
      </Routes>
    </section>
  )
}

export default App

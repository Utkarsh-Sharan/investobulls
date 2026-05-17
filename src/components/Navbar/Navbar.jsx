import { useTheme } from "../../context/ThemeContext.jsx";

const Navbar = () => {
  const {toggleTheme} = useTheme();

  return (
    <section className="bg-white text-black dark:bg-gray-900 dark:text-white py-4 flex justify-around items-center border-b-2 shadow-md">
        <h1 className="text-2xl font-medium">InvestoBulls Screener</h1>

        <button onClick={toggleTheme}>L/D</button>
    </section>
  )
}

export default Navbar
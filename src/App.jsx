import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import { useTheme } from "./context/useContext";

function App() {
    const { darkMode } = useTheme();

    return (
        <div className={`${darkMode ? "dark" : null}`}>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Country" element={<CountryDetail />} />
            </Routes>
        </div>
    );
}

export default App;

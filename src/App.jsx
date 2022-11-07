import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import { useFetch } from "./hooks/useFetch";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [allCountries, error, loading] = useFetch("https://restcountries.com/v3.1/all");

    function toggleDarkMode() {
        setDarkMode((pre) => !pre);
    }

    return (
        <div className={`${darkMode ? "dark" : null}`}>
            <Header toggleDarkMode={toggleDarkMode} />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage countries={allCountries} loading={loading} error={error} />}
                />
                <Route path="/Country" element={<CountryDetail countries={allCountries} />} />
            </Routes>
        </div>
    );
}

export default App;

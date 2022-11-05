import { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [countries, setCountries] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     setLoading(true);
    //     fetch("https://restcountries.com/v3.1/all")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setCountries(data);
    //             setLoading(false);
    //         });
    // }, []);

    useEffect(() => {
        const fetchCoutries = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");

                if (!response.ok) {
                    throw new Error(`This is HTTP error: The status is ${response.status}
                    `);
                }
                const data = await response.json();
                setCountries(data);
                setError(null);
            } catch (error) {
                setError(error.message);
                setCountries(null);
            } finally {
                setLoading(false);
            }
        };
        fetchCoutries();
    }, []);

    return (
        <div className={`${darkMode ? "dark" : null}`}>
            <Header setDarkMode={setDarkMode} />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage countries={countries} loading={loading} error={error} />}
                />
                <Route path="/Country" element={<CountryDetail />} />
            </Routes>
         
        </div>
    );
}

export default App;

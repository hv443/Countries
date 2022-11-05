import { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  // async function loadCountries() {
  //   const response = await fetch("https://restcountries.com/v3.1/all");
  //   if (!response.ok) {
  //     throw new Error("Something went Wrong");
  //   }
  //   const data = await response.json();
  //   setCountries(data);
  // }

  return (
    <div className={`${darkMode ? "dark" : null}`}>
      <Header setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<HomePage countries={countries} loading={loading} />} />
        <Route path="/Country" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;

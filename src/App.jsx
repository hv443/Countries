import { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={`${darkMode ? "dark" : ""}`}>
        <Header setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Country" element={<CountryDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

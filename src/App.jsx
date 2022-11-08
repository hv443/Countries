import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import { ContextProvider } from "./context/useContext";
import { useState } from "react";

function App() {
    const [darkMode, setMode] = useState(false);
    function toggleMode() {
        setMode((pre) => !pre);
    }

    return (
        <ContextProvider>
            <div className={`${darkMode ? "dark" : null}`}>
                <Header toggleMode={toggleMode} darkMode={darkMode} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Country" element={<CountryDetail />} />
                </Routes>
            </div>
        </ContextProvider>
    );
}

export default App;

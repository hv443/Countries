import { useContext, createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const Countries = createContext();
const DarkMode = createContext();

export function useCountries() {
    return useContext(Countries);
}

export function useTheme() {
    return useContext(DarkMode);
}

export function ContextProvider({ children }) {
    const [countries, error, loading] = useFetch("https://restcountries.com/v3.1/all");

    const theme = JSON.parse(localStorage.getItem("theme")) || false;
    const [darkMode, setMode] = useState(theme);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(darkMode));
    }, [darkMode]);

    function toggleMode() {
        setMode((pre) => !pre);
    }

    return (
        <DarkMode.Provider value={[darkMode, toggleMode]}>
            <Countries.Provider value={[countries, error, loading]}>{children}</Countries.Provider>
        </DarkMode.Provider>
    );
}

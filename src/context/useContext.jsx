import { useContext, createContext } from "react";
import { useFetch } from "../hooks/useFetch";

const Countries = createContext();

export function useCountries() {
    return useContext(Countries);
}

export function ContextProvider({ children }) {
    const [countries, error, loading] = useFetch("https:/restcountries.com/v3.1/all");

    return <Countries.Provider value={[countries, error, loading]}>{children}</Countries.Provider>;
}

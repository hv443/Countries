import { useState, useEffect } from "react";

export const useFetch = (API_URL) => {
    const [fetchedData, setFetchedData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`This is HTTP error: The status is ${response.status}
                `);
                }
                const data = await response.json();
                setFetchedData(data);
                setError(null);
            } catch (error) {
                setError(error.message);
                setFetchedData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [API_URL]);

    return [fetchedData, error, loading];
};

// "https://restcountries.com/v3.1/all"

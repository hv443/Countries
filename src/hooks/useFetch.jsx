import { useState, useEffect } from "react";

export const useFetch = (API_URL) => {
    const [countries, setFetchedData] = useState();
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
                shuffleArray(data);
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

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    return [countries, error, loading];
};

// "https://restcountries.com/v3.1/all"

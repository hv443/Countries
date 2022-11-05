import React, { useEffect, useState, useRef } from "react";

const Pagination = ({ countries, displayCountries }) => {
    const [countryToDisplay, setCountryToDisplay] = useState(null);
    const [startPage, setStartPage] = useState(1);
    const maxCardPerPage = useRef(25);

    const indexOfLastCard = startPage * maxCardPerPage.current;
    const indexOfFirstCard = indexOfLastCard - maxCardPerPage.current;

    useEffect(() => {
        const currentPage = countries.slice(indexOfFirstCard, indexOfLastCard);

        setCountryToDisplay(currentPage);
    }, [startPage]);

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(countries.length / maxCardPerPage.current); i++) {
        pageNumber.push(i);
    }
    function paginate(num) {
        setStartPage(num);
    }

    const nav = pageNumber.map((number) => {
        return (
            <li
                className="bg-element shadow-sm aspect-video shadow-primary rounded-lg p-3 grid place-content-center cursor-pointer
                active:shadow-none hover:bg-primary hover:text-secondary"
                onClick={(e) => {
                    paginate(number);
                }}
                key={number}>
                {number}
            </li>
        );
    });

    return <ul className="flex gap-4 flex-wrap items-center justify-center">{nav}</ul>;
};

export default Pagination;

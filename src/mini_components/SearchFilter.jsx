import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useCountries } from "../context/useContext";

const SearchFilter = ({ setFilteredCountries }) => {
    const [countries] = useCountries();

    function searchFilter(e) {
        const inputValue = e.target.value;

        const searchFilteredCountries = countries?.filter((country) => {
            return country.name.common.toLowerCase().includes(inputValue.toLowerCase());
        });
        setFilteredCountries(searchFilteredCountries);

        // setFilteredCountries((countries) => {
        //     return countries.filter((country) => {
        //         return country.name.common.toLowerCase().includes(inputValue.toLowerCase());
        //     });
        // });
    }

    return (
        <div className="relative">
            <input
                onChange={searchFilter}
                type="text"
                name="search"
                placeholder="Search for a country..."
                className="px-12 py-3 shadow w-full rounded-md outline-none text-input bg-element duration-200
                       md:w-96"
            />
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer text-input"
            />
        </div>
    );
};

export default SearchFilter;

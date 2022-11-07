import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function RegionFilterBtn({ countries, setFilteredCountries }) {
    const [regionText, setRegionText] = useState(null);
    const [isRegionSelected, setIsRegionSelected] = useState(false);

    const regions = ["All", "Asia", "Africa", "Americas", "Europe", "Oceania"];

    function toggleRegion() {
        setIsRegionSelected((pre) => !pre);
    }

    function regionFilter(e) {
        const regionFilteredCountries = countries?.filter((country) => {
            return e.target.innerText == "All"
                ? country
                : country.region.toLowerCase().includes(e.target.innerText.toLowerCase());
        });

        setFilteredCountries(regionFilteredCountries);
        setIsRegionSelected((pre) => !pre);
        setRegionText(e.target.innerText);
    }

    const regionBtn = regions.map((region, key) => {
        return (
            <li
                onClick={regionFilter}
                key={key}
                className="px-3 py-2 active:bg-primary active:text-secondary hover:bg-primary hover:text-secondary duration-150 cursor-pointer">
                {region}
            </li>
        );
    });

    return (
        <div
            className="max-w-[50%] shadow rounded-md relative 
  sm:min-w-[15%] lg:min-w-[10%]">
            <div
                onClick={toggleRegion}
                className="flex justify-between rounded-md px-5 py-3 bg-element items-center cursor-pointer duration-200">
                <span>{regionText ?? "Filter by Region"}</span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`${
                        isRegionSelected ? "rotate-180" : "rotate-0"
                    } text-[10px] ml-3 duration-200`}
                />
            </div>
            <ul
                className={`${!isRegionSelected ? "h-0 top-full" : "h-[490%]"}
region-menu absolute z-40 shadow-lg w-full duration-200 left-0 top-[110%] rounded-md bg-element overflow-hidden`}>
                {regionBtn}
            </ul>
        </div>
    );
}

export default RegionFilterBtn;

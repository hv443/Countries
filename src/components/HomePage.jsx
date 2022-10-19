import React, { useEffect, useState, useRef, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import CountryCard from "./CountryCard";

const HomePage = () => {
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState();
  const [regionBtn, setRegionBtn] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(false);

  const [regionText, setRegionText] = useState(false);
  const searchInput = useRef();

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  function searchFilter(e) {
    const inputValue = e.target.value;
    const searchFiltered = countries?.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    });
    setFilteredCountries(searchFiltered);
  }

  function regionFilter(e) {
    const regionFiltered = countries?.filter((country) => {
      return e.target.innerText == "All"
        ? country
        : country.region
            .toLowerCase()
            .includes(e.target.innerText.toLowerCase());
    });

    setFilteredCountries(regionFiltered);
    setRegionBtn((pre) => !pre);
    searchInput.current.value = "";
    setRegionText(e.target.innerText);
  }

  function toggleRegion(e) {
    setRegionBtn((pre) => !pre);
  }

  return (
    <div
      className="px-4 py-6 text-sm font-semibold space-y-8 text-primary bg-secondary min-h-screen
        md:px-10">
      <div
        className="flex flex-col gap-8
        md:flex-row md:justify-between md:gap-0">
        <div className="relative">
          <input
            ref={searchInput}
            onChange={searchFilter}
            type="text"
            name="search"
            placeholder="Search for a country..."
            className=" px-10 pl-14 py-3 shadow w-full rounded-md outline-none text-input bg-element
            md:w-96"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer text-input"
          />
        </div>

        <div
          className="max-w-[60%] shadow rounded-md relative
              md:max-w-fit">
          <div
            onClick={toggleRegion}
            className="flex justify-between rounded-md px-5 py-3 bg-element items-center cursor-pointer">
            <span>{regionText ? regionText : "Filter by Region"}</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-[10px] ml-3"
            />
          </div>
          <ul
            onClick={regionFilter}
            className={`${!regionBtn && "h-0 top-full "}
            region-menu absolute z-40  shadow w-full duration-300 left-0 top-[110%]  rounded-md bg-element overflow-hidden`}>
            <li className="px-3 py-2 hover:bg-secondary duration-300 cursor-pointer">
              All
            </li>
            <li className="px-3 py-2 hover:bg-secondary duration-300 cursor-pointer">
              Africa
            </li>
            <li className="px-3 py-2 hover:bg-secondary duration-300 cursor-pointer">
              Asia
            </li>
            <li className="px-3 py-2 hover:bg-secondary duration-300 cursor-pointer">
              Americas
            </li>
            <li className="px-3 py-2 hover:bg-secondary duration-300 cursor-pointer">
              Europe
            </li>
            <li className="px-3 py-2 hover:bg-secondary duration-300 cursor-pointer">
              Oceania
            </li>
          </ul>
        </div>
      </div>
      {loading ? (
        <h1 className="w-full h-[50vh] text-3xl flex items-center justify-center">
          Loading...
        </h1>
      ) : (
        <CountryCard
          countries={filteredCountries ? filteredCountries : countries}
        />
      )}
    </div>
  );
};

export default HomePage;

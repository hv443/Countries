import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [countries, setCountries] = useState();
  const [regionMenu, setRegionMenu] = useState(false);
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState();
  const inputRef = useRef();

  function searchCountry() {
    console.log(inputRef);
  }

  function selectRegion() {
    setRegionMenu((pre) => !pre);
  }

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  const country = countries?.map((country, key) => {
    return (
      <div
        key={key}
        className="shadow rounded-md overflow-hidden w-[275px] h-[320px] bg-element cursor-pointer hover:scale-110 duration-200">
        <div className="h-[50%] overflow-hidden">
          <img
            src={country.flags.png}
            alt="flag img"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-5 ">
          <h1 className="font-extrabold text-lg">{country.name.common}</h1>
          <div className="my-3">
            <p className="font-normal">
              <span className="font-bold">Population : </span>
              <span className="text-input">{country.population}</span>
            </p>
            <p className="font-normal">
              <span className="font-bold">Region : </span>
              <span className="text-input">{country.region}</span>
            </p>
            <p className="font-normal">
              <span className="font-bold">Capital : </span>
              <span className="text-input">{country.capital}</span>
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      className="px-4 py-6 text-sm font-semibold space-y-8 text-primary bg-secondary
        md:px-10">
      <div
        className="flex flex-col gap-8
        md:flex-row md:justify-between md:gap-0">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            name="search"
            placeholder="Search for a country..."
            className=" px-10 pl-14 py-3 shadow w-full rounded-md outline-none text-input bg-element
            md:w-96"
          />
          <FontAwesomeIcon
            onClick={searchCountry}
            icon={faMagnifyingGlass}
            className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer text-input"
          />
        </div>

        <div
          className="max-w-[60%]  shadow px-5 py-3 rounded-md relative bg-element
              md:max-w-fit">
          <div
            onClick={selectRegion}
            className="flex justify-between items-center cursor-pointer ">
            <span>Filter by Region</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-[10px] ml-3"
            />
          </div>
          <ul
            className={`${!regionMenu ? "" : ""}
            absolute z-40 shadow w-full duration-300 left-0 top-[110%] px-5 py-3 space-y-2 rounded-md bg-element`}>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      </div>

      <div
        className="flex flex-wrap gap-10 justify-center items-center
           sm:justify-evenly lg:justify-between">
        {loading ? <h1>Loading...</h1> : country}
      </div>
    </div>
  );
};

export default HomePage;

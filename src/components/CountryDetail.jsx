import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryDetai = () => {
  const location = useLocation();
  const countryRef = useRef(location.state);
  console.log(countryRef.current);

  const {
    flags: { png },
    name: { common },
    region,
    subregion,
    capital,
    population,
    currencies,
    languages,
    tld,
    borders,
  } = countryRef.current;

  const currency = Object.keys(currencies);
  const language = Object.values(languages);

  console.log(languages);

  return (
    <div className="px-6 py-8 text-primary bg-secondary text-base">
      <Link to="/">
        <button className="w-32 py-3 shadow flex items-center justify-evenly bg-element rounded-md">
          <FontAwesomeIcon icon={faArrowLeft} />
          <p>Back</p>
        </button>
      </Link>

      <div className="w-full my-12 ">
        <img className="object-cover" src={png} alt="Flag" />
      </div>

      <div className="capitalize space-y-2 detail ">
        <h1 className="text-3xl font-bold mb-5">{common}</h1>

        <p>
          <span>native name : </span> {}
        </p>
        <p>
          <span>Population :</span>
          {population}
        </p>
        <p>
          <span>region : </span> {region}
        </p>
        <p>
          <span>sub region : </span>
          {subregion}
        </p>
        <p>
          <span>capital : </span>
          {capital}
        </p>
      </div>

      <div className="capitalize space-y-2 my-10 detail ">
        <p>
          <span>top level domain : </span>
          {tld}
        </p>
        <p>
          <span>curencies : </span>
          {currency[0]}
        </p>
        <p>
          <span>languages : </span>
          {language.map((lan) => lan).join(",")}
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold">Border Countries:</h4>
        <div className="flex w-full space-x-3 text-center justify-evenly">
          {borders.map((bor) => {
            return (
              <p className="bg-element w-full rounded-sm py-2 my-2 text-sm font-bold text-input">
                {bor}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryDetai;

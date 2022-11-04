import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryDetail = () => {
  const location = useLocation();
  const countryRef = useRef(location.state);

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

  borders?.length > 3 ? borders.splice(3) : borders;

  const currency = Object.keys(currencies);
  const language = Object.values(languages);

  const nativeNameObject = countryRef.current.name.nativeName;
  const nativeName = Object.values(nativeNameObject);

  return (
    <div
      className="min-h-screen p-6 text-primary bg-secondary text-base 
        md:p-10">
      <Link to="/">
        <button className="w-28 p-2 shadow flex items-center justify-evenly bg-element rounded-sm">
          <FontAwesomeIcon icon={faArrowLeft} />
          <p>Back</p>
        </button>
      </Link>

      <div className="md:grid md:grid-cols-2 md:mt-12 md:gap-20">
        <div
          className="w-full my-12 shadow
            md:my-0">
          <img
            className="w-full 
            md:h-full "
            src={png}
            alt="Flag"
          />
        </div>

        <div className="md:grid  md:items-center md:content-center">
          <div>
            <h1 className="text-3xl font-bold mb-5">{common}</h1>
          </div>

          <div className="md:grid md:grid-cols-2 md:mb-10 md:gap-20">
            <div className="capitalize space-y-2 detail">
              <p>
                <span>native name : </span> {nativeName[0].common}
              </p>
              <p>
                <span>Population :</span>
                {new Intl.NumberFormat('en-IN').format(population)}
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
            <div
              className="capitalize space-y-2 my-10 detail 
                md:my-0">
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
                {language?.map((lan) => lan).join(",")}
              </p>
            </div>
          </div>

          <div className="md:flex md:items-center md:space-x-4">
            <h4
              className="text-lg font-bold mb-3
                md:mb-0 min-w-max ">
              Border Countries:
            </h4>
            <div className="flex w-full space-x-2 text-center justify-evenly">
              {borders ? borders.map((border, id) => {
                return (
                  <p
                    key={id}
                    className="bg-element shadow w-full rounded-sm py-2 text-sm font-semibold text-input">
                    {border}
                  </p>
                );
              }) : " No Border Countries "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;

import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryDetail = ({ countries }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const countryRef = useRef(location.state);
    const {
        flags: { png: flag },
        name: { common: countryName },
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
    const language = Object.values(languages)
        .map((lan) => lan)
        .join(",");

    const nativeName = Object.values(countryRef.current.name.nativeName)[0].common;

    // ! country Border

    const borderToDisplay = [];
    let borderCountries;

    borders?.map((bor) => {
        countries?.map((country) => {
            const borderCountry = country.cca3;
            if (bor == borderCountry) {
                borderToDisplay.push(country.name.common);

                borderCountries = borderToDisplay.map((border, id) => {
                    return (
                        <Link
                            state={country}
                            key={id}
                            className="bg-element shadow w-full rounded-sm py-2 text-sm font-semibold flex items-center justify-center text-input">
                            {border}
                        </Link>
                    );
                });
            }
        });
    });

    countries?.map((country, id) => {
        borderToDisplay?.map((bor) => {
            return (
                <Link
                    state={country}
                    key={id}
                    className="bg-element shadow w-full rounded-sm py-2 text-sm font-semibold flex items-center justify-center text-input">
                    {bor}
                </Link>
            );
        });
    });

    //  !!!

    return (
        <div
            className="min-h-screen p-6 text-primary bg-secondary text-base duration-200
        md:p-10">
            <Link to="/">
                <button className="w-28 p-2 shadow flex items-center justify-evenly bg-element rounded-sm duration-200 ">
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
                        src={flag}
                        alt="Flag"
                    />
                </div>

                <div className="md:grid  md:items-center md:content-center">
                    <div>
                        <h1 className="text-3xl font-bold mb-5">{countryName}</h1>
                    </div>

                    <div className="md:grid md:grid-cols-2 md:mb-10 md:gap-20">
                        <div className="capitalize space-y-2 detail">
                            <p>
                                <span>native name : </span> {nativeName}
                            </p>
                            <p>
                                <span>Population :</span>
                                {new Intl.NumberFormat("en-IN").format(population)}
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
                                {currency}
                            </p>
                            <p>
                                <span>languages : </span>
                                {language}
                            </p>
                        </div>
                    </div>

                    <div className="md:flex md:items-center md:space-x-4">
                        <h4
                            className="text-lg font-bold mb-3
                md:mb-0 min-w-max ">
                            Border Countries:
                        </h4>
                        <div className="flex w-full gap-3 text-center cursor-pointer">
                            {borderCountries}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;

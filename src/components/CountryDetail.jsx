import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryDetail = ({ countries }) => {
    const location = useLocation();
    const [selectedCountry, setSelectedCountry] = useState(location.state);

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
    } = selectedCountry;

    borders?.length > 3 ? borders.splice(3) : borders;

    const currency = Object.keys(currencies);
    const language = Object.values(languages)
        .map((lan) => lan)
        .join(",");

    const nativeName = Object.values(selectedCountry.name.nativeName)[0].common;

    // ! country Border

    let borderCountriesName = [];

    borders?.forEach((border) => {
        countries?.forEach((country) => {
            if (border == country.cca3) {
                borderCountriesName.push(country.name.common);
            }
        });
    });

    const borderCountries = borders
        ? countries?.map((country) => {
              const borderCountry = borderCountriesName.map((border, id) => {
                  if (border == country.name.common) {
                      return (
                          <Link
                              key={id}
                              state={country}
                              to="/Country"
                              className="bg-element shadow w-full rounded-sm p-2 text-sm font-semibold flex items-center justify-center duration-200 text-input hover:bg-input hover:text-secondary">
                              {border}
                          </Link>
                      );
                  }
              });
              return borderCountry;
          })
        : "No Border Countries";

    //  !!!

    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedCountry(location.state);
    }, [borderCountries]);

    return (
        <div className="text-primary bg-secondary min-h-screen text-base duration-200">
            <main
                className="mx-auto p-5 pt-10
       sm:max-w-[85%] sm:pt-14">
                <Link to="/">
                    <button className="w-28 p-2 shadow flex items-center justify-evenly bg-element rounded-sm duration-200 ">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <p>Back</p>
                    </button>
                </Link>

                <div className="md:grid md:grid-cols-2 md:mt-12 md:gap-20">
                    <div
                        className="w-full my-12 shadow rounded-sm overflow-hidden
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
                            <div className="flex w-full gap-1 text-center cursor-pointer">
                                {borderCountries}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CountryDetail;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ countries }) => {
    const count = 12;
    const [countriesCount, setCountriesCount] = useState(count);

    function loadMoreCountries() {
        setCountriesCount((pre) => pre + count);
    }

    const countriesToDisplay = countries?.slice(0, countriesCount).map((country, key) => {
        const { name, population, region, capital } = country;

        return (
            <Link
                key={key}
                to="/Country"
                state={country}
                className={`card shadow rounded-md overflow-hidden w-full max-w-[295px] h-[340px] bg-element cursor-pointer hover:scale-105 duration-200`}>
                <div className="h-[50%] overflow-hidden">
                    <img
                        src={country.flags.png}
                        alt="flag img"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-5">
                    <h1 className="font-extrabold text-lg">{name.common}</h1>
                    <div className="my-3">
                        <p className="font-normal">
                            <span className="font-bold">Population : </span>
                            <span className="text-input">
                                {new Intl.NumberFormat("en-IN").format(population)}
                            </span>
                        </p>
                        <p className="font-normal">
                            <span className="font-bold">Region : </span>
                            <span className="text-input">{region}</span>
                        </p>
                        <p className="font-normal">
                            <span className="font-bold">Capital : </span>
                            <span className="text-input">{capital}</span>
                        </p>
                    </div>
                </div>
            </Link>
        );
    });

    const noCountriesFound = <div className="text-xl font-bold mt-10">No Countries Found !!</div>;

    const country = countries?.length <= 0 ? noCountriesFound : countriesToDisplay;

    return (
        <>
            <div
                className="flex flex-wrap gap-14 justify-center px-6 
                sm:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {country}
            </div>

            {countries.length > countriesCount && (
                <div className="flex gap-4 flex-wrap items-center justify-center">
                    <button
                        className="border-2 py-3 px-5 rounded-lg shadow-md"
                        onClick={loadMoreCountries}>
                        Load More
                    </button>
                </div>
            )}
        </>
    );
};

export default CountryCard;

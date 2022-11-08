import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CountryCards = ({ countries }) => {
    const count = useRef(12);
    const [countriesCount, setCountriesCount] = useState(count.current);

    useEffect(() => {
        setCountriesCount(count.current);
    }, [countries]);

    function loadMoreCountries() {
        setCountriesCount((pre) => pre + count.current);
    }

    const countriesToDisplay = countries?.slice(0, countriesCount).map((country, key) => {
        const { name, population, region, capital } = country;

        return (
            <Link
                key={key}
                to="/Country"
                state={country}
                className={`card shadow rounded-md overflow-hidden bg-element 
                 cursor-pointer hover:scale-105 duration-200 hover:shadow-xl`}>
                <div className="overflow-hidden aspect-video">
                    <img
                        src={country.flags.png}
                        alt="flag img"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
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

    const country =
        countries?.length <= 0 ? (
            <p className="w-full text-center text-lg">No Country to Display !!</p>
        ) : (
            <div
                className="grid gap-8 px-6 place-content-center
sm:px-0 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3 xl:grid-cols-4 lg:gap-14">
                {countriesToDisplay}
            </div>
        );

    return (
        <>
            {country}

            {countries.length > countriesCount && (
                <div className="flex gap-4 flex-wrap items-center justify-center">
                    <button
                        className="border border-primary py-3 px-5 rounded-lg bg-primary text-secondary duration-300 shadow active:bg-secondary active:text-primary sm:hover:bg-secondary sm:hover:text-primary"
                        onClick={loadMoreCountries}>
                        Load More
                    </button>
                </div>
            )}
        </>
    );
};

export default CountryCards;

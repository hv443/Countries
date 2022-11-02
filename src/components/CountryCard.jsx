import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ countries }) => {
  const country =
    countries?.length <= 0 ? (
      <div
        className="text-lg font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          md:text-2xl">
        No Countries Found
      </div>
    ) : (
      countries?.map((country, key) => {
        
        const { name, population, region, capital } = country;

        return (
          <Link key={key} to="/Country" state={country}>
            <div
              className={`shadow rounded-md overflow-hidden w-full h-[320px] bg-element cursor-pointer hover:scale-105 duration-200`}>
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
                    <span className="text-input">{population}</span>
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
            </div>
          </Link>
        );
      })
    );

  return (
    <div
      className="grid grid-cols-1 gap-8 px-6
        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {country}
    </div>
  );
};

export default CountryCard;

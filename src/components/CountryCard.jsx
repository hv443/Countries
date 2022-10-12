import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ countries }) => {
  const country = countries?.map((country, key) => {
    const { name, population, region, capital } = country;

    return (
      <Link key={key} to="/Country" state={country}>
        <div
          className={`shadow rounded-md overflow-hidden w-[275px] h-[320px] bg-element cursor-pointer hover:scale-110 duration-200`}>
          <div className="h-[50%] overflow-hidden">
            <img
              src={country.flags.png}
              alt="flag img"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-5 ">
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
  });

  return (
    <div
      className="flex flex-wrap gap-8 mt-8 justify-center items-center
        sm:justify-evenly lg:justify-between">
      {country}
    </div>
  );
};

export default CountryCard;

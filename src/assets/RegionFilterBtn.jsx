import React from "react";

function RegionFilterBtn({ filterByRegion }) {
  const regions = ["All", "Asia", "Africa", "Americas", "Europe", "Oceania"];

  const regionBtn = regions.map((region, key) => {
    return (
      <li
        onClick={filterByRegion}
        key={key}
        className="px-3 py-2 active:bg-primary active:text-secondary hover:bg-primary hover:text-secondary duration-150 cursor-pointer">
        {region}
      </li>
    );
  });
  return <>{regionBtn}</>;
}

export default RegionFilterBtn;

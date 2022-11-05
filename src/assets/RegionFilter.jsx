import React from "react";

function FilterBtn() {
  const regions = ["All", "Asia", "Africa", "Americas", "Europe", "Oceania"];

  const regionBtn = regions.map((region, key) => {
    return (
      <li
        key={key}
        className="px-3 py-2 active:bg-primary active:text-secondary hover:bg-primary hover:text-secondary duration-150 cursor-pointer">
        {region}
      </li>
    );
  });
  return <>{regionBtn}</>;
}

export default FilterBtn;

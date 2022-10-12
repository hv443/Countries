import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryDetai = (props) => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="px-6 py-8">
      <Link to="/">
        <button className="w-28 py-2 shadow flex items-center justify-evenly">
          <FontAwesomeIcon icon={faArrowLeft} />
          <p>Back</p>
        </button>
      </Link>
    </div>
  );
};

export default CountryDetai;

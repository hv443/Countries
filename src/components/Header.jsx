import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setDarkMode }) => {


  return (
    <div className="text-primary bg-element relative">
      <div className="flex justify-between items-center px-4 py-5 shadow font-bold">
        <h1>Where in the world?</h1>
        <button
          className="space-x-1 flex items-center"
          onClick={() => {
            setDarkMode((pre) => !pre);
          }}>
          <FontAwesomeIcon icon={faMoon} />
          <span className="text-sm"> Dark Mode</span>
        </button>
      </div>
    </div>
  );
};

export default Header;

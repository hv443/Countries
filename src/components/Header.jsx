import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = ({ toggleDarkMode }) => {
    return (
        <div className="text-primary bg-element relative duration-200">
            <div className="flex justify-between items-center px-4 py-5 shadow font-bold">
                <h1 className="text-lg md:text-xl">Where in the world?</h1>
                <button className="space-x-1 flex items-center" onClick={toggleDarkMode}>
                    <FontAwesomeIcon icon={faMoon} />
                    <span className="text-sm"> Dark Mode</span>
                </button>
            </div>
        </div>
    );
};

export default Header;

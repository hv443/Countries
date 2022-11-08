import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/useContext";

const Header = () => {
    const { darkMode, toggleMode } = useTheme();

    return (
        <div className="text-primary bg-element relative duration-200">
            <div className="flex justify-between items-center py-5 px-3 shadow font-bold sm:px-10 ">
                <h1 className="text-base md:text-xl">Where in the world?</h1>
                <button className="space-x-1 flex items-center" onClick={toggleMode}>
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                    <span className="text-sm">{darkMode ? "Light" : "Dark"}</span>
                </button>
            </div>
        </div>
    );
};

export default Header;

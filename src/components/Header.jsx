import React from "react";
import { useState } from "react";

const Header = ({ setDarkMode }) => {
  return (
    <div className="text-primary bg-element relative">
      <div className="flex justify-between items-center px-4 py-5 shadow font-bold">
        <h1>Where in the world?</h1>
        <button
          onClick={() => {
            setDarkMode((pre) => !pre);
          }}>
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Header;

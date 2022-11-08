import React, { useState } from "react";
import RegionFilterBtn from "../mini_components/RegionFilterBtn";
import CountryCards from "./CountryCards";
import SearchFilter from "../mini_components/SearchFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const HomePage = ({ countries, loading, error }) => {
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [scrollValue, setScrollValue] = useState();

    function scrollToTop() {
        if (scrollValue > 300) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
    window.onscroll = () => {
        setScrollValue(window.scrollY);
    };

    return (
        <div className="bg-secondary text-primary font-semibold  duration-200 min-h-screen">
            <FontAwesomeIcon
                icon={faArrowUp}
                onClick={scrollToTop}
                className={`${
                    scrollValue > 300 ? "scale-100" : "scale-0"
                } duration-300 fixed z-50 right-5 bottom-8 p-3 aspect-square bg-primary text-secondary shadow shadow-secondary rounded-full`}
            />

            <div className="grid mx-auto px-4 py-6 text-sm space-y-8  sm:max-w-[85%]">
                <div
                    className="flex flex-col gap-8
                       md:flex-row md:justify-between md:gap-0">
                    <SearchFilter
                        countries={countries}
                        setFilteredCountries={setFilteredCountries}
                    />

                    <RegionFilterBtn
                        countries={countries}
                        setFilteredCountries={setFilteredCountries}
                    />
                </div>

                {loading ? (
                    <h1 className="w-full h-[50vh] text-3xl flex items-center justify-center">
                        Loading...
                    </h1>
                ) : error ? (
                    <h1 className="w-full  text-base text-center">{error}</h1>
                ) : (
                    <CountryCards countries={filteredCountries ?? countries} />
                )}
            </div>
        </div>
    );
};

export default HomePage;

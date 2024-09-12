import { Link, useLocation, useMatch } from "react-router-dom";
import React, { useContext } from 'react';
import { DataContext } from "../Context.jsx";
import logo from "../assets/Kitsune.jpg";

const NavBar = () => {
    const location = useLocation();
    const currentPage = location.pathname;
    const { inputText ,setInputText } = useContext(DataContext);

    const homeMatch = useMatch('/home');
    const CatBreedsMatch = useMatch('/catBreeds');

    const handleInput = (e) => {
        const searchTerm = e.target.value;
        setInputText(searchTerm);
    };

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link
                        to={"/home"}
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src={logo}
                            className="h-16 w-12 object-cover rounded-full hover:transform hover:rotate-360 hover:transition hover:duration-500 hover:ease-in-out"
                            alt="Cat App Logo"
                            loading="eager"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            KitsuCat
                        </span>
                    </Link>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-user"
                    >
                        <ul className="flex flex-col font-medium items-baseline p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    to={"/home"}
                                    className={`block py-2 px-3  rounded md:bg-transparent md:p-0 ${
                                        currentPage === "/home"
                                            ? "text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500"
                                            : "text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                                    }`}
                                    aria-current={
                                        currentPage === "/home"
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/catBreeds"}
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                                        currentPage === "/catBreeds"
                                            ? "text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500"
                                            : "text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                                    }`}
                                >
                                    CatBreeds
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/favorite"}
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                                        currentPage === "/favoties"
                                            ? "text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500"
                                            : "text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                                    }`}
                                >
                                    Favorites
                                </Link>
                            </li>

                            {currentPage === "/home" || currentPage === `/catBreeds/:breedId` ? null : (
                                <li>
                                    <div className="flex">
                                        <div className="relative hidden sm:block">
                                            {/* Search Icon */}
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg
                                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                    />
                                                </svg>
                                                <span className="sr-only">
                                                    Search icon
                                                </span>
                                            </div>
                                            <label htmlFor="search-navbar"></label>
                                            <input
                                                type="text"
                                                id="search-navbar"
                                                value={inputText} // Defines Initial Value for the Input Field
                                                onChange={handleInput}
                                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Search..."
                                            />
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;

import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const currentPage = location.pathname;
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link
                        to={"/home"}
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="../src/assets/Kitsune.jpg"
                            className="h-14 w-10 object-cover rounded-full hover:transform hover:rotate-360 hover:transition hover:duration-500 hover:ease-in-out"
                            alt="Kitsune Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            KitsuCat
                        </span>
                    </Link>
                    <ul className="flex flex-wrap space-x-4 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link
                                to={"/home"}
                                className={`block py-2 px-3  rounded md:bg-transparent md:p-0 ${
                                    currentPage === "/home"
                                        ? "text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500"
                                        : "text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                                }`}
                                aria-current={
                                    currentPage === "/home" ? "page" : undefined
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
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023
                    <Link to="/home" className="hover:underline">
                        Kitsucat™
                    </Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;

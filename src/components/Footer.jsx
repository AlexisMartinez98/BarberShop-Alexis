import { Link, Route, Routes } from "react-router-dom";
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#010024] w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline font-bold">Alexis Martinez</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to="/" className="text-xl mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-red-600 mr-4 active:underline">Inicio</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
import { Link } from "react-router-dom";
import logoBarber from '../img/logoBarber.svg'
import CartWidget from './CartWidget'
import React from 'react'

const NavBar = () => {

    return (
            <nav className="flex items-center justify-between flex-wrap bg-[#010024]">
                <div className="flex items-center flex-shrink-0 text-white mr-8 ml-5">
                    <img src={logoBarber} alt="barberLogo" id='logo'>
                    </img>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/" className="block text-xl mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-red-600 mr-4 active:underline">
                            Inicio
                        </Link>
                        <Link to="/category/maquinas" className="block text-xl mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-red-600 mr-4 active:underline">
                            Maquinas
                        </Link>
                        <Link to="/category/herramientas" className="block text-xl mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-red-600 mr-4 active:underline">
                            Herramientas
                        </Link>
                        <Link to="/category/accesorios" className="block text-xl mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-red-600 mr-4 active:underline">
                            Accesorios
                        </Link>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
    )
}

export default NavBar
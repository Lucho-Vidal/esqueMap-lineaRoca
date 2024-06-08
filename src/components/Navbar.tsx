import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        navigate("/login");
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link to="/">EsqueMap Linea Roca</Link>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
                {/* <div className="flex space-x-4"> */}
                    {isLoggedIn ? (
                        <div className="lg:flex lg:space-x-4">
                        <Link to="/esquema" className="text-white mx-3">
                            Esquema CAF
                        </Link>

                        <Link to="/croquis" className="text-white mx-3">
                            Croquis
                        </Link>

                        <button onClick={handleLogout} className="text-white">
                            Cerrar sesión
                        </button>

                        </div>
                    ) : (
                        <Link to="/login" className="text-white">
                            {/* Iniciar sesión */}
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

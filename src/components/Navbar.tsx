import React, { useEffect, useState } from "react";
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

    const [isHorizontal, setIsHorizontal] = useState(false);

    useEffect(() => {
        const handleOrientationChange = () => {
            setIsHorizontal(Math.abs(window.orientation) === 90);
        };

        // Manejar el evento de cambio de orientación
        window.addEventListener("orientationchange", handleOrientationChange);

        // Llamar a la función una vez para establecer el estado inicial
        handleOrientationChange();

        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener(
                "orientationchange",
                handleOrientationChange
            );
        };
    }, []);

    return (
        <nav className={`navbar ${isHorizontal ? 'hidden' : 'bg-gray-800 p-4'}`} >
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
                <div
                    className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"}`}
                >
                    {/* <div className="flex space-x-4"> */}
                    {isLoggedIn ? (
                        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0">
                            
                            <Link to="/esquemap" className="text-white mx-3">
                                Esquemap
                            </Link>
                            <Link to="/esquemas" className="text-white mx-3">
                                Esquema CAF
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-white mx-3"
                            >
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

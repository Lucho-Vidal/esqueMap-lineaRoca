import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        navigate("/login");
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link to="/">EsqueMap Linea Roca</Link>
                </div>
                <div className="flex space-x-4">
                    {isLoggedIn ? (
                        <div>
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

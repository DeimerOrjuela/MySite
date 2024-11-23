import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { name: "Home", path: "/" }, // Ruta correcta
    { name: "Sobre mi", path: "/AboutUS" }, // Ruta correcta
    { name: "Proyectos", path: "/Projects" }, // Ruta correcta
    { name: "Stack", path: "/Stack" }, // Ruta correcta
    { name: "Contacto", path: "/Contact" }, // Ruta correcta
  ];

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-olive-green ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-32 items-center justify-between">
            {/* Botón de hamburguesa: visible solo en pantallas pequeñas */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Abrir menú principal</span>
                {menuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Logo y enlaces de navegación para pantallas grandes */}
            <div className="flex flex-1 justify-center sm:justify-start items-center">
              <NavLink to="/">
                <img className="h-16 w-auto" src={logo} alt="DOM" />
              </NavLink>
            </div>

            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-lime-nav hover:text-black transition duration-200"
                    activeClassName="text-white bg-green-500" // Activa una clase cuando el enlace está activo
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Menú desplegable para pantallas pequeñas, controlado por `menuOpen` */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-olive-green z-50 sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-500 hover:text-white"
                  activeClassName="text-white bg-green-500" // Activa una clase cuando el enlace está activo
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;

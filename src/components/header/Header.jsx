import { useState } from "react";
import { Navbar } from "./Navbar";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../../src/assets/img/insignia-colegio.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white  h-[120px] relative md:w-[80%] mx-auto  ">
      <div className="container mx-auto flex justify-between items-end h-full px-4">
        {/* Logo y nombre del colegio */}
        <div className="flex items-center self-center">
          <img
            src={logo}
            alt="I.E. EL PORVENIR - PATIVILCA"
            className="h-auto w-14 object-cover mr-3"
          />
          <div className="text-base md:text-xl font-title text-center">
            <p >I.E. EL PORVENIR - PATIVILCA</p>
            <p>N° 20832</p>
          </div>
        </div>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden text-2xl self-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navegación para escritorio */}
        <div className="hidden md:flex w-fit justify-end items-end">
          <Navbar isMobile={false} />
        </div>
      </div>

      {/* Navegación para móvil */}
      <div
        className={`fixed top-0 right-0 w-full bg-white shadow-md h-full transition-transform md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"} flex flex-col items-end py-4 z-20`}
      >
        <div className="w-full flex justify-end px-4 mb-4">
          <button
            className="text-2xl"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <Navbar isMobile={true} />
      </div>
    </header>
  );
};

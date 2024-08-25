import { Navbar } from "./Navbar";
import logo from '../../../src/assets/img/insignia-colegio.png';

export const Header = () => {
  return (
    <header className="bg-white shadow-md h-[100px]">
      <div className="container mx-auto flex justify-between items-end h-full">
        {/* Logo y nombre del colegio */}
        <div className="flex items-center self-center">
          <img
            src={logo}
            alt="I.E. EL PORVENIR - PATIVILCA"
            className="h-12 w-12 mr-3"
          />
          <h1 className="text-xl font-title">I.E. EL PORVENIR - PATIVILCA</h1>
        </div>

        {/* Navegación */}
        <Navbar />
      </div>
    </header>
  );
};

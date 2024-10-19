/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import './navbar.css';

const navItems = [
  { to: "/", text: "Página Inicio", bg: "bg-pastel-rose", hoverBg: "hover:bg-pastel-rose-dark", activeBg: "bg-pastel-rose-dark" },
  { to: "/grade-1", text: "1° Grado", bg: "bg-pastel-yellow", hoverBg: "hover:bg-pastel-yellow-light", activeBg: "bg-pastel-yellow-dark" },
  { to: "/grade-2", text: "2° Grado", bg: "bg-pastel-green", hoverBg: "hover:bg-pastel-green-light", activeBg: "bg-pastel-green-dark" },
  { to: "/grade-3", text: "3° Grado", bg: "bg-pastel-orange", hoverBg: "hover:bg-pastel-orange-light", activeBg: "bg-pastel-orange-dark" },
  { to: "/grade-4", text: "4° Grado", bg: "bg-pastel-purple", hoverBg: "hover:bg-pastel-purple-light", activeBg: "bg-pastel-purple-dark" },
  { to: "/grade-5", text: "5° Grado", bg: "bg-pastel-pink", hoverBg: "hover:bg-pastel-pink-light", activeBg: "bg-pastel-pink-dark" },
  { to: "/grade-6", text: "6° Grado", bg: "bg-pastel-teal", hoverBg: "hover:bg-pastel-teal-light", activeBg: "bg-pastel-teal-dark" }
];

export const Navbar = ({ isMobile = false }) => {
  return (
    <nav className={`flex ${isMobile ? 'flex-col w-full' : 'w-fit'} justify-end items-end`}>
      <ul className={`flex ${isMobile ? 'flex-col w-full' : 'flex-row'} items-end`}>
        {navItems.map(({ to, text, bg, hoverBg, activeBg }) => (
          <li key={text} className={`shadow-lg shadow-black/40 relative nav-item md:w-[60px] text-center md:min-h-[70px] md:text-normal ${isMobile ? 'w-full mb-0' : ''}`}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `
                py-4
                ${isMobile ? 'w-full text-center rounded-se-none h-fit py-6 text-xl' : 'md:text-normal'}
                ${bg} ${hoverBg} px-3 py-2 text-sm font-medium rounded-ss-xl rounded-se-xl flex justify-center items-end   
                ${isActive ? `${activeBg} nav-item-active` : ""}
                `
              }
                
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

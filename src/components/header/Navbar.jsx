// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", text: "Home", bg: "bg-pastel-rose", hoverBg: "hover:bg-pastel-rose-light", activeBg: "bg-pastel-rose-dark" },
  { to: "/initial", text: "Inicial", bg: "bg-pastel-blue", hoverBg: "hover:bg-pastel-blue-light", activeBg: "bg-pastel-blue-dark" },
  { to: "/grade-1", text: "1° Grado", bg: "bg-pastel-yellow", hoverBg: "hover:bg-pastel-yellow-light", activeBg: "bg-pastel-yellow-dark" },
  { to: "/grade-2", text: "2° Grado", bg: "bg-pastel-green", hoverBg: "hover:bg-pastel-green-light", activeBg: "bg-pastel-green-dark" },
  { to: "/grade-3", text: "3° Grado", bg: "bg-pastel-orange", hoverBg: "hover:bg-pastel-orange-light", activeBg: "bg-pastel-orange-dark" },
  { to: "/grade-4", text: "4° Grado", bg: "bg-pastel-purple", hoverBg: "hover:bg-pastel-purple-light", activeBg: "bg-pastel-purple-dark" },
  { to: "/grade-5", text: "5° Grado", bg: "bg-pastel-pink", hoverBg: "hover:bg-pastel-pink-light", activeBg: "bg-pastel-pink-dark" },
  { to: "/grade-6", text: "6° Grado", bg: "bg-pastel-teal", hoverBg: "hover:bg-pastel-teal-light", activeBg: "bg-pastel-teal-dark" }
];

export const Navbar = () => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex space-x-4">
        {navItems.map(({ to, text, bg, hoverBg, activeBg }) => (
          <li key={text}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${bg} ${hoverBg} px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive ? `${activeBg} transform scale-105` : ""
                }`
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

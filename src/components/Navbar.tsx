import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import FloatingCartButton from "./FloatingCartButton";

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Acerca de Nosotros", path: "/acerca-de-nosotros" },
  { name: "Galeria", path: "/galeria" },
  { name: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-around px-6 py-8 bg-white relative z-50">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold flex items-center space-x-1">
        <span className="text-teal-700">Rafa</span>
        <span className="text-red-600">Express</span>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center space-x-8 font-medium text-md">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-teal-700 font-semibold"
                  : "text-gray-800 hover:text-teal-700"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <div className="hidden md:block">
        
		  <FloatingCartButton />
        </div>
      </ul>

      {/* Desktop button */}

      {/* Mobile menu icon */}
      <button
        className="md:hidden text-red-600 text-xl"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-red-600 mb-6"
          >
            <X size={28} />
          </button>
        <ul className="w-full flex flex-col items-center space-y-6 text-lg font-semibold">
  {navLinks.map((link) => (
    <li key={link.name}>
      <NavLink
        to={link.path}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "text-teal-700 font-bold"
            : "text-gray-800 hover:text-teal-700"
        }
      >
        {link.name}
      </NavLink>
    </li>
  ))}

  {/* Botón de carrito con cierre de menú */}
  <div onClick={() => setIsOpen(false)}>
    <FloatingCartButton />
  </div>
</ul>

        </div>
      )}
    </nav>
  );
}

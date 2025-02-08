import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import logo from "../assets/images/logo-tranparent.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Fermer le menu lors de la navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Fermer le menu lors d'un clic en dehors
  const handleClickOutside = useCallback((event) => {
    const navElement = document.querySelector("nav");
    if (navElement && !navElement.contains(event.target)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  // Vérifie si le lien est actif
  const isActive = (path) => {
    // Vérifie si l'URL correspond à la route et/ou si l'ancre correspond au hash
    return location.pathname === path || location.hash === path;
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#4a4949f8] bg-opacity-95 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Esprit Peinture Eco"
            className="w-40 h-auto max-h-16 object-contain bg-transparent"
            loading="lazy"
          />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link
            to="/"
            className={classNames(
              "hover:text-yellow-400 transition-colors px-3 py-2",
              {
                "text-yellow-400 font-bold": isActive("/"),
              }
            )}
          >
            Accueil
          </Link>
          <Link
            to="/services"
            className={classNames(
              "hover:text-yellow-400 transition-colors px-3 py-2",
              {
                "text-yellow-400 font-bold": isActive("/services"),
              }
            )}
          >
            Services
          </Link>
          <Link
            to="/realisations"
            className={classNames(
              "hover:text-yellow-400 transition-colors px-3 py-2",
              {
                "text-yellow-400 font-bold": isActive("/realisations"),
              }
            )}
          >
            Réalisations
          </Link>

          <Link
            to="/about"
            className={classNames(
              "hover:text-yellow-400 transition-colors px-3 py-2",
              {
                "text-yellow-400 font-bold": isActive("/about"),
              }
            )}
          >
            A propos
          </Link>

          {/* Bouton Nous Contacter */}
          <Link
            to="/#contact" // Lien vers l'ancre ou la page de contact
            className="hover:text-yellow-400 transition-colors px-3 py-2 font-semibold text-white border border-yellow-400 rounded-full"
          >
            Nous Contacter
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden text-white focus:outline-none text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu mobile"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={classNames(
          "md:hidden bg-gray-800 text-white p-4 space-y-4 text-center transition-all duration-300",
          { "opacity-100 visible": menuOpen, "opacity-0 hidden": !menuOpen }
        )}
      >
        <Link
          to="/"
          className={classNames(
            "block hover:text-yellow-400 transition-colors px-3 py-2",
            {
              "text-yellow-400 font-bold": isActive("/"),
            }
          )}
          onClick={() => setMenuOpen(false)}
        >
          Accueil
        </Link>
        <Link
          to="/services"
          className={classNames(
            "block hover:text-yellow-400 transition-colors px-3 py-2",
            {
              "text-yellow-400 font-bold": isActive("/services"),
            }
          )}
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/realisations"
          className={classNames(
            "block hover:text-yellow-400 transition-colors px-3 py-2",
            {
              "text-yellow-400 font-bold": isActive("/realisations"),
            }
          )}
          onClick={() => setMenuOpen(false)}
        >
          Réalisations
        </Link>

        <Link
          to="/about"
          className={classNames(
            "block hover:text-yellow-400 transition-colors px-3 py-2",
            {
              "text-yellow-400 font-bold": isActive("/about"),
            }
          )}
          onClick={() => setMenuOpen(false)}
        >
          A propos
        </Link>

        {/* Bouton Nous Contacter Mobile */}
        <Link
          to="/#contact" // Lien vers l'ancre ou la page de contact
          className="block hover:text-yellow-400 transition-colors px-3 py-2 font-semibold text-white border border-yellow-400 rounded-full"
        >
          Nous Contacter
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

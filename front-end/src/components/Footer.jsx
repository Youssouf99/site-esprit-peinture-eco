import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo-tranparent.png";

const Footer = () => {
  const location = useLocation(); // Récupérer la localisation actuelle

  // Fonction pour vérifier si un lien est actif
  const isActive = (path) => location.pathname === path;

  return (
    <footer className="bg-[#292828f8] text-white py-6 w-full">
      <div className="container mx-auto px-4">
        {/* Section principale */}
        <div className="flex flex-wrap justify-between items-center text-center md:text-left gap-4">
          {/* Logo et nom */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Esprit Peinture Eco"
              className="w-40 h-auto max-h-16 object-contain bg-transparent"
              loading="lazy"
            />
          </Link>

          {/* Liens de navigation */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6">
            <Link
              to="/"
              className={`hover:text-yellow-400 transition-colors ${
                isActive("/") ? "text-yellow-400 font-bold" : ""
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className={`hover:text-yellow-400 transition-colors ${
                isActive("/services") ? "text-yellow-400 font-bold" : ""
              }`}
            >
              Services
            </Link>
            <Link
              to="/realisations"
              className={`hover:text-yellow-400 transition-colors ${
                isActive("/realisations") ? "text-yellow-400 font-bold" : ""
              }`}
            >
              Réalisations
            </Link>
            <Link
              to="/about"
              className={`hover:text-yellow-400 transition-colors ${
                isActive("/about") ? "text-yellow-400 font-bold" : ""
              }`}
            >
              A propos
            </Link>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Liens Légaux */}
        <div className="flex flex-wrap justify-center space-x-4 text-sm text-center">
          <Link
            to="/mentions-legales"
            className={`hover:text-yellow-400 transition-colors ${
              isActive("/mentions-legales") ? "text-yellow-400 font-bold" : ""
            }`}
          >
            Mentions légales
          </Link>
          <span>|</span>
          <Link
            to="/confidentialite"
            className={`hover:text-yellow-400 transition-colors ${
              isActive("/confidentialite") ? "text-yellow-400 font-bold" : ""
            }`}
          >
            Politique de confidentialité
          </Link>
          <span>|</span>
          <Link
            to="/cgu"
            className={`hover:text-yellow-400 transition-colors ${
              isActive("/cgu") ? "text-yellow-400 font-bold" : ""
            }`}
          >
            Conditions générales d&apos;utilisation
          </Link>
        </div>

        {/* Droits d'auteur */}
        <p className="text-center text-xs mt-4">
          © {new Date().getFullYear()} RénoArt Pro. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

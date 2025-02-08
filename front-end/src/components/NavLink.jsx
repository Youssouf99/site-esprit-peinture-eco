import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavLink = ({ to, label, onClick, isActive }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`hover:text-yellow-400 transition-colors ${
        isActive ? "text-yellow-400 font-bold" : ""
      }`}
    >
      {label}
    </Link>
  );
};

// Validation des props
NavLink.propTypes = {
  to: PropTypes.string.isRequired, // 'to' est requis et doit être une chaîne de caractères
  label: PropTypes.string.isRequired, // 'label' est requis et doit être une chaîne de caractères
  onClick: PropTypes.func, // 'onClick' est une fonction optionnelle
  isActive: PropTypes.bool, // 'isActive' est un booléen optionnel
};

// Valeurs par défaut pour les props optionnelles
NavLink.defaultProps = {
  onClick: () => {}, // Fonction vide par défaut
  isActive: false, // Par défaut, le lien n'est pas actif
};

export default NavLink;

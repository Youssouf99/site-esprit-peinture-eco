import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const CustomDialog = ({ isOpen, onClose, image = "", imagesDetailed = [] }) => {
  const [selectedImage, setSelectedImage] = useState(image); // Image actuellement affichée

  // Mise à jour de l'image principale lorsque le modal s'ouvre
  useEffect(() => {
    if (isOpen) {
      setSelectedImage(image);
    }
  }, [isOpen, image]); // Effectue la mise à jour lorsque le modal s'ouvre ou lorsque l'image change

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.7)] z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative">
        {/* Bouton de fermeture */}
        <button
          className="absolute top-2 right-2 bg-[#DAA520] hover:bg-[#B8860B] text-white rounded-full p-2 text-2xl"
          onClick={onClose}
          style={{ backgroundColor: "#DAA520" }}
        >
          ✖
        </button>

        {/* Image principale affichée */}
        <img
          src={selectedImage}
          alt="Main"
          className="w-full h-80 object-cover rounded transition-all duration-300"
        />

        {/* Galerie des images détaillées */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[image, ...imagesDetailed].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Detail ${index}`}
              className={`w-full h-24 object-cover rounded cursor-pointer transition-transform duration-200 hover:scale-105 ${
                selectedImage === img ? "ring-2 ring-orange-500" : ""
              }`}
              onClick={() => setSelectedImage(img)} // Change l'image affichée
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ Ajout des PropTypes pour éviter l'erreur ESLint
CustomDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string,
  imagesDetailed: PropTypes.arrayOf(PropTypes.string),
};

export default CustomDialog;

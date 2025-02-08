import PropTypes from "prop-types";

const RealisationCard = ({ realisation, handleOpen }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={() => handleOpen(realisation.image, realisation.imagesDetailed)}
    >
      {/* Image principale */}
      <img
        src={realisation.image}
        alt={realisation.title}
        className="w-full h-64 object-cover"
      />

      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      {/* Contenu textuel */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">{realisation.title}</h3>
        <p className="text-sm opacity-80">{realisation.author}</p>
      </div>
    </div>
  );
};

// Validation des props avec PropTypes
RealisationCard.propTypes = {
  realisation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imagesDetailed: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default RealisationCard;

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import RealisationCard from "./RealisationCard";
import CustomDialog from "./CustomDialog";

const RealisationCarousel = ({ realisations }) => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentImagesDetailed, setCurrentImagesDetailed] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [cardWidth, setCardWidth] = useState(300); // Largeur par défaut

  // Mise à jour dynamique de la largeur des cartes en fonction de l'écran
  useEffect(() => {
    const updateCardWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) setCardWidth(200); // Mobile
      else if (screenWidth < 1024) setCardWidth(250); // Tablette
      else setCardWidth(300); // Desktop
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Ouvrir le modal
  const handleOpen = (image, imagesDetailed, index) => {
    setCurrentImage(image);
    setCurrentImagesDetailed(imagesDetailed);
    setCurrentIndex(index);
    setOpen(true);
  };

  // Fermer le modal
  const handleClose = () => {
    setOpen(false);
  };

  // Faire défiler le carrousel
  const handleScroll = (direction) => {
    const newIndex =
      (currentIndex + direction + realisations.length) % realisations.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex justify-center items-center h-[50vh] w-full overflow-hidden">
      {/* Carrousel */}
      <div className="relative w-full flex justify-center items-center">
        {realisations.map((realisation, index) => {
          const diff = Math.abs(index - currentIndex);
          const isActive = diff === 0;

          // Espacement dynamique en fonction de l’écran
          const offsetX = (index - currentIndex) * (cardWidth * 1.2);

          // On utilise une échelle plus grande pour la carte active et une échelle plus petite pour les cartes éloignées
          const scale = isActive ? "1.2" : `clamp(0.7, ${1 - diff * 0.15}, 1)`;

          const cardStyle = {
            transform: `translateX(${offsetX}px) scale(${scale})`,
            transition: "transform 0.4s ease-in-out",
            filter: isActive ? "none" : "blur(2px)", // Floute les cartes non actives
            opacity: isActive ? 1 : Math.max(0.4, 1 - diff * 0.2),
            position: "absolute",
            zIndex: isActive ? 10 : 10 - diff,
            width: `${cardWidth}px`,
          };

          return (
            <div
              key={realisation.id}
              style={cardStyle}
              className="cursor-pointer"
            >
              <RealisationCard
                realisation={realisation}
                handleOpen={() =>
                  handleOpen(
                    realisation.image,
                    realisation.imagesDetailed,
                    index
                  )
                }
              />
            </div>
          );
        })}
      </div>

      {/* Flèches de navigation */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-700 p-3 rounded-full z-20"
        onClick={() => handleScroll(-1)}
      >
        ❮
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-700 p-3 rounded-full z-20"
        onClick={() => handleScroll(1)}
      >
        ❯
      </button>

      {/* Modal */}
      <CustomDialog
        isOpen={open}
        onClose={handleClose}
        image={currentImage}
        imagesDetailed={currentImagesDetailed}
      />
    </div>
  );
};

RealisationCarousel.propTypes = {
  realisations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      imagesDetailed: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default RealisationCarousel;

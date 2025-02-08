import { useState, useCallback, useMemo } from "react";
import realisationsData from "../assets/data/realisationsData";
import RealisationCard from "../components/RealisationCard";
import CustomDialog from "../components/CustomDialog";

const RealisationsPage = () => {
  const [modalState, setModalState] = useState({
    open: false,
    currentImage: "",
    currentImagesDetailed: [],
  });

  // Utilisation de useMemo pour optimiser le rendu des données statiques
  const realisations = useMemo(() => realisationsData, []);

  // Fonction pour ouvrir le modal avec les bonnes images
  const handleOpen = useCallback((image, imagesDetailed) => {
    setModalState({
      open: true,
      currentImage: image,
      currentImagesDetailed: imagesDetailed || [],
    });
  }, []);

  // Fonction pour fermer le modal
  const handleClose = useCallback(() => {
    setModalState((prevState) => ({
      ...prevState,
      open: false,
    }));
  }, []);

  return (
    <div className="bg-gray-100 text-[#2D2C2C]">
      <header className="relative bg-gradient-to-r from-[#FFB400] to-[#4a4949f8] text-white py-20 text-center  mb-16">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-5xl sm:text-6xl font-extrabold z-10 animate-fade-in">
          Nos Réalisations{" "}
        </h1>
        <p className="relative text-lg sm:text-2xl mt-4 text-gray-300 z-10 animate-fade-in-up">
          Découvrez quelques-unes de nos réalisations en matière de peinture et
          rénovation, réalisées avec passion et expertise.{" "}
        </p>
      </header>

      <div className="container mx-auto px-4 pb-10">
        {/* Grille responsive pour les réalisations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {realisations.map((realisation) => (
            <RealisationCard
              key={realisation.id}
              realisation={realisation}
              handleOpen={() =>
                handleOpen(realisation.image, realisation.imagesDetailed)
              }
            />
          ))}
        </div>

        {/* Modal pour afficher l'image principale et les images détaillées */}
        <CustomDialog
          isOpen={modalState.open}
          onClose={handleClose}
          image={modalState.currentImage}
          imagesDetailed={modalState.currentImagesDetailed}
        />
      </div>
    </div>
  );
};

export default RealisationsPage;

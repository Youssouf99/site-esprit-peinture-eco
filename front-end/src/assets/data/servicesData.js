import imageConseil from "../images/imageConseil.svg";
import imageLocationVente from "../images/imageLocationVente.svg";
import imagePeinture from "../images/imagePeinture.svg";
import imageRenovation1 from "../images/logo-renovation-1.avif";

const services = [
  {
    id: 1,
    title: "Peinture Intérieure & Extérieure",
    description:
      "Offrez à vos murs un nouveau look avec notre service de peinture intérieure et extérieure.",
    image: imagePeinture,
  },
  {
    id: 2,
    title: "Location & Vente",
    description:
      "Nous proposons la location et la vente de matériel professionnel pour vos projets de peinture et rénovation.",
    image: imageLocationVente,
  },
  {
    id: 3,
    title: "Rénovation",
    description:
      "Transformez votre espace avec nos services de rénovation professionnels.",
    image: imageRenovation1,
  },
  {
    id: 4,
    title: "Conseil en Couleur",
    description:
      "Obtenez des conseils personnalisés pour choisir les couleurs parfaites.",
    image: imageConseil,
  },
];

export default services;

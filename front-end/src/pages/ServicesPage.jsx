import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Peinture intérieure et extérieure",
    description:
      "Nous réalisons tous vos travaux de peinture avec précision et expertise, du sol au plafond. Nos peintres qualifiés garantissent un rendu impeccable, que ce soit pour une rénovation ou une nouvelle construction.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
    advantages: [
      "Peinture durable et résistante aux intempéries",
      "Large choix de couleurs et finitions",
      "Utilisation de peintures écologiques",
      "Finition professionnelle et sans traces",
    ],
  },
  {
    id: 2,
    title: "Revêtements de sols souples",
    description:
      "Pose de moquette, linoléum, vinyle et autres revêtements pour un sol élégant et résistant. Nous vous conseillons sur le choix des matériaux en fonction de vos besoins et de votre budget.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
    advantages: [
      "Confort thermique et acoustique",
      "Facilité d'entretien et durabilité",
      "Large gamme de designs et textures",
      "Pose rapide et efficace",
    ],
  },
  {
    id: 3,
    title: "Location et vente de matériel",
    description:
      "Nous proposons du matériel professionnel à la location ou à la vente pour vos projets de peinture et de rénovation. Qualité et performance garanties pour des résultats optimaux.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
    advantages: [
      "Équipements de qualité professionnelle",
      "Prix compétitifs sur la location",
      "Conseils d'utilisation et assistance",
      "Stock disponible immédiatement",
    ],
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/#contact");
  };
  return (
    <div className="bg-[#F5F5F5] text-[#2D2C2C]">
      {/* ✅ En-tête de la page */}
      <header className="relative bg-gradient-to-r from-[#FFB400] to-[#4a4949f8] text-white py-20 text-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-5xl sm:text-6xl font-extrabold z-10 animate-fade-in">
          Nos Services
        </h1>
        <p className="relative text-lg sm:text-2xl mt-4 text-gray-300 z-10 animate-fade-in-up">
          Découvrez nos prestations professionnelles en peinture et rénovation.
        </p>
      </header>

      {/* ✅ Sections des services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center gap-10 mb-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* 🖼️ Image */}
            <div className="md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>

            {/* 📄 Texte et avantages */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-[#2D2C2C] mb-4 animate-fade-in">
                {service.title}
              </h2>
              <p className="text-[#7A7979] text-lg leading-relaxed mb-4 animate-fade-in-up">
                {service.description}
              </p>

              {/* ✅ Liste des avantages */}
              <ul className="list-disc pl-5 text-gray-700 space-y-2 animate-fade-in-up">
                {service.advantages.map((advantage, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-[#FFB400] mr-2" size={18} />
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* ✅ Section d'appel à l'action */}
      <section className="bg-[#4a4949f8] text-white py-12 text-center animate-fade-in">
        <h2 className="text-4xl font-bold">Besoin d’un devis ?</h2>
        <p className="text-lg mt-4 text-gray-300">
          Contactez-nous pour discuter de votre projet et obtenir une estimation
          gratuite.
        </p>
        <button
          onClick={handleContactClick}
          style={{ backgroundColor: "#FFB400" }}
          className="mt-6 px-6 py-3 bg-[#FFB400] text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition-transform duration-300 hover:scale-105"
        >
          Nous Contacter
        </button>
      </section>
    </div>
  );
};

export default ServicesPage;

import { useEffect, useState } from "react";
import imageHero from "../assets/images/logo-banner-2.avif";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Ajoute un léger délai pour un effet fluide
  }, []);

  return (
    <header
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          // src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2070&q=80"
          src={imageHero}
          alt="Travaux de peinture professionnels"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[#7b7b7bf8] opacity-80" />
      </div>

      {/* Contenu principal */}
      <div
        className={`relative z-10 text-center text-white px-6 max-w-4xl mx-auto transition-opacity duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl sm:text-xl md:text-2xl lg:text-4xl font-extrabold mb-6">
          Transformez Votre Espace
        </h1>
        <p className="text-lg sm:text-l md:text-xl mb-8">
          Nous réalisons tous vos projets de peinture et rénovation, avec un
          savoir-faire unique et des matériaux de qualité.
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          Devis Gratuit
        </a>
      </div>
    </header>
  );
};

export default Hero;

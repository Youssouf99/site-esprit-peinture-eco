import { Building, Layers, Paintbrush, PenTool } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/#contact");
  };
  return (
    <div className="bg-[#F5F5F5] text-[#2D2C2C]">
      <header className="relative bg-gradient-to-r from-[#FFB400] to-[#4a4949f8] text-white py-20 text-center mb-16">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-5xl sm:text-6xl font-extrabold z-10 animate-fade-in">
          À propos de nous
        </h1>
        <p className="relative text-lg sm:text-2xl mt-4 text-gray-300 z-10 animate-fade-in-up">
          Découvrez qui nous sommes et pourquoi nous sommes passionnés par notre
          travail.
        </p>
      </header>

      <section className="max-w-7xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
              alt="Entreprise de peinture"
              className="w-full h-96 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-semibold mb-4">Qui Sommes-Nous ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous sommes une <strong>entreprise artisanale règlementée</strong>
              , spécialisée dans les travaux de peinture et de revêtements de
              sols. Notre mission est de transformer vos espaces avec
              professionnalisme et créativité.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Constitués en{" "}
              <strong>SAS (Société par Actions Simplifiée)</strong>, nous
              combinons flexibilité et expertise pour répondre à vos besoins en
              matière de rénovation et de décoration.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 animate-fade-in">
          Nos Activités Principales
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Carte 1 : Peinture */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <Paintbrush className="text-[#FFB400] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Peinture</h3>
            <p className="text-gray-700">
              Travaux de peinture intérieure et extérieure, préparation des
              surfaces et finitions impeccables.
            </p>
          </div>
          {/* Carte 2 : Revêtements de sols */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <Layers className="text-[#FFB400] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Revêtements de sols</h3>
            <p className="text-gray-700">
              Pose de moquette, linoléum, vinyle et autres revêtements de sols
              souples.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <PenTool className="text-[#FFB400] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location de matériel</h3>
            <p className="text-gray-700">
              Location et vente de matériel professionnel pour vos projets de
              rénovation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <Building className="text-[#FFB400] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Services connexes</h3>
            <p className="text-gray-700">
              Développement de prestations autour de la peinture et de la
              rénovation.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 animate-fade-in">
          Notre Objet Social
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in-up">
          <p className="text-gray-700 leading-relaxed mb-4">
            La Société a pour objet, tant en France qu&apos;à l&apos;étranger :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              La réalisation de tous travaux de peinture en intérieur et
              extérieur de bâtiment ainsi que la préparation des surfaces.
            </li>
            <li>La pose de revêtements de sols souples.</li>
            <li>
              La location et la vente de matériel et matériaux attachés à
              l&apos;objet social.
            </li>
            <li>
              Le développement de prestation de services autour de la peinture
              de manière générale.
            </li>
            <li>
              Toutes opérations industrielles et commerciales se rapportant à :
              <ul className="list-[circle] pl-6 mt-2 space-y-2">
                <li>
                  La création, l&apos;acquisition, la location, la prise en
                  location-gérance de tous fonds de commerce, la prise à bail,
                  l&apos;installation, l&apos;exploitation de tous
                  établissements, fonds de commerce, usines, ateliers, se
                  rapportant à l&apos;une ou l&apos;autre des activités
                  spécifiées ci-dessus.
                </li>
                <li>
                  La prise, l&apos;acquisition, l&apos;exploitation ou la
                  cession de tous procédés, brevets et droits de propriété
                  intellectuelle concernant ces activités.
                </li>
                <li>
                  Et plus généralement toutes opérations de quelque nature
                  qu&apos;elles soient, économiques, juridiques, financières,
                  civiles ou commerciales pouvant se rattacher directement ou
                  indirectement à cet objet social ou à tous objets similaires
                  connexes ou complémentaires.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="text-center bg-[#4a4949f8] text-white py-16 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-4xl font-bold mb-4">Vous avez un projet ?</h2>
        <p className="text-lg mb-6">
          Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et
          obtenir un devis personnalisé.
        </p>
        <button
          onClick={handleContactClick}
          style={{ backgroundColor: "#FFB400" }}
          className="px-8 py-3 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition-transform duration-300 hover:scale-105"
        >
          Nous Contacter
        </button>
      </section>
    </div>
  );
};

export default AboutPage;

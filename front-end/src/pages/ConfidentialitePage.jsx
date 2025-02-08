const PolitiqueConfidentialitePage = () => {
  return (
    <div className="bg-[#F5F5F5] text-[#2D2C2C]">
      {/* En-tête */}
      <header className="relative bg-[#4a4949f8] text-white py-20 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-5xl font-bold z-10">
          Politique de confidentialité
        </h1>
        <p className="relative text-lg mt-4 text-gray-300 z-10">
          Comment nous protégeons vos données personnelles.
        </p>
      </header>

      {/* Section Politique de Confidentialité */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-12">
          <p className="text-lg text-gray-700">
            Votre vie privée est importante pour nous. Cette politique explique
            comment nous collectons, utilisons et protégeons vos informations
            personnelles.
          </p>
          <h2 className="text-2xl font-semibold mt-8">
            1. Collecte des données
          </h2>
          <p className="text-lg text-gray-700">
            Nous collectons des données personnelles telles que votre nom, votre
            adresse e-mail, etc., lorsque vous vous inscrivez sur notre site ou
            interagissez avec nos services.
          </p>
          <h2 className="text-2xl font-semibold mt-8">
            2. Utilisation des données
          </h2>
          <p className="text-lg text-gray-700">
            Nous utilisons ces données pour vous fournir nos services, répondre
            à vos demandes, et améliorer notre site.
          </p>
          <h2 className="text-2xl font-semibold mt-8">
            3. Protection des données
          </h2>
          <p className="text-lg text-gray-700">
            Nous mettons en place des mesures de sécurité pour protéger vos
            informations contre tout accès non autorisé.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialitePage;

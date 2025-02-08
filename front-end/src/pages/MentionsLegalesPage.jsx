const MentionsLegalesPage = () => {
  return (
    <div className="bg-[#F5F5F5] text-[#2D2C2C]">
      {/* En-tête */}
      <header className="relative bg-[#4a4949f8] text-white py-20 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-5xl font-bold z-10">Mentions légales</h1>
        <p className="relative text-lg mt-4 text-gray-300 z-10">
          Informations légales concernant notre site.
        </p>
      </header>

      {/* Section des Mentions Légales */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#2D2C2C] mb-8">
          Informations sur l&apos;éditeur
        </h2>
        <p className="text-lg text-[#7A7979] leading-relaxed mb-4">
          La société [Nom de l&apos;entreprise], Société par Actions Simplifiée
          (SAS), au capital de [montant] EUR, immatriculée sous le numéro
          [numéro SIRET].
        </p>
        <ul className="list-none space-y-4">
          <li>
            <strong>Nom de l&apos;entreprise :</strong> [Nom de
            l&apos;entreprise]
          </li>
          <li>
            <strong>Forme juridique :</strong> Société par Actions Simplifiée
            (SAS)
          </li>
          <li>
            <strong>Adresse du siège :</strong> [Adresse complète]
          </li>
          <li>
            <strong>Numéro SIRET :</strong> [Numéro SIRET]
          </li>
          <li>
            <strong>Numéro de téléphone :</strong> [Numéro de téléphone]
          </li>
          <li>
            <strong>Email :</strong> [Email de contact]
          </li>
          <li>
            <strong>Directeur de la publication :</strong> [Nom du responsable]
          </li>
          <li>
            <strong>Hébergeur :</strong> [Nom de l&apos;hébergeur] -
            [Coordonnées de l&apos;hébergeur]
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#2D2C2C] mt-12 mb-4">
          Propriété intellectuelle
        </h3>
        <p className="text-lg text-[#7A7979] leading-relaxed">
          Tous les contenus présents sur ce site, y compris textes, images,
          logos, vidéos, et autres éléments multimédia, sont protégés par les
          droits d&apos;auteur et restent la propriété exclusive de [Nom de
          l&apos;entreprise], sauf mention contraire.
        </p>

        <h3 className="text-2xl font-semibold text-[#2D2C2C] mt-12 mb-4">
          Responsabilité
        </h3>
        <p className="text-lg text-[#7A7979] leading-relaxed">
          [Nom de l&apos;entreprise] ne saurait être tenue responsable des
          dommages directs ou indirects causés par l&apos;utilisation du site ou
          de son contenu. Le site est accessible sous réserve de disponibilité.
          En cas d&apos;indisponibilité, [Nom de l&apos;entreprise] ne pourra
          être tenue responsable.
        </p>

        <h3 className="text-2xl font-semibold text-[#2D2C2C] mt-12 mb-4">
          Droit applicable
        </h3>
        <p className="text-lg text-[#7A7979] leading-relaxed">
          Les présentes mentions légales sont soumises à la législation
          française. Tout litige sera porté devant les juridictions compétentes
          du ressort de [Ville].
        </p>
      </section>
    </div>
  );
};

export default MentionsLegalesPage;

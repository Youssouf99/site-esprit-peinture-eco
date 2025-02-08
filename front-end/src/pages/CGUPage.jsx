const CGUPage = () => {
  return (
    <div className="bg-[#F5F5F5] text-[#2D2C2C]">
      {/* En-tête */}
      <header className="relative bg-[#4a4949f8] text-white py-20 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-5xl font-bold z-10">
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="relative text-lg mt-4 text-gray-300 z-10">
          Conditions d&apos;utilisation de notre site web.
        </p>
      </header>

      {/* Section Conditions d'Utilisation */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#2D2C2C] mb-8">
          Introduction
        </h2>
        <p className="text-lg text-[#7A7979] leading-relaxed mb-4">
          Les présentes conditions générales d&apos;utilisation (CGU) régissent
          l&apos;accès et l&apos;utilisation du site [Nom du site]. En accédant
          à ce site, vous acceptez pleinement ces conditions.
        </p>

        <h3 className="text-2xl font-semibold text-[#2D2C2C] mt-12 mb-4">
          Propriété du site
        </h3>
        <p className="text-lg text-[#7A7979] leading-relaxed">
          Ce site appartient à [Nom de l&apos;entreprise]. Toute reproduction,
          distribution ou utilisation des éléments de ce site sans autorisation
          est interdite.
        </p>

        <h3 className="text-2xl font-semibold text-[#2D2C2C] mt-12 mb-4">
          Utilisation du site
        </h3>
        <p className="text-lg text-[#7A7979] leading-relaxed">
          Vous vous engagez à utiliser le site dans le respect des lois et
          règlements en vigueur. Toute utilisation illégale pourra entraîner des
          poursuites.
        </p>

        <h3 className="text-2xl font-semibold text-[#2D2C2C] mt-12 mb-4">
          Responsabilités
        </h3>
        <p className="text-lg text-[#7A7979] leading-relaxed">
          [Nom de l&apos;entreprise] ne saurait être tenue responsable des
          dommages directs ou indirects causés par l&apos;utilisation du site ou
          de son contenu.
        </p>

        <h3 className="text-2xl font-semibold text-[#2D2C2C] mt-12 mb-4">
          Modification des CGU
        </h3>
        <p className="text-lg text-[#7A7979] leading-relaxed">
          Nous nous réservons le droit de modifier les présentes conditions à
          tout moment. Les modifications seront publiées sur cette page.
        </p>
      </section>
    </div>
  );
};

export default CGUPage;

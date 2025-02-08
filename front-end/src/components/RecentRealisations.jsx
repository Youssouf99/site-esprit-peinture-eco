import RealisationCarousel from "./RealisationCarousel";

const RecentRealisations = () => {
  // Exemple de données des réalisations récentes
  const realisations = [
    {
      id: 1,
      image: "https://picsum.photos/600/300?random=1",
      title: "Rénovation Maison 1",
      author: "Auteur 1",
      imagesDetailed: [
        "https://picsum.photos/600/300?random=1",
        "https://picsum.photos/600/300?random=2",
        "https://picsum.photos/600/300?random=3",
      ],
    },
    {
      id: 2,
      image: "https://picsum.photos/600/300?random=4",
      title: "Rénovation Maison 2",
      author: "Auteur 2",
      imagesDetailed: [
        "https://picsum.photos/600/300?random=5",
        "https://picsum.photos/600/300?random=6",
        "https://picsum.photos/600/300?random=7",
      ],
    },
    {
      id: 3,
      image: "https://picsum.photos/600/300?random=8",
      title: "Rénovation Maison 3",
      author: "Auteur 3",
      imagesDetailed: [
        "https://picsum.photos/600/300?random=9",
        "https://picsum.photos/600/300?random=10",
        "https://picsum.photos/600/300?random=11",
      ],
    },
    {
      id: 4,
      image: "https://picsum.photos/600/300?random=12",
      title: "Rénovation Maison 3",
      author: "Auteur 3",
      imagesDetailed: [
        "https://picsum.photos/600/300?random=13",
        "https://picsum.photos/600/300?random=14",
        "https://picsum.photos/600/300?random=15",
      ],
    },
    {
      id: 5,
      image: "https://picsum.photos/600/300?random=16",
      title: "Rénovation Maison 3",
      author: "Auteur 3",
      imagesDetailed: [
        "https://picsum.photos/600/300?random=17",
        "https://picsum.photos/600/300?random=18",
        "https://picsum.photos/600/300?random=19",
      ],
    },
    // Ajoutez plus de réalisations ici si nécessaire
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Nos Réalisations Récentes
        </h2>

        {/* Carrousel des réalisations */}
        <RealisationCarousel realisations={realisations} />
      </div>
    </section>
  );
};

export default RecentRealisations;

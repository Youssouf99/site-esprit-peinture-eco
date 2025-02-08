const realisations = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  image: `https://picsum.photos/400/200?random=${index + 1}`,
  title: `Projet ${index + 1}`,
  author: `Entreprise ${index + 1}`,
  imagesDetailed: [
    `https://picsum.photos/400/200?random=${index + 10}`,
    `https://picsum.photos/400/200?random=${index + 20}`,
    `https://picsum.photos/400/200?random=${index + 30}`,
    `https://picsum.photos/400/200?random=${index + 40}`,
    `https://picsum.photos/400/200?random=${index + 50}`,
    `https://picsum.photos/400/200?random=${index + 60}`,
    `https://picsum.photos/400/200?random=${index + 70}`,
    `https://picsum.photos/400/200?random=${index + 80}`,
    `https://picsum.photos/400/200?random=${index + 90}`,
    `https://picsum.photos/400/200?random=${index + 100}`,
  ],
}));

export default realisations;

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-4">Page non trouvée</p>
      <Link
        to="/"
        className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;

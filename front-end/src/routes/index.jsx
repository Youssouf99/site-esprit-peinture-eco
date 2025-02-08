import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import RealisationsPage from "../pages/RealisationsPage";
import AboutPage from "../pages/AboutPage";
import MentionsLegalesPage from "../pages/MentionsLegalesPage";
import ConfidentialitePage from "../pages/ConfidentialitePage";
import CGUPage from "../pages/CGUPage";
import NotFoundPage from "../pages/NotFoundPage";

import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "realisations", element: <RealisationsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "mentions-legales", element: <MentionsLegalesPage /> },
      { path: "confidentialite", element: <ConfidentialitePage /> },
      { path: "cgu", element: <CGUPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-[60px]">
        <Outlet /> {/*  Rend les pages enfants ici */}
      </main>
      <Footer />
    </div>
  );
};

export default App;

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Accueil from "./Components/Accueil/Accueil";
import About from "./Components/About/About";
import FutursEvents from "./Components/FutursEvents/FutursEvents";
import PassedEvents from "./Components/PassedEvents/PassedEvents";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Media from "./Components/Medias/Medias";
import { useEffect, useState } from "react";
import { supabase } from "./config/supabase";

function App() {
  // console.log("supabase", supabase);
  const [evenements, setEvenements] = useState([]);

  useEffect(() => {
    const recuperationListeEvenements = async () => {
      const { data, error } = await supabase
        .from("Evenements")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        console.error("Erreur lors de la récupération des événements :", error);
      } else {
        setEvenements(data);
      }
    };
    recuperationListeEvenements();
  }, []); // Le tableau de dépendances est vide pour s'assurer que l'effet ne s'exécute qu'une seule fois

  useEffect(() => {
    const handleScroll = function () {
      const parallax = document.querySelector(".parallax");
      const scrollTop = window.pageYOffset;
      parallax.style.backgroundPositionY = scrollTop * 0.5 + "px";
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax">
      <div className="content">
        <Navbar />
        <Accueil evenements={evenements} />
        <About />
        <Media />
        <FutursEvents evenements={evenements} />
        <PassedEvents evenements={evenements} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

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
  const [visits, setVisits] = useState(null);

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

  useEffect(() => {
    const updateVisitCount = async () => {
      // Récupérer la valeur actuelle
      const { data, error } = await supabase
        .from("Visits")
        .select("count")
        .eq("id", 1)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      const newCount = data.count + 1;

      // Incrémenter dans la base
      const { error: updateError } = await supabase
        .from("Visits")
        .update({ count: newCount })
        .eq("id", 1);

      if (updateError) console.error(updateError);

      // Mettre à jour l’état local
      setVisits(newCount);
    };

    updateVisitCount();
  }, []);

  return (
    <div className="parallax">
      <div className="content">
        <Navbar evenements={evenements} />
        <Accueil evenements={evenements} />
        <About />
        <Media />
        <FutursEvents evenements={evenements} />
        <PassedEvents evenements={evenements} />
        <Contact />
        <Footer visits={visits} />
      </div>
    </div>
  );
}

export default App;

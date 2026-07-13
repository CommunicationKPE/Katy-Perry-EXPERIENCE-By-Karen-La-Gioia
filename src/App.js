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
import { supabase, emailjs } from "./config/supabase";

function App() {
  const [evenements, setEvenements] = useState([]);
  const [visits, setVisits] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const recuperationListeEvenements = async () => {
      try {
        const { data, error } = await supabase
          .from("Evenements")
          .select("*")
          .order("id", { ascending: false });

        if (error) {
          throw new Error("Erreur lors de la récupération des événements");
        } else {
          setEvenements(data);
        }
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };
    recuperationListeEvenements();
  }, []); // Le tableau de dépendances est vide car cet effet ne doit s'exécuter qu'une seule fois

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
  }, []); // Le tableau de dépendances est vide car cet effet ne doit s'exécuter qu'une seule fois

  useEffect(() => {
    const updateVisitCount = async () => {
      try {
        // Récupérer la valeur actuelle
        const { data, error } = await supabase
          .from("Visits")
          .select("count")
          .eq("id", 1)
          .single();

        if (error) {
          throw new Error("Erreur lors de la récupération du compteur de visites");
        }

        const newCount = data.count + 1;

        // Incrémenter dans la base
        const { error: updateError } = await supabase
          .from("Visits")
          .update({ count: newCount })
          .eq("id", 1);

        if (updateError) {
          throw new Error("Erreur lors de la mise à jour du compteur de visites");
        }

        // Mettre à jour l’état local
        setVisits(newCount);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };

    updateVisitCount();
  }, []); // Le tableau de dépendances est vide car cet effet ne doit s'exécuter qu'une seule fois

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="parallax">
      <div className="content">
        <Navbar evenements={evenements} />
        <Accueil evenements={evenements} />
        <About />
        <Media />
        <FutursEvents evenements={evenements} />
        <PassedEvents evenements={evenements} />
        <Contact serviceEmailJS={emailjs} />
        <Footer visits={visits} />
      </div>
    </div>
  );
}

export default App;
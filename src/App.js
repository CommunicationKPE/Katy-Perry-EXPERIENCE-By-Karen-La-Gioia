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
import { db, collection, getDocs } from "./config/firebase";

function App() {
  const [evenements, setEvenements] = useState([]);

  useEffect(() => {
    const recuperationListeEvenements = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "evenements"));
        const evenementList = querySnapshot.docs.map((doc) => doc.data());
        setEvenements(evenementList);
      } catch (error) {
        console.error("Error fetching data: ", error);
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

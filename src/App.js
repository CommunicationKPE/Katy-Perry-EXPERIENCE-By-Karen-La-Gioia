import "./App.css";

// Composants
import Navbar from "./Components/Navbar/Navbar";
import Accueil from "./Components/Accueil/Accueil";
import About from "./Components/About/About";
import FutursEvents from "./Components/FutursEvents/FutursEvents";
import PassedEvents from "./Components/PassedEvents/PassedEvents";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Media from "./Components/Medias/Medias";

// Hooks et configurations
import { useEffect, useState } from "react";
import { supabase, emailjs } from "./config/supabase";

function App() {
  const [evenements, setEvenements] = useState([]);
  const [medias, setMedias] = useState([]);
  const [visits, setVisits] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleError = (error, setError) => {
    setError(error.message);
    console.error(error);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [mediasResponse, evenementsResponse] = await Promise.all([
          supabase.from('Medias').select('*').order("id", { ascending: false }),
          supabase.from('Evenements').select('*').order("id", { ascending: false })
        ]);

        if (mediasResponse.error) {
          throw new Error("Erreur lors de la récupération des médias");
        }
        if (evenementsResponse.error) {
          throw new Error("Erreur lors de la récupération des événements");
        }

        setMedias(mediasResponse.data);
        setEvenements(evenementsResponse.data);
      } catch (error) {
        handleError(error, setError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateVisitCount = async () => {
      try {
        const { data, error } = await supabase
          .from("Visits")
          .select("count")
          .eq("id", 1)
          .single();

        if (error) {
          throw new Error("Erreur lors de la récupération du compteur de visites");
        }

        const newCount = data.count + 1;

        const { error: updateError } = await supabase
          .from("Visits")
          .update({ count: newCount })
          .eq("id", 1);

        if (updateError) {
          throw new Error("Erreur lors de la mise à jour du compteur de visites");
        }

        setVisits(newCount);
      } catch (err) {
        handleError(err, setError);
      }
    };

    updateVisitCount();
  }, []);

  if (loading) {
    return  <div className="d-flex justify-content-center text-center ">
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span> 
              </div>
            </div>
    };

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="parallax">
      <div className="content">
        <Navbar evenements={evenements} medias={medias} />
        <Accueil evenements={evenements} />
        <About />
        <Media medias={medias} />
        <FutursEvents evenements={evenements} />
        <PassedEvents evenements={evenements} />
        <Contact serviceEmailJS={emailjs} />
        <Footer visits={visits !== null ? visits : 0} />
      </div>
    </div>
  );
}

export default App;
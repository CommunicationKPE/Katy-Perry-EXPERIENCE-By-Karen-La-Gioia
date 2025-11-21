import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Accueil from "./Components/Accueil/Accueil";
import About from "./Components/About/About";
import Avenirs from "./Components/Avenirs/Avenirs";
import Anciens from "./Components/Anciens/Anciens";
import Connexion from "./Components/Connexion/Connexion";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Accueil />
      <About />
      <Avenirs />
      <Anciens />
      <Connexion />
      <Footer />
    </div>
  );
}

export default App;

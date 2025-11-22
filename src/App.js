import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Accueil from "./Components/Accueil/Accueil";
import About from "./Components/About/About";
import Avenirs from "./Components/Avenirs/Avenirs";
import Anciens from "./Components/Anciens/Anciens";
import Connexion from "./Components/Connexion/Connexion";
import Footer from "./Components/Footer/Footer";

function App() {
  document.addEventListener("scroll", function () {
    const parallax = document.querySelector(".parallax");
    const scrollTop = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollTop * 0.5 + "px";
  });
  return (
    <div className="parallax">
      <div className="content">
        <Navbar />
        <Accueil />
        <About />
        <Avenirs />
        <Anciens />
        <Connexion />
        <Footer />
      </div>
    </div>
  );
}

export default App;

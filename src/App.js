import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Accueil from "./Components/Accueil/Accueil";
import About from "./Components/About/About";
import FutursEvents from "./Components/FutursEvents/FutursEvents";
import PassedEvents from "./Components/PassedEvents/PassedEvents";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Media from "./Components/Medias/Medias";

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
        <Media />
        <FutursEvents />
        <PassedEvents />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

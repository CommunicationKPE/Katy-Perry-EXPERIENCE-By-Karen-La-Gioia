import signature from "../../Assets/signature.png";
import qrCode from "../../Assets/qr-code.svg";
import "./Navbar.css";
import { useState, useEffect, useMemo } from "react";
import React from "react";

const Navbar = ({ evenements, medias }) => {
  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const [showPassed, setShowPassed] = useState(false);
  const [showAvenir, setShowAvenir] = useState(false);
  const [showMedia, setShowMedia] = useState(false);

  const { futursServices, passedServices } = useMemo(() => {
    const futurs = evenements.filter((service) => {
      const serviceDate = new Date(service.s_date);
      return serviceDate >= today;
    });
    const passed = evenements.filter((service) => {
      const serviceDate = new Date(service.s_date);
      return serviceDate < today;
    });
    return { futursServices: futurs, passedServices: passed };
  }, [evenements, today]);

  const handleAppliShare = async () => {
    const appUrl = "https://communicationkpe.github.io/Katy-Perry-EXPERIENCE-By-Karen-La-Gioia";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Merci de partager l'application",
          url: appUrl,
        });
      } catch (error) {
        console.error("Erreur lors du partage :", error);
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(appUrl);
        alert(
          "Le lien a été copié dans le presse-papiers. Vous pouvez le coller pour le partager."
        );
      } catch (error) {
        console.error("Erreur lors de la copie du lien :", error);
      }
    } else {
      alert(
        "L'API Web Share et l'API Clipboard ne sont pas supportées par votre navigateur. Voici le lien à partager : " +
          appUrl
      );
    }
  };

  useEffect(() => {
    const hasFutureEvents = futursServices.length > 0;
    const hasPassedEvents = passedServices.length > 0;
    const hasMedia = medias.length > 0;
    setShowAvenir(hasFutureEvents);
    setShowPassed(hasPassedEvents);
    setShowMedia(hasMedia);
  }, [futursServices.length, medias.length, passedServices.length]);

  return (
    <div>
      <nav
        className="navbar bg-dark bg-body-tertiary fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#home" aria-label="Accueil">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <span className="live-text">LIVE</span> Music Show
            </h5>
          </a>
          <button
            className="navbar-toggler d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end d-md-none"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <div className="navbar-brand" aria-label="Accueil">
                <img src={signature} alt="Signature" height="45" />
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <a
                    className="nav-link"
                    href="#home"
                    aria-label="Accueil"
                    aria-current="page"
                    
                  >
                    <i className="fa-solid fa-house-chimney" aria-hidden="true"></i> Accueil
                  </a>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <a className="nav-link" href="#about" aria-label="À propos" >
                    <i className="fa-solid fa-address-card" aria-hidden="true"></i> À propos
                  </a>
                </li>
                {showMedia && (
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <a className="nav-link" href="#medias" aria-label="Médias" >
                    <i className="fa-solid fa-circle-play" aria-hidden="true"></i> {medias.length === 1 ? "Média" : "Médias"}
                  </a>
                </li>
                )}
                {showAvenir && (
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <a className="nav-link" href="#avenirs" aria-label="Prochaines dates" >
                      <i className="fa-solid fa-hourglass-end" aria-hidden="true"></i>
                      {futursServices.length === 1 ? "Prochaine date" : "Prochaines dates"}
                      <span className="badge notification ms-3">{futursServices.length}</span>
                    </a>
                  </li>
                )}
                {showPassed && (
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <a className="nav-link" href="#anciens" aria-label="Dates passées" >
                      <i className="fa-solid fa-calendar-check" aria-hidden="true"></i>
                      {passedServices.length === 1 ? "Date passée" : "Dates passées"}
                    </a>
                  </li>
                )}
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <a className="nav-link" href="#contact" aria-label="Contact" >
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i> Contact
                  </a>
                </li>
                <li className="nav-item">
                  <img src={qrCode} alt="QR Code" className="navbar-qr-code" />
                </li>
                <li className="nav-item">
                  <button className="btn-partager-app" onClick={handleAppliShare} aria-label="Partager l'application">
                    Partager
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-none d-md-flex">
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#home"
                  aria-label="Accueil"
                  aria-current="page"
                >
                  <i className="fa-solid fa-house-chimney" aria-hidden="true"></i>
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" aria-label="À propos">
                  <i className="fa-solid fa-address-card" aria-hidden="true"></i> À propos
                </a>
              </li>
              {showMedia && (
              <li className="nav-item">
                <a className="nav-link" href="#medias" aria-label="Médias">
                  <i className="fa-solid fa-circle-play" aria-hidden="true"></i> {medias.length === 1 ? "Média" : "Médias"}
                </a>
              </li>
              )}
              {showAvenir && (
                <li className="nav-item">
                  <a className="nav-link" href="#avenirs" aria-label="Prochaines dates">
                    <i className="fa-solid fa-hourglass-end" aria-hidden="true"></i>
                    {futursServices.length === 1 ? "Prochaine date" : "Prochaines dates"}
                    <span className="badge notification ms-2">{futursServices.length}</span>
                  </a>
                </li>
              )}
              {showPassed && (
                <li className="nav-item">
                  <a className="nav-link position-relative" href="#anciens" aria-label="Dates passées" >
                    <i className="fa-solid fa-calendar-check " aria-hidden="true" ></i>
                    {passedServices.length === 1 ? "Date passée" : "Dates passées"}

                  </a>
                </li>
              )}
              <li className="nav-item">
                <a className="nav-link" href="#contact" aria-label="Contact">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Navbar);
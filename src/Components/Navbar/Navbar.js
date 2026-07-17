import React, { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from 'prop-types';
import signature from "../../Assets/signature.png";
import qrCode from "../../Assets/qr-code.svg";
import "./Navbar.css";

const APP_URL = "https://communicationkpe.github.io/Katy-Perry-EXPERIENCE-By-Karen-La-Gioia";
const APP_TITLE = "Merci de partager l'application";

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

  const handleAppliShare = useCallback(async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: APP_TITLE,
          url: APP_URL,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(APP_URL);
        alert("Le lien a été copié dans le presse-papiers. Vous pouvez le coller pour le partager.");
      } else {
        alert(`L'API Web Share et l'API Clipboard ne sont pas supportées par votre navigateur. Voici le lien à partager : ${APP_URL}`);
      }
    } catch (error) {
      console.error("Erreur lors du partage :", error);
      alert("Une erreur est survenue lors du partage. Veuillez réessayer.");
    }
  }, []);

  useEffect(() => {
    const hasFutureEvents = futursServices.length > 0;
    const hasPassedEvents = passedServices.length > 0;
    const hasMedia = medias.length > 0;
    setShowAvenir(hasFutureEvents);
    setShowPassed(hasPassedEvents);
    setShowMedia(hasMedia);
  }, [futursServices.length, medias.length, passedServices.length]);

  const renderNavItem = (condition, href, label, icon, text, badgeCount = null, isMobile = false) => {
    if (!condition) return null;

    const dismissAttr = isMobile ? { "data-bs-dismiss": "offcanvas" } : {};

    return (
      <li className="nav-item" {...dismissAttr}>
        <a className="nav-link" href={href} aria-label={label}>
          <i className={icon} aria-hidden="true"></i> {text}
          {badgeCount !== null && (
            <span className="badge notification ms-2">{badgeCount}</span>
          )}
        </a>
      </li>
    );
  };

  const renderNavItems = (isMobile = false) => {
    return (
      <>
        {renderNavItem(true, "#home", "Accueil", "fa-solid fa-house-chimney", "Accueil", null, isMobile)}
        {renderNavItem(true, "#about", "À propos", "fa-solid fa-address-card", "À propos", null, isMobile)}
        {renderNavItem(showMedia, "#medias", "Médias", "fa-solid fa-circle-play", medias.length === 1 ? "Média" : "Médias", null, isMobile)}
        {renderNavItem(showAvenir, "#avenirs", "Prochaines dates", "fa-solid fa-hourglass-end", futursServices.length === 1 ? "Prochaine date" : "Prochaines dates", futursServices.length, isMobile)}
        {renderNavItem(showPassed, "#anciens", "Dates passées", "fa-solid fa-calendar-check", passedServices.length === 1 ? "Date passée" : "Dates passées", null, isMobile)}
        {renderNavItem(true, "#contact", "Contact", "fa-solid fa-envelope", "Contact", null, isMobile)}
      </>
    );
  };

  const renderMobileSpecificItems = () => {
    return (
      <>
        <li className="nav-item">
          <img src={qrCode} alt="QR Code" className="navbar-qr-code" />
        </li>
        <li className="nav-item">
          <button
            className="btn-partager-app"
            onClick={handleAppliShare}
            aria-label="Partager l'application"
            aria-expanded="false"
            aria-controls="share-menu"
          >
            Partager
          </button>
        </li>
      </>
    );
  };

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
                {renderNavItems(true)}
                {renderMobileSpecificItems()}
              </ul>
            </div>
          </div>
          <div className="d-none d-md-flex">
            <ul className="navbar-nav flex-row">
              {renderNavItems(false)}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  evenements: PropTypes.arrayOf(
    PropTypes.shape({
      s_date: PropTypes.string.isRequired,
    })
  ).isRequired,
  medias: PropTypes.array.isRequired,
};

export default React.memo(Navbar);
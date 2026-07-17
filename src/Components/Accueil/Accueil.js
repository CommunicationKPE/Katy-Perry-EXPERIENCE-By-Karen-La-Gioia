import React, { useMemo } from "react";
import PropTypes from 'prop-types';
import "./Accueil.css";
import logo from "../../Assets/Logo.png";
import CountUp from "react-countup";

const ANIMATION_DURATIONS = {
  UPCOMING_EVENTS: 2,
  PAST_SPECTATORS: 4,
  PAST_EVENTS: 3,
};

const LABELS = {
  SPECTACLE: "SPECTACLE",
  SPECTACLES: "SPECTACLES",
  SPECTATEUR: "SPECTATEUR",
  SPECTATEURS: "SPECTATEURS",
  EVENT_REALISE: "ÉVÉNEMENT RÉALISÉ",
  EVENTS_REALISES: "ÉVÉNEMENTS RÉALISÉS",
};

const Achievement = ({ count, duration, labelSingular, labelPlural }) => {
  return (
    <div className="about-achievement">
      <h2>
        <CountUp end={count} duration={duration} separator="" />
      </h2>
      <h5>
        {count === 1 ? labelSingular : labelPlural}
      </h5>
    </div>
  );
};

const Accueil = ({ evenements }) => {
  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const pastServices = useMemo(() => {
    return evenements.filter((service) => {
      const serviceDate = new Date(service.s_date);
      return serviceDate < today;
    });
  }, [evenements, today]);

  const upcomingEventsCount = useMemo(() => {
    return evenements.filter((service) => {
      const serviceDate = new Date(service.s_date);
      return serviceDate >= today;
    }).length;
  }, [evenements, today]);

  const totalPastSpectators = useMemo(() => {
    return pastServices.reduce((sum, service) => sum + (service.s_nbspectateurs || 0), 0);
  }, [pastServices]);

  return (
    <div id="home" className="accueil" role="region" aria-label="Section d'accueil">
      <div className="accueil-cadre d-flex" role="main">
        <div className="bas-gauche" role="complementary">
          <h1 aria-label="Live Music Show">
            <span>LIVE</span> Music Show
          </h1>
          <div className="about-achievements" aria-label="Nos réalisations">
            {upcomingEventsCount > 0 && (
              <Achievement
                count={upcomingEventsCount}
                duration={ANIMATION_DURATIONS.UPCOMING_EVENTS}
                labelSingular={`${LABELS.SPECTACLE} À VENIR`}
                labelPlural={`${LABELS.SPECTACLES} À VENIR`}
              />
            )}
            {upcomingEventsCount > 0 && totalPastSpectators > 0 && (
              <hr className="border border-light border-1 opacity-100" />
            )}
            {totalPastSpectators > 0 && (
              <Achievement
                count={totalPastSpectators}
                duration={ANIMATION_DURATIONS.PAST_SPECTATORS}
                labelSingular={`${LABELS.SPECTATEUR}`}
                labelPlural={`${LABELS.SPECTATEURS}`}
              />
            )}
            {totalPastSpectators > 0 && pastServices.length > 0 && (
              <hr className="border border-light border-1 opacity-100" />
            )}
            {pastServices.length > 0 && (
              <Achievement
                count={pastServices.length}
                duration={ANIMATION_DURATIONS.PAST_EVENTS}
                labelSingular={`${LABELS.EVENT_REALISE}`}
                labelPlural={`${LABELS.EVENTS_REALISES}`}
              />
            )}
          </div>
          <a
            type="button"
            className="btn-contactez-nous"
            href="#contact"
            aria-label="Contactez-nous"
            rel="noopener noreferrer"
          >
            Contactez-nous
          </a>
          <div className="social-icons d-flex justify-content-evenly align-items-center">
            <a href="https://youtube.com" aria-label="YouTube" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube youtube-icon"></i>
            </a>
            <a href="https://facebook.com" aria-label="Facebook" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f facebook-icon"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram instagram-icon"></i>
            </a>
          </div>
        </div>
        <div className="haut-droite" role="img" aria-label="Logo Katy Perry Experience">
          <img
            src={logo}
            alt="Logo Katy Perry Experience"
            className="logo-img"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

Accueil.propTypes = {
  evenements: PropTypes.arrayOf(
    PropTypes.shape({
      s_date: PropTypes.string.isRequired,
      s_nbspectateurs: PropTypes.number,
    })
  ).isRequired,
};

export default React.memo(Accueil);
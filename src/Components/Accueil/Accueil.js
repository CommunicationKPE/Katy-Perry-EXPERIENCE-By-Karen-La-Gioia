import React, { useMemo } from "react";
import "./Accueil.css";
import logo from "../../Assets/Logo.png";
import CountUp from "react-countup";

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
    <div id="home" className="accueil">
      <div className="accueil-cadre d-flex">
        <div className="bas-gauche">
          <h1>
            <span>LIVE</span> Music Show
          </h1>
          <div className="about-achievements">
            {upcomingEventsCount > 0 && (
              <div className="about-achievement">
                <h2>
                  <CountUp end={upcomingEventsCount} duration={2} separator="" />
                </h2>
                <h5>
                  {upcomingEventsCount === 1
                    ? "SPECTACLE À VENIR"
                    : "SPECTACLES À VENIR"}
                </h5>
              </div>
            )}
            {upcomingEventsCount > 0 && totalPastSpectators > 0 && (
              <hr className="border border-light border-1 opacity-100" />
            )}
            {totalPastSpectators > 0 && (
              <div className="about-achievement">
                <h2>
                  <CountUp end={totalPastSpectators} duration={5} separator="" />
                </h2>
                <h5>
                  {totalPastSpectators === 1 ? "SPECTATEUR" : "SPECTATEURS"}
                </h5>
              </div>
            )}
            {totalPastSpectators > 0 && pastServices.length > 0 && (
              <hr className="border border-light border-1 opacity-100" />
            )}
            {pastServices.length > 0 && (
              <div className="about-achievement">
                <h2>
                  <CountUp end={pastServices.length} duration={3} separator="" />
                </h2>
                <h5>
                  {pastServices.length === 1
                    ? "ÉVÉNEMENT RÉALISÉ"
                    : "ÉVÉNEMENTS RÉALISÉS"}
                </h5>
              </div>
            )}
          </div>
          <a
            type="button"
            className="btn-contactez-nous"
            href="#contact"
            aria-label="Contactez-nous"
          >
            Contactez-nous
          </a>
          <div className="social-icons d-flex justify-content-evenly align-items-center">
            <a href="https://youtube.com" aria-label="YouTube">
              <i className="fa-brands fa-youtube youtube-icon"></i>
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f facebook-icon"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <i className="fa-brands fa-instagram instagram-icon"></i>
            </a>
          </div>
        </div>
        <div className="haut-droite">
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

export default React.memo(Accueil);
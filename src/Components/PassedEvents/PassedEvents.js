import "./PassedEvents.css";
import { useState, useEffect, useMemo, useRef } from "react";
import * as bootstrap from 'bootstrap';

const PassedEvents = ({ evenements }) => {
  // Obtenir la date d'aujourd'hui
  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  // Utiliser une variable d'état pour déterminer si l'élément doit être affiché
  const [showPassed, setShowPassed] = useState(false);

  // Filtrer les services dont la date est antérieure ou égale à aujourd'hui
  const filteredServices = useMemo(() => {
    return evenements.filter((service) => {
      const serviceDate = new Date(service.s_date);
      return serviceDate < today;
    });
  }, [evenements, today]);

  // Trier les services par date en ordre décroissant (du plus récent au plus ancien)
  const sortedServices = useMemo(() => {
    return [...filteredServices].sort((a, b) => {
      const dateA = new Date(a.s_date);
      const dateB = new Date(b.s_date);
      return dateB - dateA;
    });
  }, [filteredServices]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Les mois sont indexés à partir de 0
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Référence pour le carousel
  const carouselRef = useRef(null);

  useEffect(() => {
    // Vérifier si au moins un service est passé
    const haspassedEvents = filteredServices.length > 0;
    setShowPassed(haspassedEvents);

    // Initialiser le carousel
    if (carouselRef.current) {
      const carousel = new bootstrap.Carousel(carouselRef.current, {
        interval: 5000, // Intervalle de défilement automatique (5 secondes)
      });

      // Écouter les événements d'ouverture et de fermeture des modales
      const modals = document.querySelectorAll('.modal');
      modals.forEach((modal) => {
        modal.addEventListener('show.bs.modal', () => {
          carousel.pause(); // Arrêter le carousel lorsque la modale est ouverte
        });

        modal.addEventListener('hidden.bs.modal', () => {
          carousel.cycle(); // Relancer le carousel lorsque la modale est fermée
        });
      });
    }
  }, [filteredServices]);

  return (
    <div id="anciens" className="anciens">
      {showPassed && (
        <div className="anciens-cadre">
          <div className="anciens-title">
            <h1>Précédement</h1>
          </div>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            ref={carouselRef}
          >
            <div className="carousel-indicators">
              {sortedServices.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${service.id + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {sortedServices.map((service, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="carte-Event-passed align-items-center" id="liveToastBtn">
                    <div className="card-affiche-passed-event">
                      <img src={service.s_image} className="card-old-img-top" alt="..." />
                    </div>
                    <br></br>
                    <h3>
                      <i className="fa-solid fa-location-dot"></i>
                      {service.s_lieu}
                    </h3>
                    <h2>{formatDate(service.s_date)}</h2>
                    <p>{service.s_description}</p>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target={`#modalCartePassedEvent${index}`}
                      className="btn-revivre-l-evenement"
                    >
                      Revivez l'événement
                    </button>
                  </div>
                  <div
                    className="modal fade"
                    id={`modalCartePassedEvent${index}`}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby={`modalCartePassedEventLabel${index}`}
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id={`modalCartePassedEventLabel${index}`}
                          >
                            {`${service.s_lieu} - ${formatDate(service.s_date)}`}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div
                          className="modal-body d-flex flex-column"
                        >
                          <img
                            src={service.photo1}
                            alt="Affiche de l'événement"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                              marginBottom: "20px",
                            }}
                          />
                          <img
                            src={service.photo2}
                            alt="Affiche de l'événement"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                              marginBottom: "20px",
                            }}
                          />
                          <img
                            src={service.photo3}
                            alt="Affiche de l'événement"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                              marginBottom: "20px",
                            }}
                          />
                          <img
                            src={service.photo4}
                            alt="Affiche de l'événement"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                              marginBottom: "20px",
                            }}
                          />
                          <img
                            src={service.photo5}
                            alt="Affiche de l'événement"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <div className="modal-footer justify-content-between">
                          <h6>{service.s_description}</h6>
                          <h6>{service.s_nbspectateurs} spectateurs</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassedEvents;
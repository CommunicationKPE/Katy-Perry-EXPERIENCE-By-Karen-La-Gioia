import "./PassedEvents.css";
// import donnees_Services from "../../Assets/services_data";
import CartePassedEvent from "../CartePassedEvent/CartePassedEvent";
import { useState, useEffect } from "react";

const PassedEvents = ({ evenements }) => {
  // console.log("evenements", evenements);
  // Obtenir la date d'aujourd'hui
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Utiliser une variable d'état pour déterminer si l'élément doit être affiché
  const [showPassed, setShowPassed] = useState(false);

  // Filtrer les services dont la date est antérieure ou égale à aujourd'hui

  const filteredServices = evenements.filter((service) => {
    const serviceDate = new Date(service.s_date);
    // console.log("serviceDate", serviceDate < today);
    return serviceDate < today;
  });

  // Trier les services par date en ordre décroissant (du plus récent au plus ancien)

  const sortedServices = filteredServices.sort((a, b) => {
    const dateA = new Date(a.s_date);
    const dateB = new Date(b.s_date);
    return dateB - dateA;
  });
  // console.log("sortedServices", sortedServices);

  useEffect(() => {
    // Vérifier si au moins un service est passé
    const haspassedEvents = filteredServices.length > 0;
    setShowPassed(haspassedEvents);
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
                  <CartePassedEvent
                    icone={service.s_no}
                    ou={service.s_lieu}
                    description={service.s_description}
                    quand={service.s_date}
                    premiereimage={service.s_image}
                    spectateurs={service.s_nbspectateurs}
                    id={index} // Utilisez l'index comme identifiant unique
                    photo1={service.photo1}
                    photo2={service.photo2}
                    photo3={service.photo3}
                    photo4={service.photo4}
                    photo5={service.photo5}
                    style={{ width: "100%" }}
                  />
                  {/* <div className="carousel-caption d-none d-md-block">
                  <h5>{service.s_lieu}</h5>
                  <p>{service.s_description}</p>
                </div> */}
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

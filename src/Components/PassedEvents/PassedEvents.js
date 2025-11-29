import "./PassedEvents.css";
import donnees_Services from "../../Assets/services_data";
import CartePassedEvent from "../CartePassedEvent/CartePassedEvent";

const PassedEvents = () => {
  // Obtenir la date d'aujourd'hui
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Filtrer les services dont la date est antérieure ou égale à aujourd'hui

  const filteredServices = donnees_Services.filter((service) => {
    const serviceDate = new Date(service.s_date);
    return serviceDate < today;
  });

  // Trier les services par date en ordre décroissant (du plus récent au plus ancien)

  const sortedServices = filteredServices.sort((a, b) => {
    const dateA = new Date(a.s_date);
    const dateB = new Date(b.s_date);
    return dateB - dateA;
  });

  return (
    // <div id="anciens" className="anciens">
    //   <div className="anciens-cadre">
    //     <div className="anciens-title">
    //       <h1>Précédement</h1>
    //     </div>
    //     <div className="anciens-container">
    //       {sortedServices.map((service, index) => (
    //         <CartePassedEvent
    //           key={index}
    //           icone={service.s_no}
    //           ou={service.s_lieu}
    //           description={service.s_description}
    //           quand={service.s_date}
    //           premiereimage={service.s_image}
    //           spectateurs={service.s_nbspectateurs}
    //           style={{ width: "18rem" }}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div id="anciens" className="anciens">
      <div className="anciens-cadre">
        <div className="anciens-title">
          <h1>Précédement</h1>
        </div>
        <div className="anciens-container">
          {sortedServices.map((service, index) => (
            <CartePassedEvent
              key={index}
              icone={service.s_no}
              ou={service.s_lieu}
              description={service.s_description}
              quand={service.s_date}
              premiereimage={service.s_image}
              spectateurs={service.s_nbspectateurs}
              style={{ width: "18rem" }}
            />
          ))}
        </div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {sortedServices.map((service, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
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
                  style={{ width: "100%" }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{service.s_lieu}</h5>
                  <p>{service.s_description}</p>
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
    </div>
  );
};
export default PassedEvents;

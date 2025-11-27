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
      </div>
    </div>
  );
};
export default PassedEvents;

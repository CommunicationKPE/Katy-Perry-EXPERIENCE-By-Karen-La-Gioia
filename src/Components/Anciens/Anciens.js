import "./Anciens.css";
import donnees_Services from "../../Assets/services_data";
import CarteAvant from "../CarteAvant/CarteAvant";

const Anciens = () => {
  // Obtenir la date d'aujourd'hui
  const today = new Date();
  // Filtrer les services dont la date est antérieure ou égale à aujourd'hui
  const filteredServices = donnees_Services.filter((service) => {
    const serviceDate = new Date(service.s_date);
    return serviceDate <= today;
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
        <div className="mywork-title">
          <h1>Evenements précédents</h1>
        </div>
        <div className="mywork-container col">
          {sortedServices.map((service, index) => (
            <CarteAvant
              key={index}
              icone={service.s_no}
              ou={service.s_lieu}
              description={service.s_description}
              quand={service.s_date}
              style={{ width: "18rem" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Anciens;

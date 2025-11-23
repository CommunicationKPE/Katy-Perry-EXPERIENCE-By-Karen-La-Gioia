import "./Avenirs.css";
import donnees_Services from "../../Assets/services_data";
import CarteAvant from "../CarteAvant/CarteAvant";

const Avenirs = () => {
  // Obtenir la date d'aujourd'hui
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Filtrer les services pour obtenir uniquement les événements à venir + celle d'aujourd'hui
  const filteredServices = donnees_Services.filter((service) => {
    const serviceDate = new Date(service.s_date);
    return serviceDate >= today;
  });

  return (
    <div id="avenirs" className="a-venirs">
      <div className="a-venirs-cadre">
        <div className="a-venirs-title">
          <h1>Spectacles à venir</h1>
        </div>
        <div className="a-venirs-container">
          {filteredServices.map((service, index) => (
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
export default Avenirs;

import "./FutursEvents.css";
import React, { useState, useEffect } from "react";
// import donnees_Services from "../../Assets/services_data";
import CarteFuturEvent from "../CarteFuturEvent/CarteFuturEvent";

const FutursEvents = ({ evenements }) => {
  // Obtenir la date d'aujourd'hui
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Utiliser une variable d'état pour déterminer si l'élément doit être affiché
  const [showAvenir, setShowAvenir] = useState(false);

  // Filtrer les services pour obtenir uniquement les événements à venir + celle d'aujourd'hui
  const filteredServices = evenements.filter((service) => {
    const serviceDate = new Date(service.s_date);
    return serviceDate >= today;
  });
  useEffect(() => {
    // Vérifier si au moins un service est à venir ou aujourd'hui
    const hasFutureEvents = filteredServices.length > 0;
    setShowAvenir(hasFutureEvents);
  }, [filteredServices]);

  return (
    <div id="avenirs" className="a-venirs">
      {showAvenir && (
        <div className="a-venirs-cadre">
          <div className="a-venirs-title">
            <h1>Prochainement</h1>
          </div>
          <div className="a-venirs-container">
            {filteredServices.map((service, index) => {
              return (
                <CarteFuturEvent
                  key={index}
                  id={index} // Utilisez l'index comme identifiant unique
                  icone={service.s_no}
                  ou={service.s_lieu}
                  description={service.s_description}
                  quand={service.s_date}
                  afficheUrl={service.s_image}
                  style={{ width: "18rem" }}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default FutursEvents;

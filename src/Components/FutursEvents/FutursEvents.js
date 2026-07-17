import React, { useMemo } from "react";
import "./FutursEvents.css";
import CarteFuturEvent from "../CarteFuturEvent/CarteFuturEvent";

const FutursEvents = ({ evenements }) => {
  // Obtenir la date d'aujourd'hui
  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  // Filtrer et trier les événements
  const sortedEvents = useMemo(() => {
    return evenements
      .filter((service) => new Date(service.s_date) >= today)
      .sort((a, b) => {
        const dateA = new Date(a.s_date).getTime();
        const dateB = new Date(b.s_date).getTime();
        return dateA - dateB; // Tri par ordre chronologique (plus proche d'abord)
      });
  }, [evenements, today]);

  if (sortedEvents.length === 0) {
    return (
      <div id="avenirs" className="a-venirs">
        <div className="no-events">
        </div>
      </div>
    );
  }

  return (
    <div id="avenirs" className="a-venirs">
      <div className="a-venirs-cadre">
        <div className="a-venirs-title">
          <h1>Prochainement</h1>
        </div>
        <div className="a-venirs-container">
          {sortedEvents.map((service) => (
            <CarteFuturEvent
              key={service.id || `${service.s_date}-${service.s_no}`}
              id={service.id}
              icone={service.s_no}
              ou={service.s_lieu}
              description={service.s_description}
              quand={service.s_date}
              afficheUrl={service.s_image}
              style={{ width: "100%" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(FutursEvents);
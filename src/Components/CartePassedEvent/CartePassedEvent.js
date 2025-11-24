import "./CarteFuturEvent.css";

const CartePassedEvent = ({ ou, description, quand }) => {
  return (
    <div className="carte-avant">
      <h3>
        <i class="fa-solid fa-location-dot"></i>
        {ou}
      </h3>
      <h2>{quand}</h2>
      <p>{description}</p>
      <div className="card-readmore">
        <p>En savoir plus</p>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default CartePassedEvent;

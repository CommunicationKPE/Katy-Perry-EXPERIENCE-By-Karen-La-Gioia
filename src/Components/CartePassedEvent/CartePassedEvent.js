import "./CartePassedEvent.css";

const CartePassedEvent = ({ premiereimage, ou, description, quand }) => {
  return (
    <div className="carte-Event-passed">
      <div class="card">
        <img src={premiereimage} className="card-img-top" alt="..." />
      </div>
      <h3>
        <i class="fa-solid fa-location-dot"></i>
        {ou}
      </h3>
      <h2>{quand}</h2>
      <p>{description}</p>
      <div className="card-readmore">
        <p>Revivez l'événement</p>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default CartePassedEvent;

import "./CartePassedEvent.css";

const CartePassedEvent = ({
  premiereimage,
  ou,
  description,
  quand,
  spectateurs,
}) => {
  const handleCardClick = () => {
    console.log("Carte ancien event cliquée !", {
      premiereimage,
      ou,
      description,
      quand,
      spectateurs,
    });
  };

  return (
    <div>
      <div
        className="carte-Event-passed"
        onClick={handleCardClick}
        id="liveToastBtn"
      >
        <div className="card">
          <img src={premiereimage} className="card-img-top" alt="..." />
        </div>
        {/* <h3>
          <i className="fa-solid fa-location-dot"></i>
          {ou}
        </h3>
        <h2>{quand}</h2>
        <p>{description}</p> */}
        {/* <div className="card-readmore">
          <p>Revivez l'événement</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div> */}
      </div>
    </div>
  );
};

export default CartePassedEvent;

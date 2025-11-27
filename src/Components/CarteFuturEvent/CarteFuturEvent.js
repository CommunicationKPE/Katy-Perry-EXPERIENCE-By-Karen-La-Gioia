import "./CarteFuturEvent.css";

const CarteFuturEvent = ({ ou, description, quand }) => {
  const handleCardClick = () => {
    console.log("Carte event futur cliquée !", { ou, description, quand });
  };
  return (
    <div className="carte-avant" onClick={handleCardClick}>
      <h3>
        <i className="fa-solid fa-location-dot"></i>
        {ou}
      </h3>
      <h2>{quand}</h2>
      <p>{description}</p>
      <div className="card-readmore">
        <p>Consulter l'affiche</p>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default CarteFuturEvent;

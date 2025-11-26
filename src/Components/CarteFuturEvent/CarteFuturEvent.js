import "./CarteFuturEvent.css";

const CarteFuturEvent = ({ ou, description, quand }) => {
  return (
    <div className="carte-avant">
      <h3>
        <i class="fa-solid fa-location-dot"></i>
        {ou}
      </h3>
      <h2>{quand}</h2>
      <p>{description}</p>
      <div className="card-readmore">
        <p>Consulter l'affiche</p>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default CarteFuturEvent;

import "./CarteAvant.css";

const CarteAvant = ({ icone, ou, description, quand, style }) => {
  return (
    <div className="carte-avant">
      <div className="card w-100 text-bg-dark" style={{ style }}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 ">{ou}</h6>
          <h6 className="card-subtitle mb-2 ">le {quand}</h6>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarteAvant;

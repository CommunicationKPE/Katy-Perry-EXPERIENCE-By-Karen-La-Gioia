import "./CartePassedEvent.css";

const CartePassedEvent = ({
  premiereimage,
  ou,
  description,
  quand,
  spectateurs,
  id,
}) => {
  return (
    <div>
      <div
        className="carte-Event-passed"
        id="liveToastBtn"
        data-bs-toggle="modal"
        data-bs-target={`#modalCartePassedEvent${id}`}
      >
        <div className="card">
          <img src={premiereimage} className="card-img-top" alt="..." />
        </div>
        <br></br>
        <h3>
          <i className="fa-solid fa-location-dot"></i>
          {ou}
        </h3>
        <h2>{quand}</h2>
        <p>{description}</p>
        <div className="card-readmore">
          <p>Revivez l'événement</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div
        className="modal fade"
        id={`modalCartePassedEvent${id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby={`modalCartePassedEventLabel${id}`}
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id={`modalCartePassedEventLabel${id}`}
              >
                {description}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={premiereimage}
                alt="Affiche de l'événement"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
              <p>{description}</p>
              <p>Lieu: {ou}</p>
              <p>Date: {quand}</p>
              <p>Spectateurs: {spectateurs}</p>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartePassedEvent;

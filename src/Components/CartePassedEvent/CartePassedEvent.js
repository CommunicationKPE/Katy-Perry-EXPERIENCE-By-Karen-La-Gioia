import "./CartePassedEvent.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Les mois sont indexés à partir de 0
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const CartePassedEvent = ({
  premiereimage,
  ou,
  description,
  quand,
  spectateurs,
  id,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
}) => {
  const formattedDate = formatDate(quand);

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
        <h2>{formattedDate}</h2>
        <p>{description}</p>
        <hr className="border border-light border-1 opacity-100"></hr>
        <p>Revivez l'événement</p>
      </div>
      <div
        className="modal fade"
        id={`modalCartePassedEvent${id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby={`modalCartePassedEventLabel${id}`}
      >
        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id={`modalCartePassedEventLabel${id}`}
              >
                {`${ou} - ${formattedDate}`}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body d-flex flex-column"
              style={{
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <img
                src={photo1}
                alt="Affiche de l'événement"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  marginBottom: "20px",
                }}
              />
              <img
                src={photo2}
                alt="Affiche de l'événement"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  marginBottom: "20px",
                }}
              />
              <img
                src={photo3}
                alt="Affiche de l'événement"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  marginBottom: "20px",
                }}
              />
              <img
                src={photo4}
                alt="Affiche de l'événement"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  marginBottom: "20px",
                }}
              />
              <img
                src={photo5}
                alt="Affiche de l'événement"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="modal-footer justify-content-between">
              <h6>{description}</h6>
              <h6>{spectateurs} spectateurs</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartePassedEvent;

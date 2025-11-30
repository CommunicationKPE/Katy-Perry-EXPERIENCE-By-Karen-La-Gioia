import "./CarteFuturEvent.css";
import { useEffect } from "react";

const CarteFuturEvent = ({ ou, description, quand, pdfUrl }) => {
  useEffect(() => {
    // Assurez-vous que Bootstrap est correctement initialisé
    import("bootstrap");
  }, []);

  return (
    <div>
      <a
        href={pdfUrl}
        download
        className="carte-avant"
        // data-bs-toggle="modal"
        // data-bs-target="#staticBackdrop"
      >
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
      </a>

      {/* <!-- Modal --> */}
      {/* <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Affiche de l'événement
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
              {pdfUrl ? (
                <iframe
                  src={pdfUrl}
                  title="Affiche de l'événement"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "hidden",
                  }}
                ></iframe>
              ) : (
                <p>Aucune affiche disponible pour cet événement.</p>
              )}
            </div>
            <div className="modal-footer">
              {pdfUrl ? (
                <a href={pdfUrl} download className="btn btn-primary">
                  Télécharger
                </a>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CarteFuturEvent;

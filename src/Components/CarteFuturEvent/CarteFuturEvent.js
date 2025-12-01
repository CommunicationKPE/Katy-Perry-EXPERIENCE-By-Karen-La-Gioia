import "./CarteFuturEvent.css";
import { useEffect } from "react";

const CarteFuturEvent = ({ ou, description, quand, pdfUrl }) => {
  useEffect(() => {
    // Assurez-vous que Bootstrap est correctement initialisé
    import("bootstrap");
  }, []);
  const handleShare = () => {
    if (navigator.share) {
      console.log("navigator.share OK");
      navigator
        .share({
          title: "Partager l'affiche",
          text: "Voici l'affiche de l'événement",
          url: pdfUrl,
        })
        .then(() => console.log("Partage réussi"))
        .catch((error) => console.log("Erreur de partage", error));
    } else {
      alert("L'API Web Share n'est pas supportée par votre navigateur.");
    }
  };

  return (
    <div>
      <div
        download
        className="carte-avant"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
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
      </div>

      {/* <!-- Modal --> */}
      <div
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
                <img
                  src={pdfUrl}
                  alt="Affiche de l'événement"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <p>Aucune affiche disponible pour cet événement.</p>
              )}
            </div>
            <div className="modal-footer">
              {pdfUrl ? (
                // <a href={pdfUrl} download className="btn btn-primary">
                //   Télécharger
                // </a>
                <button onClick={handleShare} className="btn btn-primary">
                  Partager
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarteFuturEvent;

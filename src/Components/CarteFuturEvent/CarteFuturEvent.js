import "./CarteFuturEvent.css";
import { useEffect } from "react";

const CarteFuturEvent = ({ ou, description, quand, afficheUrl }) => {
  useEffect(() => {
    // Assurez-vous que Bootstrap est correctement initialisé
    import("bootstrap");
  }, []);
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Affiche de l'événement",
          text: `Consultez l'affiche de l'événement ${description} à ${ou} le ${quand}`,
          url: afficheUrl,
        });
        console.log("Partage réussi");
      } catch (error) {
        console.error("Erreur lors du partage :", error);
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(afficheUrl);
        alert(
          "Le lien a été copié dans le presse-papiers. Vous pouvez le coller pour le partager."
        );
      } catch (error) {
        console.error("Erreur lors de la copie du lien :", error);
      }
    } else {
      alert(
        "L'API Web Share et l'API Clipboard ne sont pas supportées par votre navigateur. Voici le lien à partager : " +
          afficheUrl
      );
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
              {afficheUrl ? (
                <img
                  src={afficheUrl}
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
              {afficheUrl ? (
                // <a href={afficheUrl} download className="btn btn-primary">
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

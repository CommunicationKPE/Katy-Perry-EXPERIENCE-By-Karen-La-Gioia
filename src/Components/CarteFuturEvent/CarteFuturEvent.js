import "./CarteFuturEvent.css";
import { useEffect } from "react";

const CarteFuturEvent = ({
  ou,
  description,
  quand,
  afficheUrl,
  id,
  isOpen,
}) => {
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
        className="carte-avant"
        data-bs-toggle="modal"
        data-bs-target={`#modalCarteFutur${id}`}
      >
        <h2>{quand}</h2>
        <h3 className="justify-content-center">
          <i className="fa-solid fa-location-dot"></i>
          {ou}
        </h3>
        <p>{description}</p>
        <div className="card-readmore">
          <p>Cliquez pour consulter l'affiche</p>
          {/* <i className="fa-solid fa-arrow-right"></i> */}
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={`modalCarteFutur${id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-hidden={!isOpen ? "true" : undefined}
        // inert={!isOpen ? "true" : undefined}
        // aria-hidden="true"
        // inert="true"
        tabIndex="-1"
        aria-labelledby={`modalCarteFuturLabel${id}`}
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`modalCarteFuturLabel${id}`}>
                Affiche de l'événement {quand}
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

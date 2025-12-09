import "./CarteFuturEvent.css";
import { useEffect } from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Les mois sont indexés à partir de 0
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const CarteFuturEvent = ({
  ou,
  description,
  quand,
  afficheUrl,
  id,
  isOpen,
}) => {
  const formattedDate = formatDate(quand);

  useEffect(() => {
    // Assurez-vous que Bootstrap est correctement initialisé
    import("bootstrap");
  }, []);
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Affiche de l'événement",
          text: `Consultez l'affiche de l'événement ${description} à ${ou} le ${formattedDate}`,
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
      <div className="carte-avant align-items-center">
        <h2>{formattedDate}</h2>
        <h3>
          <i className="fa-solid fa-location-dot"></i>
          {ou}
        </h3>
        <p>{description}</p>
        <button
          type="button"
          // className="btn btn-danger btn-contactez-nous"
          data-bs-toggle="modal"
          data-bs-target={`#modalCarteFutur${id}`}
          className="contact-submit"
        >
          Consultez l'affiche
        </button>
      </div>
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
                Retrouvez-nous le : {formattedDate}
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
            <div className="modal-footer justify-content-between">
              <h5>
                <i className="fa-solid fa-location-dot"></i> {ou}
              </h5>
              {afficheUrl ? (
                <button onClick={handleShare} className="btn btn-red">
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

import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-cadre">
        <div className="contact-title">
          <h1>Contactez-nous</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <div className="contact-details">
              <p>Retrouvez-nous sur les réseaux sociaux.</p>
              <div className="icons-reseaux">
                <div className="contact-detail">
                  <i className="fa-brands fa-youtube"></i>
                  <p>youtube</p>
                </div>
                <div className="contact-detail">
                  <i className="fa-brands fa-facebook-f"></i>
                  <p>facebook</p>
                </div>
                <div className="contact-detail">
                  <i className="fa-brands fa-twitter"></i>
                  <p>twitter</p>
                </div>
                <div className="contact-detail">
                  <i className="fa-brands fa-tiktok"></i>
                  <p>tiktok</p>
                </div>
                <div className="contact-detail">
                  <i className="fa-brands fa-instagram"></i>
                  <p>Instagram</p>
                </div>
              </div>
            </div>
            <p>
              Vous avez une question, une suggestion? Vous souhaitez reserver le
              spectacle ou simplement échanger? Remplissez le formulaire et
              notre équipe reviendra vers vous dans les plus brefs délais...
            </p>
          </div>
          <form className="contact-right">
            <input type="text" placeholder="Prénom" name="name" />

            <input type="text" placeholder="Nom" name="name" />

            <input type="email" placeholder="adresse@mail.com" name="email" />

            <textarea
              name="message"
              rows="8"
              placeholder="Votre Message ici"
            ></textarea>
            <button type="submit" className="contact-submit">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;

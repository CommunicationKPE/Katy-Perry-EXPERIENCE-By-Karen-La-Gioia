import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1 className="link">Contact Us</h1>
          <p>
            Une question, une suggestion, Vous souhaitez reserver le spectacle
            ou simplement échanger? Contactez nous ici. Notre équipe revient
            vers vous dans les plus brefs délais...
          </p>
          {/* <div className="contact-details">
            <div className="contact-detail">
              <i className="fas fa-envelope"></i>
              <p>DADADOUDOUD@epitech.eu</p>
            </div>
            <div className="contact-detail">
              <i className="fas fa-phone"></i>
              <p>+33 1 23 45 67 89</p>
            </div>
            <div className="contact-detail">
              <i className="fas fa-map-marker-alt"></i>
              <p>CA, United States</p>
            </div>
          </div> */}
        </div>
        <form className="contact-right">
          <label htmlFor="">Prénom NOM</label>
          <input type="text" placeholder="Noah KINGSLEY" name="name" />
          <label htmlFor="">Votre Email</label>
          <input
            type="email"
            placeholder="noah.Kingsley@epitech.eu"
            name="email"
          />
          <label htmlFor="">Entrez votre Message ici</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Bonjour, ..."
          ></textarea>
          <button type="submit" className="contact-submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;

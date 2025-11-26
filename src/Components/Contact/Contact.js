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
            We'd love to hear from you! Please fill out the form below to get in
            touch with us.
          </p>
          <div className="contact-details">
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
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Votre Nom</label>
          <input type="text" placeholder="Entrer votre nom" name="name" />
          <label htmlFor="">Votre Email</label>
          <input type="email" placeholder="Entrer votre email" name="email" />
          <label htmlFor="">Entrez votre Message ici</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Entrer votre message"
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

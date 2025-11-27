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
            <p>
              Vous avez une question, une suggestion? Vous souhaitez reserver le
              spectacle ou simplement échanger? Remplissez le formulaire et
              notre équipe reviendra vers vous dans les plus brefs délais...
            </p>
            {/* <div className="contact-details">
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
            </div> */}
          </div>
          <form className="contact-right">
            <label htmlFor="">Prénom NOM</label>
            <input type="text" placeholder="" name="name" />
            <label htmlFor="">Votre Email</label>
            <input type="email" placeholder="" name="email" />
            <label htmlFor="">Entrez votre Message ici</label>
            <textarea name="message" rows="8" placeholder=""></textarea>
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

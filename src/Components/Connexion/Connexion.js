import "./Connexion.css";

const Connexion = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-cadre">
        <div className="contact-title">
          <h1>Contactez-moi</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Echangeons</h1>
            <p>I'm currently available to take on new projects.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <i className="fa-solid fa-envelope"></i>
                <p>greatstackdev@gmail.com</p>
              </div>
              <div className="contact-detail">
                <i className="fa-solid fa-phone"></i>
                <p>+33 697316428</p>
              </div>
              <div className="contact-detail">
                <i className="fa-solid fa-location-dot"></i>
                <p>FRANCE</p>
              </div>
            </div>
          </div>
          <form action="" className="contact-right">
            <div className="input-group mb-3 form-control-sm">
              <span className="input-group-text" id="basic-addon1">
                Prénom
              </span>
              <input
                type="text"
                className="form-control"
                // placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3 form-control-sm">
              <span className="input-group-text" id="basic-addon1">
                Nom
              </span>
              <input
                type="text"
                className="form-control"
                // placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3 form-control-sm">
              <span className="input-group-text">Message</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
                // placeholder="Username"
              ></textarea>
            </div>
            <button className="btn btn-outline-secondary" type="submit">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Connexion;

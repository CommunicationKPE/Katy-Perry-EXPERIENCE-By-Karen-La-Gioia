import signature from "../../Assets/signature.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar bg-dark bg-body-tertiary fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#home">
            <img src={signature} alt="Bootstrap" height="45" />
          </a>
          <button
            className="navbar-toggler d-md-none" // Ajout de la classe d-md-none pour cacher le bouton sur les écrans moyens et plus grands
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end d-md-none"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <span>LIVE</span> Music Show
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    <i className="fa-solid fa-house-chimney"></i>Accueil
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    <i className="fa-solid fa-address-card"></i>A propos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#medias">
                    <i className="fa-solid fa-circle-play"></i>Média
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#avenirs">
                    <i className="fa-solid fa-hourglass-end"></i>Prochaines
                    dates
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#anciens">
                    <i className="fa-solid fa-calendar-check"></i>Dates passées
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    <i className="fa-solid fa-envelope"></i>Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-none d-md-flex">
            <ul className="navbar-nav flex-row ">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  <i className="fa-solid fa-house-chimney"></i>
                  Accueil
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#about">
                  <i className="fa-solid fa-address-card"></i>A propos
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#medias">
                  <i className="fa-solid fa-circle-play"></i>Média
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#avenirs">
                  <i className="fa-solid fa-hourglass-end"></i>Prochaines dates
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#anciens">
                  <i className="fa-solid fa-calendar-check"></i>Dates passées
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#contact">
                  <i className="fa-solid fa-envelope"></i>Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

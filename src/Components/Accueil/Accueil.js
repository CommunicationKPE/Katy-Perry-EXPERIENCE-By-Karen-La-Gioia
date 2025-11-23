import "./Accueil.css";
import donnees_Services from "../../Assets/services_data";
import logo from "../../Assets/Logo.png";

const Accueil = () => {
  // Obtenir la date d'aujourd'hui
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filtrer les services dont la date est antérieure à aujourd'hui (evenements passés)
  const pastServices = donnees_Services.filter((service) => {
    const serviceDate = new Date(service.s_date);
    return serviceDate < today;
  });

  // Compter le nombre d'événements à venir
  const upcomingEventsCount = donnees_Services.filter((service) => {
    const serviceDate = new Date(service.s_date);
    return serviceDate >= today;
  }).length;

  // Calculer la somme des spectateurs pour les événements passés
  const totalPastSpectators = pastServices.reduce((sum, service) => {
    return sum + (service.s_nbspectateurs || 0);
  }, 0);

  return (
    <div id="home" className="accueil">
      <div className="accueil-cadre d-flex">
        <div className="bas-gauche ">
          <h1>
            <span>LIVE</span> Music Show
          </h1>
          <button type="button" className="btn btn-contactez-nous">
            CONTACTEZ-NOUS
          </button>
          <div className="about-achievements">
            {upcomingEventsCount > 0 && (
              <div className="about-achievement">
                <h2>{upcomingEventsCount}</h2>
                <h5>SPECTACLES À VENIR</h5>
              </div>
            )}
            <hr className="border border-light border-1 opacity-100" />
            {totalPastSpectators > 0 && (
              <div className="about-achievement">
                <h2>{totalPastSpectators}</h2>
                <h5>SPECTATEURS</h5>
              </div>
            )}
            <hr className="border border-light border-1 opacity-100" />
            {pastServices.length > 0 && (
              <div className="about-achievement">
                <h2>{pastServices.length}</h2>
                <h5>EVENEMENTS RÉALISÉS</h5>
              </div>
            )}
          </div>
        </div>
        <div className="haut-droite">
          <img
            src={logo}
            alt="Logo Katy Perry Experience"
            className="logo-img"
          />
        </div>
      </div>
    </div>
  );
};
export default Accueil;

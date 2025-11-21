import "./Accueil.css";
// import donnees_Services from "../../Assets/services_data";
import logo from "../../Assets/Logo.png";

const Accueil = () => {
  // Obtenir la date d'aujourd'hui
  // const today = new Date();

  // Filtrer les services dont la date est antérieure à aujourd'hui
  // const pastServices = donnees_Services.filter((service) => {
  //   const serviceDate = new Date(service.s_date);
  //   return serviceDate < today;
  // });

  // Calculer la somme des spectateurs pour les événements passés
  // const totalPastSpectators = pastServices.reduce((sum, service) => {
  //   return sum + (service.s_nbspectateurs || 0);
  // }, 0);

  // Compter le nombre d'événements à venir
  // const upcomingEventsCount = donnees_Services.filter((service) => {
  //   const serviceDate = new Date(service.s_date);
  //   return serviceDate > today;
  // }).length;

  return (
    <div id="home" className="accueil">
      <div className="accueil-cadre d-flex">
        <div className="bas-gauche ">bas-gauche</div>
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

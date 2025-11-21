import "./About.css";
import donnees_Services from "../../Assets/services_data";

const About = () => {
  // Obtenir la date d'aujourd'hui
  const today = new Date();

  // Filtrer les services dont la date est antérieure à aujourd'hui
  const pastServices = donnees_Services.filter((service) => {
    const serviceDate = new Date(service.s_date);
    return serviceDate < today;
  });

  // Calculer la somme des spectateurs pour les événements passés
  const totalPastSpectators = pastServices.reduce((sum, service) => {
    return sum + (service.s_nbspectateurs || 0);
  }, 0);

  // Compter le nombre d'événements à venir
  const upcomingEventsCount = donnees_Services.filter((service) => {
    const serviceDate = new Date(service.s_date);
    return serviceDate > today;
  }).length;

  return (
    <div id="about" className="about">
      <div className="about-cadre">
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <div className="about-sections">
          <div className="about-left">
            {/* <img src={profile_img} alt="" /> */}
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                I am an experienced Frontend Developer with over a decade of
                professional expertise in the field. Throughout my career, I
                have had the privilege of collaborating with prestigious
                organizations, contributing to their success and growth.
              </p>
              <p>
                My passion for frontend development is not only reflected in my
                extensive experience but also in the enthusiasm and dedication I
                bring to each project.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Next JS</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>{pastServices.length}</h1>
            <p>Evenements réalisés</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>{totalPastSpectators}</h1>
            <p>spectateurs</p>
          </div>
          <hr />
          {upcomingEventsCount > 0 && (
            <div className="about-achievement">
              <h1>{upcomingEventsCount}</h1>
              <p>Spectacles à venir</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default About;

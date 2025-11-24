import "./About.css";

const About = () => {
  return (
    <section class="about-section">
      <div id="about" class="about-titre">
        <h1 class="title">À PROPOS</h1>
      </div>
      <div className="about-cadre">
        <p class="intro">
          <strong>Katy Perry EXPERIENCE by Karen La Gioia</strong> c’est une
          immersion totale dans l’univers pop moderne. Un spectacle où la
          musique, la scénographie et l’émotion se rencontrent pour créer une
          expérience unique.
        </p>

        <div class="content">
          <p>
            Portée par <strong>Karen La Gioia</strong>, artiste à la voix
            puissante et à la présence scénique captivante, l’expérience réunit
            une équipe de musiciens professionnels issus de la scène pop,
            électro et variété. Ensemble, ils proposent une relecture ambitieuse
            et moderne des plus grands titres de Katy Perry.
          </p>

          <p>
            Le show combine <strong>vidéos géantes</strong>,
            <strong> scénographie immersive</strong>,
            <strong> lumières synchronisées</strong> et
            <strong> arrangements soignés</strong> pour offrir au public un
            moment spectaculaire, généreux et inoubliable.
          </p>

          <p>
            Chaque chanson est pensée comme un univers à part entière, avec une
            direction artistique dédiée : couleurs, ambiances, effets visuels…
            pour créer un parcours émotionnel fluide et surprenant.
          </p>

          <p class="highlight">
            Que vous soyez fan de Katy Perry ou amateur de concerts pop
            modernes…
            <strong> L’expérience vous attend.</strong>
          </p>

          <p class="cta">
            <strong>
              Rejoignez-nous sur la prochaine date et vivez l’expérience “Katy
              Perry EXPERIENCE by Karen La Gioia”.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;

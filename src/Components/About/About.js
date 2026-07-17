import React from "react";
import "./About.css";

const ABOUT_CONTENT = {
  TITLE: "À Propos",
  INTRO: (
    <React.Fragment>
      <strong>Katy Perry EXPERIENCE by Karen La Gioia</strong> c’est une
      immersion totale dans l’univers pop moderne. Un spectacle où la
      musique, la scénographie et l’émotion se rencontrent pour créer une
      expérience unique.
    </React.Fragment>
  ),
  PARAGRAPH_1: (
    <React.Fragment>
      Portée par <strong>Karen La Gioia</strong>, artiste à la voix
      puissante et à la présence scénique captivante, l’expérience
      réunit une équipe de musiciens professionnels issus de la scène
      pop, électro et variété. Ensemble, ils proposent une relecture
      ambitieuse et moderne des plus grands titres de Katy Perry.
    </React.Fragment>
  ),
  PARAGRAPH_2: (
    <React.Fragment>
      Le show combine <strong>vidéos géantes</strong>,
      <strong> scénographie immersive</strong>,
      <strong> lumières synchronisées</strong> et
      <strong> arrangements soignés</strong> pour offrir au public un
      moment spectaculaire, généreux et inoubliable.
    </React.Fragment>
  ),
  PARAGRAPH_3: (
    <React.Fragment>
      Chaque chanson est pensée comme un univers à part entière, avec
      une direction artistique dédiée : couleurs, ambiances, effets
      visuels… pour créer un parcours émotionnel fluide et surprenant.
    </React.Fragment>
  ),
  HIGHLIGHT: (
    <React.Fragment>
      Que vous soyez fan de Katy Perry ou amateur de concerts pop
      modernes…
      <strong> L’expérience vous attend.</strong>
    </React.Fragment>
  ),
  CTA: (
    <React.Fragment>
      <strong>
        Rejoignez-nous sur la prochaine date et vivez l’expérience “Katy
        Perry EXPERIENCE by Karen La Gioia”.
      </strong>
    </React.Fragment>
  ),
};

const SectionTitle = ({ children, id }) => {
  return (
    <header className="about-titre">
      <h1 id={id} className="title">{children}</h1>
    </header>
  );
};

const Paragraph = ({ children, className = "" }) => {
  return <p className={`about-paragraph ${className}`}>{children}</p>;
};

const CallToAction = () => {
  return (
    <a
      href="#contact"
      className="btn-contactez-nous"
      aria-label="Contactez-nous"
    >
      Contactez-nous
    </a>
  );
};

const About = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-cadre" role="main">
        <SectionTitle id="about-title">{ABOUT_CONTENT.TITLE}</SectionTitle>
        <article className="about-container">
          <Paragraph className="intro">{ABOUT_CONTENT.INTRO}</Paragraph>
          <section className="content" role="complementary">
            <Paragraph>{ABOUT_CONTENT.PARAGRAPH_1}</Paragraph>
            <Paragraph>{ABOUT_CONTENT.PARAGRAPH_2}</Paragraph>
            <Paragraph>{ABOUT_CONTENT.PARAGRAPH_3}</Paragraph>
            <Paragraph className="highlight">{ABOUT_CONTENT.HIGHLIGHT}</Paragraph>
            <Paragraph className="cta">{ABOUT_CONTENT.CTA}</Paragraph>
            <CallToAction />
          </section>
        </article>
      </div>
    </section>
  );
};

About.propTypes = {
  // Définissez ici les props si nécessaire
};

export default React.memo(About);
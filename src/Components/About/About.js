import React, { useEffect, useState } from "react";
import "./About.css";
import { supabase } from "../../config/supabase";

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
  const [carouselImages, setCarouselImages] = useState([]);
  const [carouselLoading, setCarouselLoading] = useState(true);
  const [carouselError, setCarouselError] = useState(false);

  useEffect(() => {
    const fetchCarouselImages = async () => {
      const { data, error } = await supabase
        .from("Carousel")
        .select("url_img_carousel");

      if (error) {
        console.error("Erreur lors de la récupération du carousel", error);
        setCarouselError(true);
        setCarouselLoading(false);
        return;
      }

      setCarouselImages(
        data
          .map(({ url_img_carousel }) => url_img_carousel)
          .filter(Boolean)
      );
      setCarouselLoading(false);
    };

    fetchCarouselImages();
  }, []);

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
            {carouselLoading && (
              <p className="carousel-message" role="status">
                Chargement du carousel...
              </p>
            )}
            {carouselImages.length > 0 && (
              <div
                id="aboutCarousel"
                className="carousel slide about-carousel"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {carouselImages.map((imageUrl, index) => (
                    <div
                      className={`carousel-item${index === 0 ? " active" : ""}`}
                      key={imageUrl}
                    >
                      <img
                        src={imageUrl}
                        className="d-block w-100"
                        alt={`Visuel ${index + 1} de Katy Perry Experience`}
                      />
                    </div>
                  ))}
                </div>
                {carouselImages.length > 1 && (
                  <>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#aboutCarousel"
                      data-bs-slide="prev"
                      aria-label="Visuel précédent"
                    >
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#aboutCarousel"
                      data-bs-slide="next"
                      aria-label="Visuel suivant"
                    >
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>
            )}
            {carouselError && (
              <p className="carousel-message" role="status">
                Le carousel est momentanément indisponible.
              </p>
            )}
            {!carouselLoading && !carouselError && carouselImages.length === 0 && (
              <p className="carousel-message" role="status">
                Aucune image n&apos;est disponible dans le carousel.
              </p>
            )}
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
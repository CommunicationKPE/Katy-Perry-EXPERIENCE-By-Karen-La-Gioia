import { useState, useEffect, useCallback } from "react";
import React from "react";
import "./Medias.css";

const Media = ({ medias }) => {
  const [showMedia, setShowMedia] = useState(false);
  const [mediaErrors, setMediaErrors] = useState({});
  const [showTranscript, setShowTranscript] = useState({});

  useEffect(() => {
    setShowMedia(!!(medias && medias.length > 0));
  }, [medias]);

  const handleMediaError = useCallback((index) => {
    setMediaErrors(prev => ({...prev, [index]: true}));
  }, []);

  const toggleTranscript = useCallback((index) => {
    setShowTranscript(prev => ({...prev, [index]: !prev[index]}));
  }, []);

  if (!showMedia) return null;

  return (
    <div id="medias" className="medias">
      <div className="medias-cadre">
        <div className="medias-title">
          <h1>{medias.length === 1 ? "Média" : "Médias"}</h1>
        </div>
        <div className="medias-container">
          {medias.map((media, index) => (
            <div key={media.id || media.video || index} className="media-item">
              {mediaErrors[index] ? (
                <div className="media-error" role="alert">
                  Erreur de chargement du média
                </div>
              ) : (
                <>
                  <div className="ratio ratio-16x9">
                    <iframe
                      loading="lazy"
                      width="560"
                      height="315"
                      src={media.video}
                      title={`${media.title || `Média ${index + 1}`} - Katy Perry Experience`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      onError={() => handleMediaError(index)}
                      aria-label={`Lecteur vidéo ${index + 1}`}
                    />
                  </div>
                  {media.transcription && (
                    <>
                      <button
                        className="transcript-toggle"
                        onClick={() => toggleTranscript(index)}
                        aria-expanded={showTranscript[index]}
                        aria-controls={`transcript-${index}`}
                      >
                        {showTranscript[index] ? "Masquer" : "Voir"} la transcription
                      </button>
                      {showTranscript[index] && (
                        <div
                          id={`transcript-${index}`}
                          className="media-transcript"
                          aria-live="polite"
                        >
                          {media.transcription}
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default React.memo(Media);
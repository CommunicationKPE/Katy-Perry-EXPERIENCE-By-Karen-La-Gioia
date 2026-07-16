import "./Medias.css";
import { useState, useEffect } from "react";

const Media = ({ medias }) => {
  const [showMedia, setShowMedia] = useState(false);

  useEffect(() => {
    if (medias && medias.length > 0) {
      setShowMedia(true);
    }
  }, [medias]);

  return (
    <div id="medias" className="medias">
      {showMedia && (
        <div className="medias-cadre">
          <div className="medias-title">
            <h1>{medias.length === 1 ? "Média" : "Médias"}</h1>
          </div>
          <div className="medias-container">
            {medias.map((media, index) => (
              <div key={index} className="ratio ratio-16x9">
                <iframe
                  width="560"
                  height="315"
                  src={media.video}
                  title={media.title || `YouTube video player ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                >
                </iframe>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
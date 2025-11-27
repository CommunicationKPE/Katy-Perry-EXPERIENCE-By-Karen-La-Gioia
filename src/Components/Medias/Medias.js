import "./Medias.css";

const Media = () => {
  return (
    <div className="medias">
      <div className="medias-cadre">
        <div className="medias-title">
          <h1>Media</h1>
        </div>
        <div className="medias-container">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/UBWIznYP4M0?si=CZ1E1FU-uJaL7qAG"
              title="YouTube video player"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Media;

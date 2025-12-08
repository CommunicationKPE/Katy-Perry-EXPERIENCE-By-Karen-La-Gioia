import "./Footer.css";

const Footer = ({ visits }) => {
  console.log(visits);
  return (
    <div className="copyright">
      <p>
        KatyPerryEXPERIENCEbyKarenLaGioia<br></br> / WebApp / {visits} visiteurs
        <br></br>
        <i className="fas fa-drum"></i>
        -Developed by ///Atn/// With-
        <i className="fa-solid fa-heart"></i>
      </p>
    </div>
  );
};
export default Footer;

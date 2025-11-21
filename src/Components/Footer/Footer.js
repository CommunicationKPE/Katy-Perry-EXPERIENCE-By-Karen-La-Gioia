import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            {/* <img src={footer_logo} alt="" /> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            &copy; 2024 Your Company. All rights reserved.
          </p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

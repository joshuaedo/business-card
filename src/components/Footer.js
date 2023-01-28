import "./Footer.css";

function Footer() {
  const twitterIcon = require("../assets/twitter-icon.png");
  const facebookIcon = require("../assets/facebook-icon.png");
  const instagramIcon = require("../assets/instagram-icon.png");
  const githubIcon = require("../assets/github-icon.png");

  return (
    <div className="footer">
      <img className="twitter-icon" src={twitterIcon} alt="twitter-icon" />
      <img className="facebook-icon" src={facebookIcon} alt="facebook-icon" />
      <img
        className="instagram-icon"
        src={instagramIcon}
        alt="instagram-icon"
      />
      <img className="github-icon" src={githubIcon} alt="github-icon" />
    </div>
  );
}

export default Footer;

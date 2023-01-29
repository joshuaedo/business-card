import "./Footer.css";

function Footer() {
  const twitterIcon = require("../assets/twitter-icon.png");
  const facebookIcon = require("../assets/facebook-icon.png");
  const instagramIcon = require("../assets/instagram-icon.png");
  const githubIcon = require("../assets/github-icon.png");

  return (
    <div className="footer">
      <a href="https://www.twitter.com/Thegr8joshua">
        <img className="twitter-icon" src={twitterIcon} alt="twitter-icon" />
      </a>
      <a href="https://www.facebook.com/joshua.edo.587">
        {" "}
        <img className="facebook-icon" src={facebookIcon} alt="facebook-icon" />
      </a>
      <a href="https://www.instagram.com/edo_joshua">
        <img
          className="instagram-icon"
          src={instagramIcon}
          alt="instagram-icon"
        />
      </a>
      <a href=" https://www.github.com/joshuaedo">
        <img className="github-icon" src={githubIcon} alt="github-icon" />
      </a>
    </div>
  );
}

export default Footer;

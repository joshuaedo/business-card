import "./Links.css";

function Links() {
  const emailButton = require("../assets/email-button.png");
  const linkedInButton = require("../assets/linkedin-button.png");

  return (
    <div className="links">
      <h2>Joshua Edo</h2>
      <p>Frontend Developer</p>
      <p>joshuaedo.com</p>
      <img className="email-button" src={emailButton} alt="email button" />
      <img
        className="linkedin-button"
        src={linkedInButton}
        alt="linkdein button"
      />
    </div>
  );
}

export default Links;

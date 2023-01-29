import "./Links.css";

function Links() {
  const emailButton = require("../assets/email-button.png");
  const linkedInButton = require("../assets/linkedin-button.png");

  return (
    <div className="links">
      <h2>Joshua Edo</h2>
      <p className="title">Frontend Developer</p>
      <p className="website">joshuaedo.com</p>
      <div className="buttons">
        <a href="mailto:joshua.edo01@gmail.com">
          <img className="email-button" src={emailButton} alt="email button" />
        </a>
        <a href="https://www.linkedin.com/in/joshuaedo">
          <img
            className="linkedin-button"
            src={linkedInButton}
            alt="linkedIn button"
          />
        </a>
      </div>
    </div>
  );
}

export default Links;

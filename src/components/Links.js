import "./Links.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Links() {
  return (
    <div className="links">
      <h2>Joshua Edo</h2>
      <p className="title">Frontend Developer</p>
      <p className="website">joshuaedo.com</p>
      <div className="buttons">
        <a href="mailto:joshua.edo01@gmail.com">
          <button className="email-button contact-button">
            <FaEnvelope />
            Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/joshuaedo">
          <button className="linkedin-button contact-button">
            <FaLinkedin />
            Linkedin
          </button>
        </a>
      </div>
    </div>
  );
}

export default Links;

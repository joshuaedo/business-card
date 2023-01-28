import "./CoverPhoto.css";

export default function CoverPhoto() {
  const coverphoto = require("../assets/cover-photo.jpg");
  return <img className="cover-photo" src={coverphoto} alt="Joshua Edo" />;
}

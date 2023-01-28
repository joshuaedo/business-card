import "./Card.css";
import CoverPhoto from "./CoverPhoto";
import Links from "./Links";
import Main from "./Main";
import Footer from "./Footer";

function Card() {
  return (
    <div className="card">
      <CoverPhoto />
      <Links />
      <Main />
      <Footer />
    </div>
  );
}

export default Card;

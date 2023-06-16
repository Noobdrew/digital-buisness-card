import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import gitHub from "../assets/gitHub.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <img src={twitter} alt="twitter" />
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <img src={gitHub} alt="gitHub" />
    </div>
  );
}

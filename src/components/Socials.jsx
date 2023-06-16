import socialsIcon from "../assets/ivan.jpg";
import email from "../assets/email.png";
import linkedIn from "../assets/linkedin.png";

export default function Socials() {
  return (
    <header className="header">
      <img src={socialsIcon} alt="Ivan" className="header-icon" />
      <h1 className="header-title">Ivan Marinski</h1>
      <h4 className="sub-title">Frontend Developer</h4>
      <p className="header-website">ivanmarinskisoftware@gmail.com</p>
      <div className="button-conteiner">
        <button className="email">
          <img src={email} alt="Email icon" />
          <p className="button-text">Email</p>
        </button>
        <button className="linkedin">
          <img src={linkedIn} alt="LinkedIn icon" />
          <p className="button-text">LinkedIn</p>
        </button>
      </div>
    </header>
  );
}

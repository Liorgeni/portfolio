import facebook from "../assets/img/icon-facebook.svg";
import instagram from "../assets/img/icon-instagram.svg";
import linkedin from "../assets/img/icon-linkedin.svg";
import gmail from "../assets/img/icon-gmail.svg";

export function AppFooter() {
  return (
    <footer className="app-footer main-layout full">
      <div className="footer-nav flex">
        <h1 className="flex">Contact me:</h1>
        <div className="social-links flex grow">
          <a
            href="https://www.linkedin.com/in/lior-geni-0897a7229/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/liorgeni/" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/liorgeni/" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <p className="mail">liorgeni@gmail.com</p>
        <br />
        <p>Copyrights 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

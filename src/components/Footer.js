import instagram from "../assets/ant-design_instagram-filled.png";
import youtube from "../assets/akar-icons_youtube-fill.png";
import twitter from "../assets/akar-icons_twitter-fill.png";
import facebook from "../assets/akar-icons_facebook-fill.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__menu">
        <p className="description codeit">©codeit - 2023</p>
        <div className="footer__menu__modal">
          <p>Privacy Polic</p>
          <p>FAQ</p>
        </div>
        <div className="footer__menu__icon">
          <p>
            <img src={facebook} alt="facebook icon" />
          </p>
          <p>
            <img src={twitter} alt="twitter icon" />
          </p>
          <p>
            <img src={youtube} alt="youtube icon" />
          </p>
          <p>
            <img src={instagram} alt="instagram icon" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

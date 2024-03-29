import instagram from "../assets/ant-design_instagram-filled.png";
import youtube from "../assets/akar-icons_youtube-fill.png";
import twitter from "../assets/akar-icons_twitter-fill.png";
import facebook from "../assets/akar-icons_facebook-fill.png";
import "./Footer.css";

export function Icon({ image, alt }) {
  return (
    <p>
      <img src={image} alt={`${alt} icon`} />
    </p>
  );
}

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
          <Icon image={facebook} alt={"facebook"} />
          <Icon image={twitter} alt={"twitter"} />
          <Icon image={youtube} alt={"youtube"} />
          <Icon image={instagram} alt={"instagram"} />
        </div>
      </div>
    </div>
  );
}

export default Footer;

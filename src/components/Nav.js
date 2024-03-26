import "./Nav.css";
import logo from "../assets/logo.svg";

function Nav({ user }) {
  return (
    <div className="nav">
      <div className="navModal">
        <img src={logo} alt="Linkbrary nav logo" className="navLogo" />
        <div className="userProfile">
          <img
            src={user.profileImageSource}
            alt="userPicture"
            className="userPicture"
          />
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;

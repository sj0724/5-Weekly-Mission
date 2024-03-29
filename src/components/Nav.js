import "./Nav.css";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function NavUser() {
  const profile = useContext(UserContext);

  const { profileImageSource, email } = profile;

  return (
    <>
      <img src={profileImageSource} alt="userPicture" className="userPicture" />
      <p>{email}</p>
    </>
  );
}

function Nav() {
  const profile = useContext(UserContext);

  return (
    <div className="nav">
      <div className="navModal">
        <img src={logo} alt="Linkbrary nav logo" className="navLogo" />
        <div className="userProfile">
          {profile ? <NavUser /> : <Button>로그인</Button>}
        </div>
      </div>
    </div>
  );
}

export default Nav;

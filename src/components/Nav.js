import "./Nav.css";
import logo from "../assets/logo.svg";
import Button from "./Button";

function NavUser({ user }) {
  const { profileImageSource, email } = user;

  return (
    <>
      <img src={profileImageSource} alt="userPicture" className="userPicture" />
      <p>{email}</p>
    </>
  );
}

function Nav({ user }) {
  return (
    <div className="nav">
      <div className="navModal">
        <img src={logo} alt="Linkbrary nav logo" className="navLogo" />
        <div className="userProfile">
          {user ? <NavUser user={user} /> : <Button>로그인</Button>}
        </div>
      </div>
    </div>
  );
}

export default Nav;

import "./Nav.css";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  position: ${(props) => (props.position ? "sticky" : "relative")};
  padding: 20px 200px;
  width: 100%;
  top: 0;
  z-index: 2;
  background-color: var(--Background);

  @media (max-width: 1199px) {
    padding: 20px 32px;
  }
`;

function NavUser({ user }) {
  const { profileImageSource, email } = user;

  return (
    <>
      <img src={profileImageSource} alt="userPicture" className="userPicture" />
      <p>{email}</p>
    </>
  );
}

function Nav({ user, position }) {
  return (
    <NavBar position={position}>
      <div className="navModal">
        <Link to="/">
          <img src={logo} alt="Linkbrary nav logo" className="navLogo" />
        </Link>
        <div className="userProfile">
          {user ? (
            <NavUser user={user} />
          ) : (
            <Button size="medium">로그인</Button>
          )}
        </div>
      </div>
    </NavBar>
  );
}

export default Nav;

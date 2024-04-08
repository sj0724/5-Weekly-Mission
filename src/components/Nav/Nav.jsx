import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import * as S from "./Nav.styled";
import { useEffect, useState } from "react";

function NavUser({ user }) {
  const [imageSource, setImageSource] = useState("");

  const { email } = user;
  useEffect(() => {
    if (user.profileImageSource) {
      setImageSource(user.profileImageSource);
    } else if (user.image_source) {
      setImageSource(user.image_source);
    }
  }, [user]);

  return (
    <>
      <S.UserPicture src={imageSource} alt="userPicture" />
      <p>{email}</p>
    </>
  );
}

function Nav({ user, position }) {
  return (
    <S.NavBar position={position}>
      <S.NavModal>
        <Link to="/">
          <S.NavLogo src={logo} alt="Linkbrary nav logo" />
        </Link>
        <S.UserProfile>
          {user ? (
            <NavUser user={user} />
          ) : (
            <Button size="medium">로그인</Button>
          )}
        </S.UserProfile>
      </S.NavModal>
    </S.NavBar>
  );
}

export default Nav;

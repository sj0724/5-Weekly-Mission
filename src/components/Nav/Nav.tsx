import React from 'react';
import logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import * as S from './Nav.styled';
import useGetUser, { User } from '../../hooks/useGetUser';

function NavUser({ user }: { user: User }) {
  return (
    <>
      <S.UserPicture src={user.image_source} alt="userPicture" />
      <p>{user.email}</p>
    </>
  );
}

function Nav() {
  const { user } = useGetUser(1);

  return (
    <S.NavBar>
      <S.NavModal>
        <Link to="/">
          <S.NavLogo src={logo} alt="Linkbrary nav logo" />
        </Link>
        <S.UserProfile>
          {user ? <NavUser user={user} /> : <Button size={8}>로그인</Button>}
        </S.UserProfile>
      </S.NavModal>
    </S.NavBar>
  );
}

export default Nav;

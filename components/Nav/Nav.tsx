import { Button } from '../Button/Button';
import * as S from './Nav.styled';
import { User } from '../../hooks/useGetUser';
import Link from 'next/link';
import { Dispatch, useState } from 'react';

function NavUser({
  user,
  toggle,
  setToggle,
}: {
  user: User;
  toggle: boolean;
  setToggle: Dispatch<React.SetStateAction<boolean>>;
}) {
  const isLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <S.ProfileBody>
      <S.UserPicture src={user.image_source} alt="userPicture" />
      <p onClick={() => setToggle(!toggle)}>{user.email}</p>
      {toggle && (
        <S.ToggleMenu>
          <p onClick={isLogout}>로그아웃</p>
        </S.ToggleMenu>
      )}
    </S.ProfileBody>
  );
}

function Nav({ user }: { user: User }) {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <S.NavBar>
      <S.NavModal>
        <Link href="/">
          <S.NavLogo src="/logo.svg" alt="Linkbrary nav logo" />
        </Link>
        <S.UserProfile>
          {user.id ? (
            <NavUser user={user} toggle={toggleNav} setToggle={setToggleNav} />
          ) : (
            <Link href="/signin" style={{ textDecoration: 'none' }}>
              <Button size="sm">로그인</Button>
            </Link>
          )}
        </S.UserProfile>
      </S.NavModal>
    </S.NavBar>
  );
}

export default Nav;

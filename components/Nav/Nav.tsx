import { Button } from '../Button/Button';
import * as S from './Nav.styled';
import useGetUser, { User } from '../../hooks/useGetUser';
import Link from 'next/link';

function NavUser({ user }: { user: User }) {
  return (
    <>
      <Link href={'/folder'} style={{ display: 'flex', alignItems: 'center' }}>
        <S.UserPicture src={user.image_source} alt="userPicture" />
        <p>{user.email}</p>
      </Link>
    </>
  );
}

function Nav() {
  const { user } = useGetUser(1);

  return (
    <S.NavBar>
      <S.NavModal>
        <Link href="/">
          <S.NavLogo src="/logo.svg" alt="Linkbrary nav logo" />
        </Link>
        <S.UserProfile>
          {user ? (
            <NavUser user={user} />
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

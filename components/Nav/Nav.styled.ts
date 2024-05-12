import styled from 'styled-components';

export const NavModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.img`
  width: 13.3rem;
  height: 2.4rem;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserPicture = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 1.4rem;
`;

export const NavBar = styled.div`
  position: sticky;
  padding: 2rem 20rem;
  width: 100%;
  top: 0;
  z-index: 2;
  background-color: var(--Background);
  font-size: 1.6rem;

  @media (max-width: 1199px) {
    padding: 2rem 3.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

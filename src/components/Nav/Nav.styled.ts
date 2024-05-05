import styled from 'styled-components';

export const NavModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.img`
  width: 133px;
  height: 24px;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserPicture = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 14px;
`;

export const NavBar = styled.div`
  position: sticky;
  padding: 20px 200px;
  width: 100%;
  top: 0;
  z-index: 2;
  background-color: var(--Background);

  @media (max-width: 1199px) {
    padding: 20px 32px;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

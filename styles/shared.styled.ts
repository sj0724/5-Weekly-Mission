import styled from 'styled-components';

export const Shared = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Pretendard;
`;

export const OwnerProfile = styled.div`
  background-color: var(--Background);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 6rem 0;
`;

export const OwnerProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
`;

export const OwnerName = styled.p`
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  margin-top: 1.2rem;
`;

export const FolderName = styled.p`
  color: #000;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Pretendard;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 2rem;
`;

export const SharedContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1199px) {
    padding: 0 3.2rem;
  }
`;

export const Container = styled.div`
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  position: relative;

  @media (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

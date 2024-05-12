import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  p {
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  span {
    width: 4.2rem;
    color: var(--Linkbrary-gray60);
    text-align: center;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem; /* 157.143% */
  }
`;

export const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20rem;
  overflow: auto;
`;

export const FolderButton = styled.div<{ $check: boolean }>`
  cursor: pointer;
  width: 26.4rem;
  display: flex;
  padding: 0.8rem;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
  background: ${(props) => props.$check && 'var(--Background)'};
`;

export const FolderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  h2 {
    margin: 0;
    color: var(--Primary);
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem; /* 150% */
  }

  p {
    color: var(--Linkbrary-gray60);
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

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

export const Title = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1.5rem 0;
`;

export const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 20rem;
  overflow: auto;
`;

export const FolderButton = styled.div<{ $isSelected: string }>`
  cursor: pointer;
  width: 26.4rem;
  display: flex;
  padding: 0.8rem;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
  background: ${(props) =>
    props.$isSelected === 'select' && 'var(--Background)'};
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
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const InputForm = styled.form``;

export const AddFolder = styled.div`
  padding-top: 0.2rem;
  text-align: center;
  text-height: 1rem;
  font-size: 1.6rem;
  color: var(--Primary);
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;

import styled from 'styled-components';
import { ModalButton } from '../EditModal/EditModal.styled';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  span {
    width: 42px;
    height: 42px;
    color: var(--Linkbrary-gray60);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`;

export const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FolderButton = styled.div<{ $check: boolean }>`
  cursor: pointer;
  width: 264px;
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${(props) => props.$check && 'var(--Background)'};
`;

export const FolderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h2 {
    margin: 0;
    color: var(--Primary);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }

  p {
    color: var(--Linkbrary-gray60);

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const AddButton = styled(ModalButton)``;

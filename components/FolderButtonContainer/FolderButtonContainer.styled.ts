import styled from 'styled-components';
import { FolderName } from '../../components/FolderButton/FolderButton.styled';

export const FolderMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FolderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  overflow: auto;
  width: 100%;
`;

export const TotalFolderButton = styled(FolderName)``;

export const AddFolderButton = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: var(--Primary);
  white-space: nowrap;
  margin-left: 1.2rem;
  gap: 0.6rem;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  @media (max-width: 768px) {
    background-color: var(--Primary);
    color: #fff;
    z-index: 3;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 12rem;
    padding: 0.8rem 2.4rem;
    border-radius: 2rem;
    font-size: 1.2rem;
    margin: 0;
  }
`;

export const PlusIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url('/addPurple.svg');

  @media (max-width: 768px) {
    background-image: url('/add.svg');
  }
`;

import styled from 'styled-components';
import { FolderName } from '../../components/FolderButton/FolderButton.styled';
import AddIcon from '../../assets/add.svg';
import AddIconPurple from '../../assets/addPurple.svg';

export const FolderMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FolderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const TotalFolderButton = styled(FolderName)``;

export const AddFolderButton = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: var(--Primary);
  white-space: nowrap;
  margin-left: 12px;
  gap: 6px;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
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
    bottom: 101px;
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 1.6rem;
    margin: 0;
  }
`;

export const PlusIcon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${AddIconPurple});

  @media (max-width: 768px) {
    background-image: url(${AddIcon});
  }
`;

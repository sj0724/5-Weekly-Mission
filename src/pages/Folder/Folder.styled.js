import styled from 'styled-components';
import { Cta } from '../../components/Button/Button.styled';
import { FolderName } from '../../components/FolderButton/FolderButton.styled';

export const AddButton = styled(Cta)`
  position: absolute;
  width: fit-content;
  padding: 10px 16px;
  font-size: 1rem;
  right: 20px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const EmptyFolder = styled.div`
  height: 300px;
  font-size: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;

export const AddLinkInput = styled.input`
  width: 100%;
  height: 69px;
  padding: 16px 45px;
  border-radius: 15px;
  border: 1px solid var(--Primary);
  background: #ffffff;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const LinkIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 20px;
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const HeaderModal = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  padding: 20px 0 60px 0;
`;

export const Header = styled.div`
  background-color: var(--Background);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1199px) {
    padding: 0 32px;
  }
`;

export const FolderContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1060px;

  @media (max-width: 1199px) {
    padding: 0 32px;
  }
`;

export const FolderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const TotalFolderButton = styled(FolderName)``;

export const FolderMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddFolderButton = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Primary);
  white-space: nowrap;
  margin-left: 12px;
  gap: 6px;

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

export const FolderModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 24px;
  margin: 24px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }
`;

export const FolderModal = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FolderModalIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--Linkbrary-gray60);
  font-size: 14px;
`;

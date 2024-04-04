import styled from "styled-components";
import { Cta } from "../../components/Button/Button.styled";

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
  padding: 16px 40px;
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
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  padding: 20px 0 60px 0;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  background-color: var(--Background);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: fit-content;

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

  @media (max-width: 768px) {
    background-color: var(--Primary);
    color: #fff;
    z-index: 3;
    position: fixed;
    left: 40%;
    bottom: 101px;
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 1.6rem;
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

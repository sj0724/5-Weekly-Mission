import styled from "styled-components";
import { Cta } from "../../components/Button";

export const AddButton = styled(Cta)`
  position: absolute;
  width: 5.5rem;
  padding: 10px 16px;
  font-size: 14px;
  right: 20px;
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
  width: 800px;
  height: 69px;
  padding: 16px 40px;
  border-radius: 15px;
  border: 1px solid var(--Primary);
  background: #ffffff;
  font-size: 1rem;
`;

export const LinkIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 20px;
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

export const Header = styled.div`
  background-color: var(--Background);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 60px 0;
`;

export const FolderContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: fit-content;
`;

export const FolderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
`;

export const FolderModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 24px;
  margin: 24px auto;
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

import styled from "styled-components";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SearchModal from "../components/SearchBar";
import { Cta } from "../components/Button";
import linkIcon from "../assets/link.svg";
import { useEffect, useState } from "react";
import { getLink, getLinkList } from "../api/api";
import FolderButton from "../components/FolderButton";
import AddIcon from "../assets/add.svg";
import ContentsContainer from "../components/ContentsContainer";
import Card from "../components/Card";
import PenIcon from "../assets/pen.svg";
import SharedIcon from "../assets/share.svg";
import DeleteIcon from "../assets/Group36.svg";

const AddButton = styled(Cta)`
  position: absolute;
  width: 5.5rem;
  padding: 10px 16px;
  font-size: 14px;
  right: 20px;
`;

const EmptyFolder = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;

const AddLinkInput = styled.input`
  width: 800px;
  height: 69px;
  padding: 16px 40px;
  border-radius: 15px;
  border: 1px solid var(--Primary);
  background: #ffffff;
  font-size: 1rem;
`;

const LinkIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 20px;
`;

const HeaderModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.div`
  background-color: var(--Background);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 60px 0;
`;

const FolderContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1044px;
`;

const FolderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FolderMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddFolderButton = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Primary);
`;

const FolderModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 24px;
  margin: 24px auto;
`;

const FolderModal = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const FolderModalIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--Linkbrary-gray60);
  font-size: 14px;
`;

function FolderIcon({ image, children }) {
  return (
    <FolderModalIcon>
      <img src={image} alt={`${image}`} />
      {children}
    </FolderModalIcon>
  );
}

function Folder() {
  const [link, setLink] = useState([]);
  const [linkList, setLinkList] = useState([]);
  const [folderId, setFolderId] = useState("");
  const [folderName, setFolderName] = useState("");

  const linkLoad = async (id) => {
    const links = await getLink();
    const linkList = await getLinkList(id);
    setLink(links.data);
    setLinkList(linkList.data);
  };

  useEffect(() => {
    linkLoad(folderId);
  }, [folderId, folderName]);

  return (
    <>
      <Nav />
      <Header>
        <HeaderModal>
          <LinkIcon src={linkIcon}></LinkIcon>
          <AddLinkInput placeholder="링크를 추가해보세요." />
          <AddButton>추가하기</AddButton>
        </HeaderModal>
      </Header>
      <FolderContents>
        <SearchModal />
        <FolderMenu>
          <FolderButtons>
            <FolderButton
              setFolderId={setFolderId}
              setFolderName={setFolderName}
            />
            {link
              ? link.map((item) => (
                  <FolderButton
                    item={item}
                    key={item.id}
                    setFolderId={setFolderId}
                    setFolderName={setFolderName}
                  />
                ))
              : null}
          </FolderButtons>
          <AddFolderButton>
            폴더 추가
            <img src={AddIcon} alt="AddIcon" />
          </AddFolderButton>
        </FolderMenu>
        <FolderModalContainer>
          {folderName ? folderName : "전체"}
          <FolderModal>
            <FolderIcon image={SharedIcon}>공유</FolderIcon>
            <FolderIcon image={PenIcon}>이름 변경</FolderIcon>
            <FolderIcon image={DeleteIcon}>삭제</FolderIcon>
          </FolderModal>
        </FolderModalContainer>
        <ContentsContainer>
          {linkList.length > 0 ? (
            linkList.map((item) => <Card item={item} key={item.id} />)
          ) : (
            <EmptyFolder>저장된 링크가 없습니다.</EmptyFolder>
          )}
        </ContentsContainer>
      </FolderContents>
      <Footer />
    </>
  );
}

export default Folder;

import styled from "styled-components";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SearchModal from "../components/SearchBar";
import { Cta } from "../components/Button";
import linkIcon from "../assets/link.svg";
import { useEffect, useState } from "react";
import { getLink } from "../api/api";
import FolderButton from "../components/FolderButton";
import AddIcon from "../assets/add.svg";
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

const FolderModal = styled.div`
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

function Folder() {
  const [link, setLink] = useState([]);

  const linkLoad = async () => {
    const links = await getLink();
    const { data } = links;
    setLink(data);
  };

  useEffect(() => {
    linkLoad();
  }, []);

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
        <FolderModal>
          <FolderButtons>
            {link.map((item) => (
              <FolderButton item={item} key={item.id} />
            ))}
          </FolderButtons>
          <AddFolderButton>
            폴더 추가
            <img src={AddIcon} />
          </AddFolderButton>
        </FolderModal>
        <EmptyFolder>저장된 링크가 없습니다.</EmptyFolder>
      </FolderContents>
      <Footer />
    </>
  );
}

export default Folder;

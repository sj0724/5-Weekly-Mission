import styled from "styled-components";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SearchModal from "../components/SearchBar";
import { Cta } from "../components/Button";
import linkIcon from "../assets/link.svg";
import { useEffect, useState } from "react";
import { getLink } from "../api/api";
import Card from "../components/Card";

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

function Folder() {
  const [link, setLink] = useState([]);

  const linkLoad = async () => {
    const links = await getLink();
    const { data } = links;
    setLink(data);
    console.log(data);
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
      <SearchModal />
      {link ? (
        link.map((item) => {
          <Card item={item} key={item.id} />;
        })
      ) : (
        <EmptyFolder>저장된 링크가 없습니다.</EmptyFolder>
      )}
      <Footer />
    </>
  );
}

export default Folder;

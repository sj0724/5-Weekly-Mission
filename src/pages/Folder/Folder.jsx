import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import SearchModal from "../../components/SearchBar/SearchBar";
import { getFolder, getFolderList, getUser } from "../../api/api";
import FolderButton from "../../components/FolderButton/FolderButton";
import ContentsContainer from "../../components/ContentsContainer";
import Card from "../../components/Card/Card";
import linkIcon from "../../assets/link.svg";
import AddIcon from "../../assets/add.svg";
import PenIcon from "../../assets/pen.svg";
import SharedIcon from "../../assets/share.svg";
import DeleteIcon from "../../assets/Group36.svg";
import * as S from "./Folder.styled";
import UserContext from "../../contexts/UserContext";

function FolderIcon({ image, children }) {
  return (
    <S.FolderModalIcon>
      <img src={image} alt={`${image}`} />
      {children}
    </S.FolderModalIcon>
  );
}

function Folder() {
  const [link, setLink] = useState([]);
  const [linkList, setLinkList] = useState([]);
  const [folderId, setFolderId] = useState("");
  const [folderName, setFolderName] = useState("");
  const [user, setUser] = useState();
  const [linkSelected, setLinkSelected] = useState(false);

  const userId = useContext(UserContext);

  const loadFolder = async (options) => {
    const links = await getFolder(options.userId);
    const linkList = await getFolderList(options);
    setLink(links.data);
    setLinkList(linkList.data);
  };

  const loadUser = async (id) => {
    const user = await getUser(id);
    setUser(user.data[0]);
  };

  const handleMenuClick = (index) => {
    const booleanArr = link.fill(false);
    booleanArr[index] = true;
    setLinkSelected(booleanArr);
  };

  useEffect(() => {
    loadFolder({ folderId, userId });
    loadUser(userId);
  }, [folderId, folderName, userId, linkSelected]);

  return (
    <>
      <Nav user={user} />
      <S.Header>
        <S.HeaderModal>
          <S.LinkIcon src={linkIcon}></S.LinkIcon>
          <S.AddLinkInput placeholder="링크를 추가해보세요." />
          <S.AddButton>추가하기</S.AddButton>
        </S.HeaderModal>
      </S.Header>
      <S.FolderContents>
        <SearchModal />
        <S.FolderMenu>
          <S.FolderButtons>
            <FolderButton
              setFolderId={setFolderId}
              setFolderName={setFolderName}
            />
            {link
              ? link.map((item, index) => (
                  <FolderButton
                    item={item}
                    key={item.id}
                    setFolderId={setFolderId}
                    setFolderName={setFolderName}
                    isSelected={linkSelected[index]}
                    handleMenuClick={handleMenuClick}
                    index={index}
                  />
                ))
              : null}
          </S.FolderButtons>
          <S.AddFolderButton>
            폴더 추가
            <img src={AddIcon} alt="AddIcon" />
          </S.AddFolderButton>
        </S.FolderMenu>
        <S.FolderModalContainer>
          {folderName ? folderName : "전체"}
          {folderId ? (
            <S.FolderModal>
              <FolderIcon image={SharedIcon}>공유</FolderIcon>
              <FolderIcon image={PenIcon}>이름 변경</FolderIcon>
              <FolderIcon image={DeleteIcon}>삭제</FolderIcon>
            </S.FolderModal>
          ) : null}
        </S.FolderModalContainer>
        <ContentsContainer>
          {linkList.length > 0 ? (
            linkList.map((item) => <Card item={item} key={item.id} />)
          ) : (
            <S.EmptyFolder>저장된 링크가 없습니다.</S.EmptyFolder>
          )}
        </ContentsContainer>
      </S.FolderContents>
      <Footer />
    </>
  );
}

export default Folder;

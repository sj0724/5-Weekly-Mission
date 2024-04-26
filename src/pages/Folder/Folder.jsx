import { useContext, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import SearchModal from '../../components/SearchBar/SearchBar';
import ContentsContainer from '../../components/ContentsContainer';
import Card from '../../components/Card/Card';
import linkIcon from '../../assets/link.svg';
import PenIcon from '../../assets/pen.svg';
import SharedIcon from '../../assets/share.svg';
import DeleteIcon from '../../assets/Group36.svg';
import * as S from './Folder.styled';
import UserContext from '../../contexts/UserContext';
import useGetUser from '../../hooks/useGetUser';
import useGetFolder from '../../hooks/useGetFolder';
import useGetFolderList from '../../hooks/useGetFolderList';
import FolderButtonContainer from '../../components/FolderButtonContainer/FolderButtonContainer';

function FolderIcon({ image, children }) {
  return (
    <S.FolderModalIcon>
      <img src={image} alt={`${image}`} />
      {children}
    </S.FolderModalIcon>
  );
}

function Folder() {
  const userId = useContext(UserContext);
  const [folderId, setFolderId] = useState('');
  const [folderName, setFolderName] = useState('');
  const { user } = useGetUser(userId);
  const { linkList } = useGetFolder({ folderId, userId });
  const { link } = useGetFolderList(userId);

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
        <FolderButtonContainer
          link={link}
          setFolderId={setFolderId}
          setFolderName={setFolderName}
        />
        <S.FolderModalContainer>
          {folderName ? folderName : '전체'}
          {folderId && (
            <S.FolderModal>
              <FolderIcon image={SharedIcon}>공유</FolderIcon>
              <FolderIcon image={PenIcon}>이름 변경</FolderIcon>
              <FolderIcon image={DeleteIcon}>삭제</FolderIcon>
            </S.FolderModal>
          )}
        </S.FolderModalContainer>
        <ContentsContainer content={linkList.length}>
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

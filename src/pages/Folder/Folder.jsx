import { useEffect, useState } from 'react';
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
import useGetUser from '../../hooks/useGetUser';
import useGetFolder from '../../hooks/useGetFolder';
import useGetFolderList from '../../hooks/useGetFolderList';
import FolderButtonContainer from '../../components/FolderButtonContainer/FolderButtonContainer';
import { useParams } from 'react-router-dom';
import Modals from '../../components/Modal/Modals/Modals';

function FolderIcon({ image, children, toggleModal, type }) {
  return (
    <S.FolderModalIcon onClick={() => toggleModal(`${type}`)}>
      <img src={image} alt={`${image}`} />
      {children}
    </S.FolderModalIcon>
  );
}

function Folder() {
  const { id } = useParams();
  const [folderId, setFolderId] = useState('');
  const [folderName, setFolderName] = useState('');
  const { user } = useGetUser(id);
  const { linkList } = useGetFolder(folderId, id);
  const { link } = useGetFolderList(id);
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const toggleModal = (type) => {
    if (modal) {
      setModal(false);
      setModalType('');
    }
    setModal(true);
    setModalType(`${type}`);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modal]);

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
          toggleModal={toggleModal}
        />
        <S.FolderModalContainer>
          {folderName ? folderName : '전체'}
          {folderId && (
            <S.FolderModal>
              <FolderIcon
                image={SharedIcon}
                toggleModal={toggleModal}
                type="share"
              >
                공유
              </FolderIcon>
              <FolderIcon image={PenIcon} toggleModal={toggleModal} type="edit">
                이름 변경
              </FolderIcon>
              <FolderIcon
                image={DeleteIcon}
                toggleModal={toggleModal}
                type="delete"
              >
                삭제
              </FolderIcon>
            </S.FolderModal>
          )}
        </S.FolderModalContainer>
        <ContentsContainer content={linkList.length}>
          {linkList.length > 0 ? (
            linkList.map((item) => (
              <Card
                item={item}
                key={item.id}
                toggleModal={toggleModal}
                setModal={setModal}
              />
            ))
          ) : (
            <S.EmptyFolder>저장된 링크가 없습니다.</S.EmptyFolder>
          )}
        </ContentsContainer>
      </S.FolderContents>
      {modal && (
        <Modals
          modalType={modalType}
          setModal={setModal}
          folderName={folderName}
          link={link}
        />
      )}
      <Footer />
    </>
  );
}

export default Folder;

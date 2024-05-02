import { useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import ContentsContainer from '../../components/ContentsContainer';
import Card from '../../components/Card/Card';
import linkIcon from '../../assets/link.svg';
import PenIcon from '../../assets/pen.svg';
import SharedIcon from '../../assets/share.svg';
import DeleteIcon from '../../assets/Group36.svg';
import useGetUser from '../../hooks/useGetUser';
import useGetFolder from '../../hooks/useGetFolder';
import useGetFolderList from '../../hooks/useGetFolderList';
import FolderButtonContainer from '../../components/FolderButtonContainer/FolderButtonContainer';
import { useParams } from 'react-router-dom';
import { useModal } from '../../contexts/ModalContext';
import AddModal from '../../components/Modal/AddModal/AddModal';
import ShareModal from '../../components/Modal/ShareModal/ShareModal';
import EditModal from '../../components/Modal/EditModal/EditModal';
import DeleteModal from '../../components/Modal/DeleteModal/DeleteModal';
import AddfolderModal from '../../components/Modal/AddFolderModal/AddFolderModal';
import ModalPortal from '../../Portal';
import * as S from './Folder.styled';

function FolderIcon({ image, children, onOpen }) {
  return (
    <S.FolderModalIcon onClick={onOpen}>
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
  const [searchKeyword, setSearchKeyWord] = useState('');
  const { linkList, loading } = useGetFolder(folderId, id, searchKeyword);
  const { link } = useGetFolderList(id);
  const obsRef = useRef(null);
  const [toggleInput, setToggleInput] = useState(true);
  const { modalState, openModal, closeModal } = useModal();

  const handleObserver = (entries) => {
    if (entries[0].isIntersecting) {
      setToggleInput(false);
    } else {
      setToggleInput(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);
    if (!loading && obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Nav user={user} />
      <S.Header $view={toggleInput}>
        <S.HeaderModal>
          <S.LinkIcon src={linkIcon}></S.LinkIcon>
          <S.AddLinkInput placeholder="링크를 추가해보세요." />
          <S.AddButton onClick={() => openModal('add')}>추가하기</S.AddButton>
        </S.HeaderModal>
      </S.Header>
      <div ref={obsRef}></div>
      <S.FolderContents>
        <SearchBar setSearchKeyWord={setSearchKeyWord} />
        {searchKeyword && (
          <S.SearchResult>
            <p>{searchKeyword}</p>으로 검색한 결과입니다.
          </S.SearchResult>
        )}
        <FolderButtonContainer
          link={link}
          setFolderId={setFolderId}
          setFolderName={setFolderName}
        />
        <S.FolderModalContainer>
          {folderName ? folderName : '전체'}
          {folderId && (
            <S.FolderModal>
              <FolderIcon image={SharedIcon} onOpen={() => openModal('share')}>
                공유
              </FolderIcon>
              <FolderIcon image={PenIcon} onOpen={() => openModal('edit')}>
                이름 변경
              </FolderIcon>
              <FolderIcon image={DeleteIcon} onOpen={() => openModal('delete')}>
                삭제
              </FolderIcon>
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
        <ModalPortal>
          {modalState.add && (
            <AddModal onClose={() => closeModal('add')} link={link} />
          )}
          {modalState.share && (
            <ShareModal
              onClose={() => closeModal('share')}
              folderName={folderName}
            />
          )}
          {modalState.edit && <EditModal onClose={() => closeModal('edit')} />}
          {modalState.delete && (
            <DeleteModal onClose={() => closeModal('delete')} />
          )}
          {modalState.addFolder && (
            <AddfolderModal onClose={() => closeModal('addFolder')} />
          )}
          {modalState.deleteLink && (
            <DeleteModal onClose={() => closeModal('deleteLink')} />
          )}
        </ModalPortal>
      </S.FolderContents>
      <Footer />
    </>
  );
}

export default Folder;

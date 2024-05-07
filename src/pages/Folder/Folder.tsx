import React, { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ContentsContainer from '../../components/ContentsContainer';
import Card from '../../components/Card/Card';
import linkIcon from '../../assets/link.svg';
import PenIcon from '../../assets/pen.svg';
import SharedIcon from '../../assets/share.svg';
import DeleteIcon from '../../assets/Group36.svg';
import useGetFolder from '../../hooks/useGetFolder';
import useGetFolderList from '../../hooks/useGetFolderList';
import FolderButtonContainer from '../../components/FolderButtonContainer/FolderButtonContainer';
import { useParams } from 'react-router-dom';
import { ContextValue, useModal } from '../../contexts/ModalContext';
import AddModal from '../../components/Modal/AddModal/AddModal';
import ShareModal from '../../components/Modal/ShareModal/ShareModal';
import EditModal from '../../components/Modal/EditModal/EditModal';
import DeleteModal from '../../components/Modal/DeleteModal/DeleteModal';
import AddfolderModal from '../../components/Modal/AddFolderModal/AddFolderModal';
import ModalPortal from '../../Portal';
import * as S from './Folder.styled';
import DeleteLinkModal from 'components/Modal/DeleteLinkModal/DeleteLinkModal';

function FolderIcon({
  image,
  children,
  onOpen,
  state,
}: {
  image: string;
  children: ReactNode;
  onOpen: (modalName: string) => void;
  state: string;
}) {
  return (
    <S.FolderModalIcon onClick={() => onOpen(`${state}`)}>
      <img src={image} alt={`${image}`} />
      {children}
    </S.FolderModalIcon>
  );
}

function Folder() {
  const { id } = useParams() as unknown as { id: number };
  const [folderId, setFolderId] = useState(0);
  const [folderName, setFolderName] = useState('');
  const [searchKeyword, setSearchKeyWord] = useState('');
  const { linkList, loading } = useGetFolder(id, searchKeyword, folderId);
  const { link } = useGetFolderList(id);
  const obsRef = useRef(null);
  const [toggleInput, setToggleInput] = useState(true);
  const { modalState, openModal, closeModal }: ContextValue = useModal();

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setToggleInput(false);
        return;
      } else {
        setToggleInput(true);
        return;
      }
    });
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
          {folderId > 0 && (
            <S.FolderModal>
              <FolderIcon image={SharedIcon} onOpen={openModal} state={'share'}>
                공유
              </FolderIcon>
              <FolderIcon image={PenIcon} onOpen={openModal} state={'edit'}>
                이름 변경
              </FolderIcon>
              <FolderIcon
                image={DeleteIcon}
                onOpen={openModal}
                state={'delete'}
              >
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
          {modalState.add && <AddModal onClose={closeModal} link={link} />}
          {modalState.share && (
            <ShareModal onClose={closeModal} folderName={folderName} />
          )}
          {modalState.edit && <EditModal onClose={closeModal} />}
          {modalState.delete && (
            <DeleteModal onClose={closeModal} folderName={folderName} />
          )}
          {modalState.addFolder && <AddfolderModal onClose={closeModal} />}
          {modalState.deleteLink && <DeleteLinkModal onClose={closeModal} />}
        </ModalPortal>
      </S.FolderContents>
    </>
  );
}

export default Folder;

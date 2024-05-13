import { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import * as S from '../styles/folder.styled';
import SearchBar from '../components/SearchBar/SearchBar';
import ContentsContainer from '../components/ContentsContainer';
import Card from '../components/Card/Card';
import useGetFolder from '../hooks/useGetFolder';
import useGetFolderList from '../hooks/useGetFolderList';
import FolderButtonContainer from '../components/FolderButtonContainer/FolderButtonContainer';
import { ContextValue, useModal } from '../contexts/ModalContext';
import AddModal from '../components/Modal/AddModal/AddModal';
import ShareModal from '../components/Modal/ShareModal/ShareModal';
import EditModal from '../components/Modal/EditModal/EditModal';
import DeleteModal from '../components/Modal/DeleteModal/DeleteModal';
import AddfolderModal from '../components/Modal/AddFolderModal/AddFolderModal';
import DeleteLinkModal from '../components/Modal/DeleteLinkModal/DeleteLinkModal';
import ModalPortal from '../Portal';
import Image from 'next/image';

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
      <Image src={image} alt={`${image}`} width={20} height={20} />
      {children}
    </S.FolderModalIcon>
  );
}

function Folder() {
  const id = 1;
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
  }, [loading]);

  return (
    <>
      <S.Header $view={toggleInput}>
        <S.HeaderModal>
          <S.LinkIcon src="/link.svg"></S.LinkIcon>
          <S.AddLinkInput placeholder="링크를 추가해보세요." />
          <S.AddButton size="sm" onClick={() => openModal('add')}>
            추가하기
          </S.AddButton>
          {modalState.add && (
            <ModalPortal>
              <AddModal onClose={closeModal} link={link} />
            </ModalPortal>
          )}
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
              <FolderIcon image="/share.svg" onOpen={openModal} state={'share'}>
                공유
              </FolderIcon>
              {modalState.share && (
                <ModalPortal>
                  <ShareModal onClose={closeModal} folderName={folderName} />
                </ModalPortal>
              )}
              <FolderIcon image="/pen.svg" onOpen={openModal} state={'edit'}>
                이름 변경
              </FolderIcon>
              {modalState.edit && (
                <ModalPortal>
                  <EditModal onClose={closeModal} />
                </ModalPortal>
              )}
              <FolderIcon
                image="/Group36.svg"
                onOpen={openModal}
                state={'delete'}
              >
                삭제
              </FolderIcon>
              {modalState.delete && (
                <ModalPortal>
                  <DeleteModal onClose={closeModal} folderName={folderName} />
                </ModalPortal>
              )}
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
        {modalState.addFolder && (
          <ModalPortal>
            <AddfolderModal onClose={closeModal} />
          </ModalPortal>
        )}
        {modalState.deleteLink && (
          <ModalPortal>
            <DeleteLinkModal onClose={closeModal} />
          </ModalPortal>
        )}
      </S.FolderContents>
    </>
  );
}

export default Folder;

import { useContext } from 'react';
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
import ModalPortal from '../Portal';
import { UserContext } from '@/contexts/UserContext';
import FolderModals from '@/components/FolderModalContainer/FolderModals';

function Folder() {
  const id = useContext(UserContext);
  const [folderId, setFolderId] = useState('');
  const [folderName, setFolderName] = useState('');
  const [searchKeyword, setSearchKeyWord] = useState('');
  const { linkList, loading } = useGetFolder(id, searchKeyword, folderId);
  const { link } = useGetFolderList(id);
  const obsRef = useRef(null);
  const [toggleInput, setToggleInput] = useState(true);
  const { modalState, openModal }: ContextValue = useModal();

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
      <div ref={obsRef}></div>
      <S.HeaderBody>
        <S.Header $view={toggleInput}>
          <S.HeaderModal>
            <S.LinkIcon src="/link.svg"></S.LinkIcon>
            <S.AddLinkInput placeholder="링크를 추가해보세요." />
            <S.AddButton size="sm" onClick={() => openModal('add')}>
              추가하기
            </S.AddButton>
          </S.HeaderModal>
        </S.Header>
      </S.HeaderBody>
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
          {folderName && <FolderModals id={folderId} name={folderName} />}
        </S.FolderModalContainer>
        <ContentsContainer content={linkList.length}>
          {linkList.length > 0 ? (
            linkList.map((item) => (
              <Card item={item} key={item.id} list={link} />
            ))
          ) : (
            <S.EmptyFolder>저장된 링크가 없습니다.</S.EmptyFolder>
          )}
        </ContentsContainer>
        {modalState.add && (
          <ModalPortal>
            <AddModal link={link} />
          </ModalPortal>
        )}
      </S.FolderContents>
    </>
  );
}

export default Folder;

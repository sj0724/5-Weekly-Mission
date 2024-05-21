import { useContext } from 'react';
import { useEffect, useRef, useState } from 'react';
import * as S from '../../styles/folder.styled';
import SearchBar from '../../components/SearchBar/SearchBar';
import ContentsContainer from '../../components/ContentsContainer';
import Card from '../../components/Card/Card';
import useGetFolder from '../../hooks/useGetFolder';
import useGetFolderList from '../../hooks/useGetFolderList';
import FolderButtonContainer from '../../components/FolderButtonContainer/FolderButtonContainer';
import { useModal } from '../../contexts/ModalContext';
import AddModal from '../../components/Modal/AddModal/AddModal';
import ModalPortal from '../../Portal';
import { UserContext } from '@/contexts/UserContext';
import FolderModals from '@/components/FolderModalContainer/FolderModals';
import { useRouter } from 'next/router';

function Folder() {
  const id = useContext(UserContext);
  const [onSelect, setOnSelect] = useState({
    id: '',
    name: '',
  });
  const [searchKeyword, setSearchKeyWord] = useState('');
  const [url, setUrl] = useState('');
  const [toggleInput, setToggleInput] = useState(true);
  const [wrongFolder, setWrongFolder] = useState(false);
  const router = useRouter();
  const folderId = router.query.folderId as string;
  const { linkList, loading } = useGetFolder(id, searchKeyword, folderId);
  const { link } = useGetFolderList(id, folderId);
  const { modalState, openModal } = useModal();
  const obsRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    for (let i = 0; i < link.length; i++) {
      setWrongFolder(true);
      if (link[i].id == folderId) {
        setOnSelect({ id: folderId, name: link[i].name });
        setWrongFolder(false);
        break;
      }
    }
  }, [link, folderId]);

  if (wrongFolder) {
    return <S.EmptyFolder>존재하지 않는 폴더입니다!</S.EmptyFolder>;
  }

  return (
    <>
      <div ref={obsRef}></div>
      <S.HeaderBody>
        <S.Header $view={toggleInput}>
          <S.HeaderModal>
            <S.LinkIcon src="/link.svg"></S.LinkIcon>
            <S.AddLinkInput placeholder="링크를 추가해보세요." ref={inputRef} />
            <S.AddButton
              size="sm"
              onClick={() => {
                openModal('add');
                if (inputRef.current) {
                  setUrl(inputRef.current.value);
                }
              }}
            >
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
        <FolderButtonContainer link={link} setOnSelect={setOnSelect} />
        <S.FolderModalContainer>
          {onSelect.name}
          <FolderModals
            id={onSelect.id}
            name={onSelect.name}
            setOnSelect={setOnSelect}
          />
        </S.FolderModalContainer>
        <ContentsContainer content={linkList.length}>
          {linkList.length > 0 ? (
            linkList.map((item) => (
              <Card
                item={item}
                key={item.id}
                setUrl={setUrl}
                onSelect={onSelect}
              />
            ))
          ) : (
            <S.EmptyFolder>저장된 링크가 없습니다.</S.EmptyFolder>
          )}
        </ContentsContainer>
        {modalState.add && inputRef.current && (
          <ModalPortal>
            <AddModal link={link} url={url} />
          </ModalPortal>
        )}
      </S.FolderContents>
    </>
  );
}

export default Folder;

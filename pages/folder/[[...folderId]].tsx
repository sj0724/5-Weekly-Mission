import { useEffect, useRef, useState } from 'react';
import * as S from '../../styles/folder.styled';
import ContentsContainer from '../../components/ContentsContainer';
import Card from '../../components/Card/Card';
import useGetFolder, { LinkData } from '../../hooks/useGetFolder';
import useGetFolderList from '../../hooks/useGetFolderList';
import FolderButtonContainer from '../../components/FolderButtonContainer/FolderButtonContainer';
import { useModal } from '../../contexts/ModalContext';
import AddModal from '../../components/Modal/AddModal/AddModal';
import ModalPortal from '../../Portal';
import { useLoadUser } from '@/contexts/UserContext';
import FolderModals from '@/components/FolderModalContainer/FolderModals';
import { useRouter } from 'next/router';
import Image from 'next/image';
import NotFound from '@/components/NotFound/NotFound';
import DeleteLinkModal from '@/components/Modal/DeleteLinkModal/DeleteLinkModal';
import Loading from '@/components/Loading/Loading';
import SearchContent from '@/components/SearchBar/SearchContent';

function Folder() {
  const { user } = useLoadUser();
  const [onSelect, setOnSelect] = useState({
    id: '',
    name: '',
  });
  const [searchKeyword, setSearchKeyWord] = useState('');
  const [url, setUrl] = useState('');
  const [toggleInput, setToggleInput] = useState(true);
  const [wrongFolder, setWrongFolder] = useState(false);
  const [linkId, setLinkId] = useState(0);
  const router = useRouter();
  const folderId = router.query.folderId as string;
  const { linkList, isPending: linkLoading } = useGetFolder(
    user?.id,
    searchKeyword,
    folderId
  );
  const { folderList, isPending: folderLoading } = useGetFolderList(
    user?.id,
    folderId
  );
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
    const access = localStorage.getItem('token');
    if (!access) {
      router.replace('/signin');
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);
    if (!linkLoading && obsRef.current) {
      observer.observe(obsRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [linkLoading, folderId]);

  useEffect(() => {
    for (let i = 0; i < folderList.length; i++) {
      setWrongFolder(true);
      if (folderList[i].id == folderId) {
        setOnSelect({ id: folderId, name: folderList[i].name });
        setWrongFolder(false);
        break;
      }
    }
  }, [folderList, folderId]);

  return (
    <>
      {(folderLoading || linkLoading) && <Loading />}
      <div ref={obsRef}></div>
      <S.HeaderBody>
        <S.Header $view={toggleInput}>
          <S.HeaderModal>
            <S.LinkIcon>
              <Image src="/link.svg" alt="링크 아이콘" width={20} height={20} />
            </S.LinkIcon>
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
        <SearchContent
          searchKeyword={searchKeyword}
          setSearchKeyWord={setSearchKeyWord}
        />
        <FolderButtonContainer link={folderList} />
        {folderId && wrongFolder ? (
          <NotFound />
        ) : (
          <>
            <S.FolderModalContainer>
              <p>{folderId ? onSelect.name : '전체'}</p>
              {folderId && (
                <FolderModals id={onSelect.id} name={onSelect.name} />
              )}
            </S.FolderModalContainer>
            <ContentsContainer content={linkList.length}>
              {linkList.length > 0 ? (
                linkList.map((item: LinkData) => (
                  <Card
                    item={item}
                    key={item.id}
                    setUrl={setUrl}
                    setLinkId={setLinkId}
                  />
                ))
              ) : (
                <S.EmptyFolder>저장된 링크가 없습니다.</S.EmptyFolder>
              )}
            </ContentsContainer>
          </>
        )}
        {modalState.add && inputRef.current && (
          <ModalPortal>
            <AddModal link={folderList} url={url} />
          </ModalPortal>
        )}
        {modalState.deleteLink && (
          <ModalPortal>
            <DeleteLinkModal id={linkId} />
          </ModalPortal>
        )}
      </S.FolderContents>
    </>
  );
}

export default Folder;

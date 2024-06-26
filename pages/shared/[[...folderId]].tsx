import { useEffect, useState } from 'react';
import * as S from '../../styles/shared.styled';
import { getFolderData, getUserData } from '../../api/api';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useGetFolder from '@/hooks/useGetFolder';
import ContentsContainer from '@/components/ContentsContainer';
import Loading from '@/components/Loading/Loading';
import useDebounce from '@/hooks/useDebounce';

function Shared() {
  const [searchKeyword, setSearchKeyWord] = useState('');
  const [owner, setOwner] = useState({
    id: '',
    created_at: new Date(),
    name: '',
    image_source: '',
    email: '',
    auth_id: '',
  });
  const [folderName, setFolderName] = useState('');
  const router = useRouter();
  const folderId = router.query.folderId as string;
  const [userId, setUserId] = useState('');
  const { deBounceValue } = useDebounce(searchKeyword, 500);
  const { linkList, isPending: linkLoading } = useGetFolder(
    owner?.id,
    deBounceValue,
    folderId
  );

  useEffect(() => {
    const loadOwnerFolderData = async () => {
      const folder = await getFolderData(folderId);
      if (folder) {
        setFolderName(folder[0].name);
        setUserId(folder[0].user_id);
      }
    };

    if (folderId) {
      loadOwnerFolderData();
    }
  }, [folderId]);

  useEffect(() => {
    const loadOwnerData = async () => {
      const user = await getUserData(userId);
      if (user) {
        setOwner(user[0]);
      }
    };
    if (userId) {
      loadOwnerData();
    }
  }, [userId]);

  return (
    <>
      {linkLoading && <Loading />}
      <S.OwnerProfile>
        <Image
          src={owner.image_source}
          alt="owner 이미지"
          width={60}
          height={60}
        />
        <S.OwnerName>{owner.name}</S.OwnerName>
        <S.FolderName>{folderName}</S.FolderName>
      </S.OwnerProfile>
      <S.SharedContent>
        <SearchBar
          searchKeyword={searchKeyword}
          setSearchKeyWord={setSearchKeyWord}
        />
        {searchKeyword && (
          <S.SearchResult>
            <p>{searchKeyword}</p>로 검색한 결과입니다.
          </S.SearchResult>
        )}
        <ContentsContainer content={linkList.length}>
          {linkList.length > 0 ? (
            linkList.map((item) => <Card item={item} key={item.id} />)
          ) : (
            <S.EmptyFolder>저장된 링크가 없습니다.</S.EmptyFolder>
          )}
        </ContentsContainer>
      </S.SharedContent>
    </>
  );
}

export default Shared;

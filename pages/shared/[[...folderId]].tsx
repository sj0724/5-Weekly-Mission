import { useContext, useEffect, useState } from 'react';
import * as S from '../../styles/shared.styled';
import { getFolderData, getSampleFolder, getUserData } from '../../api/api';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useGetFolder from '@/hooks/useGetFolder';
import ContentsContainer from '@/components/ContentsContainer';

type FolderName = {
  name: string;
};

type Owner = {
  name: string;
  profileImageSource: string;
};

type Link = {
  id: number;
  created_at: Date;
  url: string;
  title: string;
  description: string;
  image_source: string;
};

interface Links extends Array<Link> {}

interface SampleFolder {
  id: number;
  name: FolderName;
  owner: Owner;
  links: Links;
}

type Folder = {
  folder: SampleFolder;
};

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
  const userId = router.query['userId'] as string;
  const { linkList, loading } = useGetFolder(userId, searchKeyword, folderId);

  useEffect(() => {
    const loadOwnerData = async () => {
      const user = await getUserData(userId);
      if (user) {
        setOwner(user[0]);
      }
      const folderName = await getFolderData(folderId);
      if (folderName) {
        setFolderName(folderName[0].name);
      }
    };
    loadOwnerData();
  }, [userId]);

  return (
    <>
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
        <SearchBar setSearchKeyWord={setSearchKeyWord} />
        {searchKeyword && <p>{searchKeyword}로 검색한 결과입니다.</p>}
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

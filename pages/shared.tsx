import { useEffect, useState } from 'react';
import * as S from '../styles/shared.styled';
import { getSampleFolder } from './api/api';
import Card from '../components/Card/Card';
import SearchBar from '../components/SearchBar/SearchBar';

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
  const [folderInfo, setFolderInfo] = useState<FolderName>({
    name: '',
  });
  const [linkList, setLinkList] = useState<Links>([]);
  const [folderOwner, setFolderOwner] = useState<Owner>({
    profileImageSource: '',
    name: '',
  });

  const infoLoad = async () => {
    const result: Folder = await getSampleFolder();
    const { folder } = result;
    setFolderInfo(folder.name);
    setFolderOwner(folder.owner);
    setLinkList(folder.links);
  };

  useEffect(() => {
    infoLoad();
  }, []);

  return (
    <S.Shared>
      <S.OwnerProfile>
        <S.OwnerProfileImage
          src={folderOwner.profileImageSource}
          alt="ownerImg"
        />
        <S.OwnerName>{folderOwner.name}</S.OwnerName>
        <S.FolderName>{folderInfo.name}</S.FolderName>
      </S.OwnerProfile>
      <S.SharedContent>
        <SearchBar
          setSearchKeyWord={function (
            value: React.SetStateAction<string>
          ): void {
            throw new Error('Function not implemented.');
          }}
        />
        <S.Container>
          {linkList.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </S.Container>
      </S.SharedContent>
    </S.Shared>
  );
}

export default Shared;

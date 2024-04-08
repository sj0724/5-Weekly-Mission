import { useEffect, useState } from "react";
import * as S from "./Shared.styled.";
import { getSampleFolder } from "../../api/api";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import ContentsContainer from "../../components/ContentsContainer";

function Shared() {
  const [folderInfo, setFolderInfo] = useState({});
  const [linkList, setLinkList] = useState([]);
  const [folderOwner, setFolderOwner] = useState({});

  const infoLoad = async () => {
    const result = await getSampleFolder();
    const { folder } = result;
    setFolderInfo(folder);
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
        <SearchBar />
        <ContentsContainer>
          {linkList.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </ContentsContainer>
      </S.SharedContent>
    </S.Shared>
  );
}

export default Shared;

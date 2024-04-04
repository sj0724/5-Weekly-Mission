import { useEffect, useState } from "react";
import "./Shared.css";
import { getSampleFolder } from "../api/api";
import Card from "../components/Card/Card";
import SearchBar from "../components/SearchBar/SearchBar";
import ContentsContainer from "../components/ContentsContainer";

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
    <div className="folder">
      <div className="header">
        <img
          src={folderOwner.profileImageSource}
          alt="ownerImg"
          className="userProfileImage"
        />
        <p className="ownerName">{folderOwner.name}</p>
        <p className="folderName">{folderInfo.name}</p>
      </div>
      <div className="mainContent">
        <SearchBar />
        <ContentsContainer>
          {linkList.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </ContentsContainer>
      </div>
    </div>
  );
}

export default Shared;

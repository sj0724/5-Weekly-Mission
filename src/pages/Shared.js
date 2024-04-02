import { useEffect, useState } from "react";
import "./Shared.css";
import { getFolder } from "../api/api";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

function Shared() {
  const [folderInfo, setFolderInfo] = useState({});
  const [linkList, setLinkList] = useState([]);
  const [folderOwner, setFolderOwner] = useState({});

  const loadInfo = async () => {
    const result = await getFolder();
    const { folder } = result;
    setFolderInfo(folder);
    setFolderOwner(folder.owner);
    setLinkList(folder.links);
  };

  useEffect(() => {
    loadInfo();
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
        <div className="contentContainer">
          {linkList.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shared;

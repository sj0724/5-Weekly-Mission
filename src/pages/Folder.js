import { useEffect, useState } from "react";
import "./Folder.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { getFolder, getUser } from "../api/api";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import UserContext from "../contexts/UserContext";

function Folder() {
  const [profile, setProfile] = useState();
  const [folderInfo, setFolderInfo] = useState({});
  const [linkList, setLinkList] = useState([]);
  const [folderOwner, setFolderOwner] = useState({});

  const loadInfo = async () => {
    const user = await getUser();
    const result = await getFolder();
    const { folder } = result;
    setProfile(user);
    setFolderInfo(folder);
    setFolderOwner(folder.owner);
    setLinkList(folder.links);
  };

  useEffect(() => {
    loadInfo();
  }, []);

  return (
    <UserContext.Provider value={profile}>
      <div className="folder">
        <Nav />
        <div className="header">
          <img src={folderOwner.profileImageSource} alt="ownerImg" />
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
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default Folder;

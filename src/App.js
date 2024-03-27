import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { getFolder, getUser } from "./api/api";
import Card from "./components/Card";
import SearchModal from "./components/SearchModal";

function App() {
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
    <div className="body">
      <Nav user={profile} />
      <div className="header">
        <img src={folderOwner.profileImageSource} alt="ownerImg" />
        <p className="ownerName">{folderOwner.name}</p>
        <p className="folderName">{folderInfo.name}</p>
      </div>
      <div className="mainContent">
        <SearchModal />
        <div className="contentContainer">
          {linkList.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

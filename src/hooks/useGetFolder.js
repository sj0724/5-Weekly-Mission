import { useEffect, useState } from 'react';
import { getFolder, getFolderList } from '../api/api';

function useGetFolder({ folderId, userId }) {
  const [link, setLink] = useState([]);
  const [linkList, setLinkList] = useState([]);

  useEffect(() => {
    const loadFolder = async () => {
      const links = await getFolder(userId);
      const linkList = await getFolderList({ folderId, userId });
      setLink(links.data);
      setLinkList(linkList.data);
    };
    loadFolder();
  }, [folderId, userId]);

  return { link, linkList };
}

export default useGetFolder;

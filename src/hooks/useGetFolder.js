import { useEffect, useState } from 'react';
import { getFolderList } from '../api/api';

function useGetFolder(folderId, id) {
  const [linkList, setLinkList] = useState([]);

  useEffect(() => {
    const loadFolder = async () => {
      const linkList = await getFolderList(folderId, id);
      setLinkList(linkList.data);
    };
    loadFolder();
  }, [folderId, id]);

  return { linkList };
}

export default useGetFolder;

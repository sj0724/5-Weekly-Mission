import { useEffect, useState } from 'react';
import { getFolderList } from '../api/api';

function useGetFolder({ folderId, userId }) {
  const [linkList, setLinkList] = useState([]);

  useEffect(() => {
    const loadFolder = async () => {
      const linkList = await getFolderList({ folderId, userId });
      setLinkList(linkList.data);
    };
    loadFolder();
  }, [folderId, userId]);

  return { linkList };
}

export default useGetFolder;

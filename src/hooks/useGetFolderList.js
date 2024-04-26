import { useEffect, useState } from 'react';
import { getFolder } from '../api/api';

function useGetFolderList(userId) {
  const [link, setLink] = useState([]);

  useEffect(() => {
    const loadFolderList = async () => {
      const links = await getFolder(userId);
      setLink(links.data);
    };
    loadFolderList();
  }, [userId]);

  return {
    link,
  };
}
export default useGetFolderList;

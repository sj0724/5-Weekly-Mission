import { useEffect, useState } from 'react';
import { getFolderList } from '../api/api';

function useGetFolder(folderId, id, searchKeyword) {
  const [linkList, setLinkList] = useState([]);

  const search = (list) => {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
      let result = list[i].url.indexOf(searchKeyword);
      if (result > 0) {
        arr = [...arr, list[i]];
      }
    }
    return arr;
  };

  useEffect(() => {
    const loadFolder = async () => {
      const result = await getFolderList(folderId, id);
      const list = result.data;
      if (searchKeyword) {
        setLinkList(search(list));
      } else {
        setLinkList(list);
      }
    };
    setLinkList([]);
    loadFolder();
  }, [folderId, id, searchKeyword]);

  return { linkList };
}

export default useGetFolder;

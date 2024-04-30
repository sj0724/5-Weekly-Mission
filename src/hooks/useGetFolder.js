import { useEffect, useState } from 'react';
import { getFolderList } from '../api/api';

function useGetFolder(folderId, id, searchKeyword) {
  const [linkList, setLinkList] = useState([]);

  const search = (list) => {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].title) {
        if (list[i].title.includes(searchKeyword)) {
          arr = [...arr, list[i]];
          break;
        }
      }
      if (list[i].description) {
        if (list[i].description.includes(searchKeyword)) {
          arr = [...arr, list[i]];
          break;
        }
      }
      if (list[i].url) {
        if (list[i].url.includes(searchKeyword)) {
          arr = [...arr, list[i]];
        }
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

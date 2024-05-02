import { useEffect, useState } from 'react';
import { getFolderList } from '../api/api';

function useGetFolder(folderId, id, searchKeyword) {
  const [linkList, setLinkList] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = (list) => {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].title) {
        if (list[i].title.includes(searchKeyword)) {
          arr = [...arr, list[i]];
          continue;
        }
      }
      if (list[i].description) {
        if (list[i].description.includes(searchKeyword)) {
          arr = [...arr, list[i]];
          continue;
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
    try {
      setLoading(true);
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
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [folderId, id, searchKeyword]);

  return { linkList, loading };
}

export default useGetFolder;

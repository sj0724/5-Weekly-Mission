import { useEffect, useState } from 'react';
import { getFolderList } from '../api/api';

export type Link = {
  id: number;
  created_at: Date;
  updated_at?: Date;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id?: number;
};

interface Links extends Array<Link> {}

function useGetFolder(id: number, searchKeyword: string, folderId: number) {
  const [linkList, setLinkList] = useState<Links>([]);
  const [loading, setLoading] = useState(false);

  const search = (list: Links) => {
    let arr: Links = [];
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
        const list = await getFolderList(id, folderId);
        if (searchKeyword) {
          const searchList = search(list);
          setLinkList(searchList);
        } else {
          setLinkList(list);
        }
      };
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

import { useEffect, useState } from 'react';
import { getFolderList } from '../api/api';

export type LinkData = {
  id: number;
  created_at: Date;
  updated_at?: Date;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id?: string;
};

export interface Links extends Array<LinkData> {}

function useGetFolder(id: string, searchKeyword: string, folderId: string) {
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
    if (!id) {
      return;
    }
    try {
      setLoading(true);
      const loadFolder = async () => {
        const list = await getFolderList(id, folderId);
        if (searchKeyword) {
          const searchList = search(list);
          setLinkList(searchList);
          setLoading(false);
        } else {
          setLinkList(list);
          setLoading(false);
        }
      };
      loadFolder();
    } catch (error) {
      console.error(error);
    }
  }, [folderId, id, searchKeyword]);

  return { linkList, loading };
}

export default useGetFolder;

import { useEffect, useState } from 'react';
import { getFolder } from '../pages/api/api';

type Like = {
  count: number;
};

export interface Folder {
  id: number;
  created_at: Date;
  name: string;
  user_id: number;
  favorite: boolean;
  link: Like;
}

export interface Folders extends Array<Folder> {}

function useGetFolderList(userId: number) {
  const [link, setLink] = useState<Folders>([]);

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

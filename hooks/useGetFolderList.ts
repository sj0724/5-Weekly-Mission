import { useEffect, useState } from 'react';
import { getFolder } from '../api/api';

type Like = {
  count: number;
};

export interface Folder {
  id: string;
  created_at: Date;
  name: string;
  user_id: number;
  favorite: boolean;
  link: Like;
}

export interface Folders extends Array<Folder> {}

function useGetFolderList(userId: string, folderId?: string) {
  const [link, setLink] = useState<Folders>([]);

  useEffect(() => {
    if (userId) {
      const loadFolderList = async () => {
        const links = await getFolder(userId);
        setLink(links.data);
      };
      loadFolderList();
    }
  }, [userId, folderId]);

  return {
    link,
  };
}
export default useGetFolderList;

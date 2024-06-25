import { useEffect, useState } from 'react';
import { getFolder } from '../api/api';
import { useQuery } from '@tanstack/react-query';

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
  const { data: list, isPending } = useQuery({
    queryKey: ['folder'],
    queryFn: () => getFolder(userId),
    enabled: !!userId,
    staleTime: 60 * 1000 * 10,
  });

  const folderList = list?.data ?? [];

  return {
    folderList,
    isPending,
  };
}
export default useGetFolderList;

import { useEffect, useState } from 'react';
import { getFolderList } from '../api/api';
import { useQuery } from '@tanstack/react-query';

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

function useGetFolder(userId: string, deBounceValue: string, folderId: string) {
  const [linkList, setLinkList] = useState<Links>([]);
  const {
    data: link,
    isPending,
    isSuccess,
  } = useQuery({
    queryKey: ['links', folderId],
    queryFn: ({ queryKey }) => getFolderList(userId, queryKey[1]),
    enabled: !!userId,
    staleTime: 60 * 1000 * 60,
  });

  const linkArr = link ?? [];

  const search = (list: Links) => {
    if (list) {
      const searchLinks = list.filter(
        (link) =>
          link.url?.includes(deBounceValue) ||
          link.title?.includes(deBounceValue) ||
          link.description?.includes(deBounceValue)
      );
      setLinkList([...searchLinks]);
    }
  };

  useEffect(() => {
    if (linkArr && isSuccess) {
      setLinkList(linkArr);
    }
  }, [linkArr, isSuccess]);

  useEffect(() => {
    if (!deBounceValue) {
      setLinkList(linkArr);
      return;
    }
    search(linkArr);
  }, [deBounceValue]);

  return { linkList, isPending };
}

export default useGetFolder;

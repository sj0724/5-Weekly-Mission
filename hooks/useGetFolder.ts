import { useEffect, useState } from 'react';
import { getFolderList, getUserLinks } from '../api/api';
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

function useGetFolder(deBounceValue: string, folderId: string) {
  const [linkList, setLinkList] = useState<Links>([]);
  const {
    data: link,
    isPending: singleFolderLoading,
    isSuccess: singleFolderSuccess,
  } = useQuery({
    queryKey: ['links', folderId],
    queryFn: ({ queryKey }) => getFolderList(queryKey[1]),
    enabled: !!folderId,
    staleTime: 60 * 1000 * 60,
  });

  const {
    data: allLink,
    isPending: allFolderLoading,
    isSuccess: allFolderSuccess,
  } = useQuery({
    queryKey: ['links'],
    queryFn: () => getUserLinks(),
    staleTime: 60 * 1000 * 60,
  });

  const linkArr = link?.data ?? [];

  const allLinkArr = allLink?.data ?? [];

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
    if (!folderId) {
      if (allLinkArr && allFolderSuccess) {
        setLinkList(allLinkArr);
      }
    }
  }, [allLinkArr, allFolderSuccess, folderId]);

  useEffect(() => {
    if (folderId) {
      if (linkArr && singleFolderSuccess) {
        setLinkList(linkArr);
      }
    }
  }, [linkArr, singleFolderSuccess, folderId]);

  useEffect(() => {
    if (!deBounceValue) {
      setLinkList(folderId ? linkArr : allLinkArr);
    } else {
      search(linkList);
    }
  }, [deBounceValue]);

  return { linkList, allFolderLoading, singleFolderLoading };
}

export default useGetFolder;

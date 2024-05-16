import { FormEvent, useEffect, useState } from 'react';
import * as S from './AddModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import { Folder, Folders } from '../../../hooks/useGetFolderList';
import { Button } from '../../Button/Button';
import Image from 'next/image';
import { postLink } from '@/pages/api/api';
import { useRouter } from 'next/router';

function FolderButton({
  item,
  $isSelected,
  index,
  handleMenuClick,
  folderId,
}: {
  item: Folder;
  $isSelected: string;
  index: number;
  handleMenuClick: (index: number, folderId: number) => void;
  folderId: number;
}) {
  return (
    <S.FolderButton
      $isSelected={$isSelected}
      onClick={() => {
        handleMenuClick(index, folderId);
      }}
    >
      <S.FolderInfo>
        <h2>{item.name}</h2>
        <p>{item.link.count}개의 링크</p>
      </S.FolderInfo>
      {$isSelected === 'select' && (
        <Image src="/check.svg" alt="체크 아이콘" width={15} height={15} />
      )}
    </S.FolderButton>
  );
}

function AddModal({ link, url }: { link: Folders; url: string }) {
  const [folderSelected, setFolderSelected] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState(0);
  const router = useRouter();

  const handleMenuClick = (index: number, folderId: number) => {
    const booleanArr: string[] = new Array(link.length).fill('none');
    booleanArr[index] = 'select';
    setFolderSelected(booleanArr);
    setSelectedId(folderId);
    console.log(url);
  };

  const addLink = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await postLink(selectedId, url);
    router.reload();
  };

  return (
    <BaseModal state={'add'}>
      <S.Header>
        <S.Title>폴더에 추가</S.Title>
      </S.Header>
      <S.FolderContainer>
        {link.map((item, index) => (
          <FolderButton
            key={item.id}
            item={item}
            $isSelected={folderSelected[index]}
            index={index}
            handleMenuClick={handleMenuClick}
            folderId={item.id}
          />
        ))}
      </S.FolderContainer>
      <S.InputForm onSubmit={addLink}>
        <Button size="md" type="submit">
          추가하기
        </Button>
      </S.InputForm>
    </BaseModal>
  );
}

export default AddModal;

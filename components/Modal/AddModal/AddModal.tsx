import { useState } from 'react';
import * as S from './AddModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import { Folder, Folders } from '../../../hooks/useGetFolderList';
import { Button } from '../../Button/Button';
import Image from 'next/image';

function FolderButton({ item }: { item: Folder }) {
  const [check, setCheck] = useState(false);

  return (
    <S.FolderButton $check={check} onClick={() => setCheck(!check)}>
      <S.FolderInfo>
        <h2>{item.name}</h2>
        <p>{item.link.count}개의 링크</p>
      </S.FolderInfo>
      {check && (
        <Image src="/check.svg" alt="체크 아이콘" width={20} height={20} />
      )}
    </S.FolderButton>
  );
}

function AddModal({
  link,
  onClose,
}: {
  link: Folders;
  onClose: (modalName: string) => void;
}) {
  return (
    <BaseModal onClose={onClose} state={'add'}>
      <S.Header>
        <p>폴더에 추가</p>
        <span>폴더명</span>
      </S.Header>
      <S.FolderContainer>
        {link.map((item) => (
          <FolderButton key={item.id} item={item} />
        ))}
      </S.FolderContainer>
      <Button size="md">추가하기</Button>
    </BaseModal>
  );
}

export default AddModal;

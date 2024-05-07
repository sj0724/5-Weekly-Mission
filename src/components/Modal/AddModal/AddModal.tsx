import React from 'react';
import * as S from './AddModal.styled';
import checkIcon from '../../../assets/check.svg';
import { useState } from 'react';
import BaseModal from '../BaseModal/BaseModal';
import { Folder, Folders } from '../../../hooks/useGetFolderList';

function FolderButton({ item }: { item: Folder }) {
  const [check, setCheck] = useState(false);

  return (
    <S.FolderButton $check={check} onClick={() => setCheck(!check)}>
      <S.FolderInfo>
        <h2>{item.name}</h2>
        <p>{item.link.count}개의 링크</p>
      </S.FolderInfo>
      {check && <img src={checkIcon} alt="체크 아이콘" />}
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
      <S.AddButton>추가하기</S.AddButton>
    </BaseModal>
  );
}

export default AddModal;

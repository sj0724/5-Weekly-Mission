import React from 'react';
import * as S from './DeleteModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import { deleteFolder } from '@/pages/api/api';
import { useRouter } from 'next/router';

function DeleteModal({
  folderName,
  folderId,
}: {
  folderName: string;
  folderId: number;
}) {
  const router = useRouter();

  const isDeleteModal = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await deleteFolder(folderId);
    router.reload();
  };

  return (
    <BaseModal state={'delete'}>
      <S.Title>폴더 삭제</S.Title>
      <S.Name>{folderName}</S.Name>
      <S.ModalButton size="md" onClick={isDeleteModal}>
        삭제하기
      </S.ModalButton>
    </BaseModal>
  );
}

export default DeleteModal;

import React from 'react';
import * as S from '../DeleteModal/DeleteModal.styled';
import BaseModal from '../BaseModal/BaseModal';

function DeleteLinkModal({
  onClose,
}: {
  onClose: (modalName: string) => void;
}) {
  return (
    <BaseModal onClose={onClose} state={'deleteLink'}>
      <p>링크 삭제</p>
      <S.ModalButton onClick={(e) => e.preventDefault()}>
        삭제하기
      </S.ModalButton>
    </BaseModal>
  );
}

export default DeleteLinkModal;

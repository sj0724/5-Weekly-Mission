import React from 'react';
import * as S from '../DeleteModal/DeleteModal.styled';
import BaseModal from '../BaseModal/BaseModal';

function DeleteLinkModal() {
  return (
    <BaseModal state={'deleteLink'}>
      <S.Title>링크 삭제</S.Title>
      <S.ModalButton size="md" onClick={(e) => e.preventDefault()}>
        삭제하기
      </S.ModalButton>
    </BaseModal>
  );
}

export default DeleteLinkModal;

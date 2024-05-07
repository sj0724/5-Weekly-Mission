import React from 'react';
import * as S from '../EditModal/EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';

function AddFolderModal({ onClose }: { onClose: (modalName: string) => void }) {
  return (
    <BaseModal onClose={onClose} state={'addFolder'}>
      <p>폴더 추가</p>
      <S.ModalForm>
        <S.ModalInput placeholder="내용 입력" type="text" />
        <S.ModalButton onClick={(e) => e.preventDefault()}>
          추가하기
        </S.ModalButton>
      </S.ModalForm>
    </BaseModal>
  );
}

export default AddFolderModal;

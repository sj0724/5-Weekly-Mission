import React, { useState } from 'react';
import * as S from './EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';

function EditModal({ onClose }: { onClose: (modalName: string) => void }) {
  const [error, setError] = useState(false);

  return (
    <BaseModal onClose={onClose} state={'edit'}>
      <p>폴더이름 변경</p>
      <S.ModalForm>
        <S.ModalInput placeholder="내용 입력" type="text" $error={error} />
        <S.ModalButton onClick={(e) => e.preventDefault()}>
          변경하기
        </S.ModalButton>
      </S.ModalForm>
    </BaseModal>
  );
}

export default EditModal;

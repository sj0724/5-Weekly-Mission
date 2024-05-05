import React from 'react';
import * as S from './BaseModal.styled';
import closeIcon from '../../../assets/close.svg';

function BaseModal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: (modalName: string) => void;
}) {
  return (
    <S.Background>
      <S.Body>
        {children}
        <S.CloseIcon src={closeIcon} alt="닫기버튼" onClick={() => onClose} />
      </S.Body>
    </S.Background>
  );
}

export default BaseModal;

import React from 'react';
import * as S from './BaseModal.styled';

function BaseModal({
  children,
  onClose,
  state,
}: {
  children: React.ReactNode;
  onClose: (modalName: string) => void;
  state: string;
}) {
  return (
    <S.Background>
      <S.Body>
        {children}
        <S.CloseIcon
          src="/close.svg"
          alt="닫기버튼"
          onClick={() => onClose(`${state}`)}
        />
      </S.Body>
    </S.Background>
  );
}

export default BaseModal;

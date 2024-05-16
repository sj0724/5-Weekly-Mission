import React from 'react';
import * as S from './BaseModal.styled';
import { useModal } from '@/contexts/ModalContext';

function BaseModal({
  children,
  state,
}: {
  children: React.ReactNode;
  state: string;
}) {
  const { closeModal } = useModal();

  return (
    <S.Background>
      <S.Body>
        {children}
        <S.CloseIcon
          src="/close.svg"
          alt="닫기버튼"
          onClick={() => closeModal(`${state}`)}
        />
      </S.Body>
    </S.Background>
  );
}

export default BaseModal;

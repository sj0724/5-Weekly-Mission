import React from 'react';
import { useModal } from '../../contexts/ModalContext';
import * as S from './KebabMenu.styled';

function KebabMenu({
  menuRef,
}: {
  menuRef: React.RefObject<HTMLObjectElement>;
}) {
  const { openModal } = useModal();

  return (
    <S.ModalBody ref={menuRef}>
      <S.ModalButton onClick={() => openModal('deleteLink')}>
        삭제하기
      </S.ModalButton>
      <S.ModalButton onClick={() => openModal('add')}>
        폴더에 추가
      </S.ModalButton>
    </S.ModalBody>
  );
}

export default KebabMenu;

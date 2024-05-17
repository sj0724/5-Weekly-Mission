import React, { Dispatch, SetStateAction, useRef } from 'react';
import { useModal } from '@/contexts/ModalContext';
import * as S from './KebabMenu.styled';
import ModalPortal from '@/Portal';
import DeleteLinkModal from '../Modal/DeleteLinkModal/DeleteLinkModal';

function KebabMenu({
  url,
  id,
  setUrl,
}: {
  url: string;
  id: number;
  setUrl: Dispatch<SetStateAction<string>>;
}) {
  const kebabRef = useRef<HTMLObjectElement>(null);
  const { modalState, openModal } = useModal();

  const handleAddKebab = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    openModal('add');
    setUrl(url);
  };

  const handleDeleteKebab = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    openModal('deleteLink');
  };

  return (
    <>
      <S.ModalBody ref={kebabRef}>
        <S.ModalButton onClick={handleDeleteKebab}>삭제하기</S.ModalButton>
        <S.ModalButton onClick={handleAddKebab}>폴더에 추가</S.ModalButton>
      </S.ModalBody>
      {modalState.deleteLink && (
        <ModalPortal>
          <DeleteLinkModal id={id} />
        </ModalPortal>
      )}
    </>
  );
}

export default KebabMenu;

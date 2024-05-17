import React, { Dispatch, SetStateAction, useRef } from 'react';
import { useModal } from '@/contexts/ModalContext';
import * as S from './KebabMenu.styled';
import ModalPortal from '@/Portal';
import DeleteLinkModal from '../Modal/DeleteLinkModal/DeleteLinkModal';

function KebabMenu({
  url,
  setUrl,
}: {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
}) {
  const kebabRef = useRef<HTMLObjectElement>(null);
  const { modalState, openModal } = useModal();

  const addLinkKebab = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    openModal('add');
    setUrl(url);
  };

  return (
    <>
      <S.ModalBody ref={kebabRef}>
        <S.ModalButton
          onClick={(e) => {
            openModal('deleteLink');
            e.preventDefault();
          }}
        >
          삭제하기
        </S.ModalButton>
        <S.ModalButton onClick={addLinkKebab}>폴더에 추가</S.ModalButton>
      </S.ModalBody>
      {modalState.deleteLink && (
        <ModalPortal>
          <DeleteLinkModal />
        </ModalPortal>
      )}
    </>
  );
}

export default KebabMenu;

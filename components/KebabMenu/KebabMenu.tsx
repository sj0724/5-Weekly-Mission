import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { useModal } from '@/contexts/ModalContext';
import * as S from './KebabMenu.styled';
import ModalPortal from '@/Portal';
import AddModal from '../Modal/AddModal/AddModal';
import DeleteLinkModal from '../Modal/DeleteLinkModal/DeleteLinkModal';
import { Folders } from '@/hooks/useGetFolderList';

function KebabMenu({
  kebabView,
  setKebabView,
  list,
}: {
  kebabView: boolean;
  setKebabView: Dispatch<SetStateAction<boolean>>;
  list: Folders;
}) {
  const kebabRef = useRef<HTMLObjectElement>(null);
  const { modalState, openModal } = useModal();

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
        <S.ModalButton
          onClick={(e) => {
            openModal('add');
            e.preventDefault();
          }}
        >
          폴더에 추가
        </S.ModalButton>
      </S.ModalBody>
      {modalState.add && (
        <ModalPortal>
          <AddModal link={list} />
        </ModalPortal>
      )}
      {modalState.deleteLink && (
        <ModalPortal>
          <DeleteLinkModal />
        </ModalPortal>
      )}
    </>
  );
}

export default KebabMenu;

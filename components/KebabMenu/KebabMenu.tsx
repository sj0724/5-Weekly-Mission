import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { useModal } from '@/contexts/ModalContext';
import * as S from './KebabMenu.styled';

function KebabMenu({
  kebabView,
  setKebabView,
}: {
  kebabView: boolean;
  setKebabView: Dispatch<SetStateAction<boolean>>;
}) {
  const kebabRef = useRef<HTMLObjectElement>(null);
  const { openModal } = useModal();

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (
        kebabView &&
        kebabRef.current &&
        !kebabRef.current.contains(e.target)
      ) {
        setKebabView(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [kebabView]);

  return (
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
  );
}

export default KebabMenu;

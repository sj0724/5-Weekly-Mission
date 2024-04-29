import * as S from './KebabMenu.styled';

function KebabMenu({ toggleModal, menuRef }) {
  return (
    <S.ModalBody ref={menuRef}>
      <S.ModalButton onClick={() => toggleModal('deleteLink')}>
        삭제하기
      </S.ModalButton>
      <S.ModalButton onClick={() => toggleModal('add')}>
        폴더에 추가
      </S.ModalButton>
    </S.ModalBody>
  );
}

export default KebabMenu;

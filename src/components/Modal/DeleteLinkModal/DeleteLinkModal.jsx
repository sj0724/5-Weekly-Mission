import * as S from '../DeleteModal/DeleteModal.styled';
import closeIcon from '../../../assets/close.svg';

function DeleteLinkModal({ onClose }) {
  return (
    <S.Background>
      <S.Body>
        <p>링크 삭제</p>
        <S.ModalButton onClick={(e) => e.preventDefault()}>
          삭제하기
        </S.ModalButton>
        <S.CloseIcon src={closeIcon} alt="닫기버튼" onClick={onClose} />
      </S.Body>
    </S.Background>
  );
}

export default DeleteLinkModal;

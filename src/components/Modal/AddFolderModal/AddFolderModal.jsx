import * as S from '../EditModal/EditModal.styled';
import closeIcon from '../../../assets/close.svg';

function AddFolderModal({ setModal }) {
  return (
    <S.Background>
      <S.Body>
        <p>폴더 추가</p>
        <S.ModalForm>
          <S.ModalInput placeholder="내용 입력" type="text" />
          <S.ModalButton onClick={(e) => e.preventDefault()}>
            추가하기
          </S.ModalButton>
        </S.ModalForm>
        <S.CloseIcon
          src={closeIcon}
          alt="닫기버튼"
          onClick={() => setModal(false)}
        />
      </S.Body>
    </S.Background>
  );
}

export default AddFolderModal;

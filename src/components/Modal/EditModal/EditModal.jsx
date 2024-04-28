import * as S from './EditModal.styled';
import closeIcon from '../../../assets/close.svg';

function EditModal({ children, setModal }) {
  return (
    <S.Background>
      <S.Body>
        <p>폴더이름 변경</p>
        <S.ModalForm>
          <S.ModalInput placeholder="내용 입력" type="text" />
          <S.ModalButton onClick={(e) => e.preventDefault()}>
            변경하기
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

export default EditModal;

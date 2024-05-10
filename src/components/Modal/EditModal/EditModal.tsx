import * as S from './EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import useValidate from 'hooks/useValidate';

function EditModal({ onClose }: { onClose: (modalName: string) => void }) {
  const { checkText, textError } = useValidate();

  return (
    <BaseModal onClose={onClose} state={'edit'}>
      <p>폴더이름 변경</p>
      <S.ModalForm>
        <S.ModalInput
          placeholder="내용 입력"
          type="text"
          $error={textError}
          onChange={(e) => checkText(e.target.value)}
        />
        <S.ModalButton onClick={(e) => e.preventDefault()}>
          변경하기
        </S.ModalButton>
      </S.ModalForm>
    </BaseModal>
  );
}

export default EditModal;

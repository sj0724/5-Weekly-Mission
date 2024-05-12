import * as S from '../EditModal/EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import useValidate from '@/hooks/useValidate';
import Input from '@/components/Input/Input';

function AddFolderModal({ onClose }: { onClose: (modalName: string) => void }) {
  const { checkText, textError } = useValidate();

  return (
    <BaseModal onClose={onClose} state={'addFolder'}>
      <S.ModalForm>
        <p>폴더 추가</p>
        <Input
          placeholder="내용 입력"
          type="text"
          error={textError}
          onChange={(e) => checkText(e.target.value)}
          size="sm"
        />
        <S.ModalButton onClick={(e) => e.preventDefault()}>
          추가하기
        </S.ModalButton>
      </S.ModalForm>
    </BaseModal>
  );
}

export default AddFolderModal;

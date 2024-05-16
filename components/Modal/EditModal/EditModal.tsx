import * as S from './EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import useValidate from '@/hooks/useValidate';
import { Button } from '@/components/Button/Button';
import Input from '@/components/Input/Input';

function EditModal() {
  const { checkText, textError } = useValidate();

  return (
    <BaseModal state={'edit'}>
      <S.ModalForm>
        <S.Title>폴더이름 변경</S.Title>
        <Input
          placeholder="내용 입력"
          type="text"
          $error={textError}
          onChange={(e) => checkText(e.target.value)}
          size="sm"
        />
        <S.TextArea>
          {textError && <S.WarningMessage>{textError}</S.WarningMessage>}
        </S.TextArea>
        <Button size="md" onClick={(e) => e.preventDefault()}>
          변경하기
        </Button>
      </S.ModalForm>
    </BaseModal>
  );
}

export default EditModal;

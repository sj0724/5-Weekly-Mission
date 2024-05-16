import * as S from '../EditModal/EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import useValidate from '@/hooks/useValidate';
import Input from '@/components/Input/Input';
import { ChangeEvent, useState } from 'react';
import { postFolder } from '@/pages/api/api';
import { useRouter } from 'next/router';

function AddFolderModal() {
  const { checkText, textError } = useValidate();
  const [title, setTitle] = useState('');
  const router = useRouter();

  const addFolder = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await postFolder(title);
    router.reload();
  };

  return (
    <BaseModal state={'addFolder'}>
      <S.ModalForm onSubmit={addFolder}>
        <S.Title>폴더 추가</S.Title>
        <Input
          placeholder="내용 입력"
          type="text"
          $error={textError}
          onChange={(e) => {
            checkText(e.target.value);
            setTitle(e.target.value);
          }}
          size="sm"
        />
        <S.TextArea>
          {textError && <S.WarningMessage>{textError}</S.WarningMessage>}
        </S.TextArea>
        <S.ModalButton>추가하기</S.ModalButton>
      </S.ModalForm>
    </BaseModal>
  );
}

export default AddFolderModal;

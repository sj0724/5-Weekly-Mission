import * as S from '../EditModal/EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import Input from '@/components/Input/Input';
import { postFolder } from '@/pages/api/api';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

function AddFolderModal() {
  const router = useRouter();
  const { handleSubmit, control } = useForm();

  const addFolder = async (data: any) => {
    await postFolder(data.folder);
    router.reload();
  };

  return (
    <BaseModal state={'addFolder'}>
      <S.ModalForm onSubmit={handleSubmit(addFolder)}>
        <S.Title>폴더 추가</S.Title>
        <Controller
          name="folder"
          control={control}
          rules={{
            required: '내용을 입력해주세요!',
          }}
          render={({ field, fieldState: { error } }) => (
            <Input
              id="folder"
              field={field}
              type="text"
              placeholder="폴더 이름을 입력해주세요!"
              size="sm"
              error={error}
            />
          )}
        />
        <S.ModalButton>추가하기</S.ModalButton>
      </S.ModalForm>
    </BaseModal>
  );
}

export default AddFolderModal;

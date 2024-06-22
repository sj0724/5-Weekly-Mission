import * as S from '../EditModal/EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import Input, { FormValueTypes } from '@/components/Input/Input';
import { postFolder } from '@/api/api';
import { Controller, useForm } from 'react-hook-form';
import { useModal } from '@/contexts/ModalContext';
import { useRouter } from 'next/router';

function AddFolderModal() {
  const { handleSubmit, control } = useForm<FormValueTypes>();
  const { closeModal } = useModal();
  const router = useRouter();

  const addFolder = async (data: FormValueTypes) => {
    if (!data.folder) return;
    const result = await postFolder(data.folder);
    router.push(`/folder/${result[0].id}`);
    closeModal('addFolder');
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
            maxLength: { value: 10, message: '10자 이하로 입력해주세요!' },
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <Input
              value={value}
              onChange={onChange}
              onBlur={onBlur}
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

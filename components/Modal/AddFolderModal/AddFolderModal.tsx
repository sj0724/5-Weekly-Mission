import * as S from '../EditModal/EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import Input from '@/components/Input/Input';
import { postFolder } from '@/pages/api/api';
import { Controller, useForm } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';
import { useModal } from '@/contexts/ModalContext';

function AddFolderModal({
  setOnSelect,
}: {
  setOnSelect: Dispatch<
    SetStateAction<{
      id: number;
      name: string;
    }>
  >;
}) {
  const { handleSubmit, control } = useForm();
  const { closeModal } = useModal();

  const addFolder = async (data: any) => {
    const result = await postFolder(data.folder);
    setOnSelect({ id: 0, name: '' });
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

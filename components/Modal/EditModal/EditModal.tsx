import * as S from './EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import { Button } from '@/components/Button/Button';
import Input, { FormValueTypes } from '@/components/Input/Input';
import { Controller, useForm } from 'react-hook-form';
import { putFolder } from '@/api/api';
import { useRouter } from 'next/router';

function EditModal({ folderId }: { folderId: string }) {
  const { handleSubmit, control } = useForm<FormValueTypes>();
  const router = useRouter();

  const editFolder = async (data: FormValueTypes) => {
    if (!data.edit) return;
    await putFolder(folderId, data.edit);
    router.reload();
  };

  return (
    <BaseModal state={'edit'}>
      <S.ModalForm onSubmit={handleSubmit(editFolder)}>
        <S.Title>폴더이름 변경</S.Title>
        <Controller
          name="edit"
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
              type="text"
              placeholder="폴더 이름을 입력해주세요!"
              size="sm"
              error={error}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Button size="md" onClick={(e) => e.preventDefault()}>
          변경하기
        </Button>
      </S.ModalForm>
    </BaseModal>
  );
}

export default EditModal;

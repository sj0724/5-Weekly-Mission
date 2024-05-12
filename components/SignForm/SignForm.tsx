import { FormEvent, ReactNode } from 'react';
import * as S from './SignForm.styled';
import { Button } from '../Button/Button';

function SignForm({ children }: { children: ReactNode }) {
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <S.SignForm onSubmit={submitForm}>
      {children}
      <Button size={'lg'} type="submit">
        로그인
      </Button>
    </S.SignForm>
  );
}

export default SignForm;

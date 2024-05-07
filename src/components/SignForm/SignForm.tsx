import { FormEvent, ReactNode } from 'react';
import * as S from './SignForm.styled';

function SignForm({ children }: { children: ReactNode }) {
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <S.SignForm onSubmit={submitForm}>
      {children}
      <S.LoginButton type="submit">로그인</S.LoginButton>
    </S.SignForm>
  );
}

export default SignForm;

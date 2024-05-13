import * as S from '@/styles/signin.styled';
import { ChangeEvent, FormEvent, useState } from 'react';
import useValidate from '@/hooks/useValidate';
import Input from '@/components/Input/Input';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';

function SignUp() {
  const [textHidden, setTextHidden] = useState(true);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmValue, setConfirmValue] = useState('');
  const {
    ok,
    emailError,
    passwordError,
    passwordConfirmError,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
  } = useValidate();

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (emailValue && passwordValue && confirmValue) {
      if (ok) {
        console.log('ok');
      } else {
        console.log('no');
      }
    } else {
      alert('값을 입력하지 않았습니다! 다시 확인해주세요!');
    }
  };

  const hiddenText = () => {
    setTextHidden(!textHidden);
  };

  const changeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
    validateEmail(e.target.value);
  };

  const changePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
    validatePassword(e.target.value);
  };

  const changeConfirmInput = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmValue(e.target.value);
    validatePasswordConfirm(e.target.value, passwordValue);
  };

  return (
    <S.SignBody>
      <S.SignContent>
        <S.SignFormBody>
          <S.FormLogo>
            <Link href="/">
              <Image src="/logo.svg" alt="메인로고" width={210} height={38} />
            </Link>
            <S.Question>
              <span>이미 회원이신가요?</span>
              <Link href="/signin" style={{ textDecoration: 'none' }}>
                <p>로그인하기</p>
              </Link>
            </S.Question>
          </S.FormLogo>
          <S.SignForm onSubmit={submitForm}>
            <S.InputModal>
              <label htmlFor="email">이메일</label>
              <Input
                type="text"
                id="email"
                placeholder="이메일"
                onChange={changeEmailInput}
                $error={emailError}
                size="md"
              />
            </S.InputModal>
            <S.TextArea>
              {emailError && <S.WarningMessage>{emailError}</S.WarningMessage>}
            </S.TextArea>
            <S.InputModal>
              <label htmlFor="password">비밀번호</label>
              <Input
                type={textHidden ? 'password' : 'text'}
                id="password"
                placeholder="비밀번호"
                onChange={changePasswordInput}
                $error={passwordError}
                size="md"
              />
              <S.TextHiddenButton $hidden={textHidden} onClick={hiddenText} />
            </S.InputModal>
            <S.TextArea>
              {passwordError && (
                <S.WarningMessage>{passwordError}</S.WarningMessage>
              )}
            </S.TextArea>
            <S.InputModal>
              <label htmlFor="password">비밀번호 확인</label>
              <Input
                type={textHidden ? 'password' : 'text'}
                placeholder="비밀번호"
                id="confirmPassword"
                onChange={changeConfirmInput}
                $error={passwordConfirmError}
                size="md"
              />
              <S.TextHiddenButton $hidden={textHidden} onClick={hiddenText} />
            </S.InputModal>
            <S.TextArea>
              {passwordConfirmError && (
                <S.WarningMessage>{passwordConfirmError}</S.WarningMessage>
              )}
            </S.TextArea>
            <Button size={'lg'} type="submit">
              로그인
            </Button>
          </S.SignForm>
        </S.SignFormBody>
        <S.SnsLogin>
          다른 방식으로 가입하기
          <S.SnsIcons>
            <S.Google href="https://www.google.com/" target="_blank">
              <Image
                src="/googleIcon.png"
                alt="구글아이콘"
                width={22}
                height={22}
              />
            </S.Google>
            <S.Kakao href="https://www.kakaocorp.com/page/" target="_blank">
              <Image
                src="/Kakao.svg"
                alt="카카오아이콘"
                width={26}
                height={24}
              />
            </S.Kakao>
          </S.SnsIcons>
        </S.SnsLogin>
      </S.SignContent>
    </S.SignBody>
  );
}

export default SignUp;

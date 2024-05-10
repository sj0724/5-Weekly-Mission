import mainLogo from '../../assets/logo.svg';
import googleIcon from '../../assets/googleIcon.png';
import kakaoIcon from '../../assets/Kakao.svg';
import * as S from './SignIn.styled';
import { Link } from 'react-router-dom';
import SignForm from 'components/SignForm/SignForm';
import { ChangeEvent, useState } from 'react';
import useValidate from 'hooks/useValidate';
import Input from 'components/Input/Input';

function SignIn() {
  const [textHidden, setTextHidden] = useState(true);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { emailError, passwordError, validateEmail, validatePassword } =
    useValidate();

  const hiddenText = () => {
    setTextHidden(!textHidden);
  };

  const changeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
    validateEmail(emailValue);
  };

  const changePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
    validatePassword(passwordValue);
  };

  return (
    <S.SignBody>
      <S.SignContent>
        <S.SignFormBody>
          <S.FormLogo>
            <Link to="/">
              <img src={mainLogo} alt="메인로고" />
            </Link>
            <S.Question>
              <span>회원이 아니신가요?</span>
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <p>회원 가입하기</p>
              </Link>
            </S.Question>
          </S.FormLogo>
          <SignForm>
            <S.InputModal>
              <label htmlFor="email">이메일</label>
              <Input
                type="text"
                id="email"
                placeholder="이메일"
                onChange={changeEmailInput}
                error={emailError}
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
                error={passwordError}
                size="md"
              />
              <S.TextHiddenButton $hidden={textHidden} onClick={hiddenText} />
            </S.InputModal>
            <S.TextArea>
              {passwordError && (
                <S.WarningMessage>{passwordError}</S.WarningMessage>
              )}
            </S.TextArea>
          </SignForm>
        </S.SignFormBody>
        <S.SnsLogin>
          소셜 로그인
          <S.SnsIcons>
            <S.Google href="https://www.google.com/" target="_blank">
              <img src={googleIcon} alt="구글아이콘" />
            </S.Google>
            <S.Kakao href="https://www.kakaocorp.com/page/" target="_blank">
              <img src={kakaoIcon} alt="카카오아이콘" />
            </S.Kakao>
          </S.SnsIcons>
        </S.SnsLogin>
      </S.SignContent>
    </S.SignBody>
  );
}

export default SignIn;

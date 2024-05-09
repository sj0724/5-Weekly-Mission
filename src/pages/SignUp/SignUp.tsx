import mainLogo from '../../assets/logo.svg';
import googleIcon from '../../assets/googleIcon.png';
import kakaoIcon from '../../assets/Kakao.svg';
import * as S from '../SignIn/SignIn.styled';
import { Link } from 'react-router-dom';
import SignForm from 'components/SignForm/SignForm';
import { ChangeEvent, useState } from 'react';
import useValidate from 'hooks/useValidate';

function SignUp() {
  const [textHidden, setTextHidden] = useState(true);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmValue, setConfirmValue] = useState('');
  const {
    emailError,
    passwordError,
    passwordConfirmError,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
  } = useValidate();

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

  const changeConfirmInput = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmValue(e.target.value);
    validatePasswordConfirm(confirmValue, passwordValue);
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
              <span>이미 회원이신가요?</span>
              <Link to="/signin" style={{ textDecoration: 'none' }}>
                <p>로그인하기</p>
              </Link>
            </S.Question>
          </S.FormLogo>
          <SignForm>
            <S.InputModal>
              <label htmlFor="email">이메일</label>
              <S.Input
                type="text"
                placeholder="이메일"
                id="email"
                autoComplete="off"
                onChange={changeEmailInput}
                onBlur={changeEmailInput}
                error={emailError}
              />
            </S.InputModal>
            <S.TextArea>
              {emailError && <S.WarningMessage>{emailError}</S.WarningMessage>}
            </S.TextArea>
            <S.InputModal>
              <label htmlFor="password">비밀번호</label>
              <S.Input
                type={textHidden ? 'password' : 'text'}
                placeholder="비밀번호"
                id="password"
                autoComplete="off"
                onChange={changePasswordInput}
                onBlur={changePasswordInput}
                error={passwordError}
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
              <S.Input
                type={textHidden ? 'password' : 'text'}
                placeholder="비밀번호"
                id="password"
                autoComplete="off"
                onChange={changeConfirmInput}
                onBlur={changeConfirmInput}
                error={passwordConfirmError}
              />
              <S.TextHiddenButton $hidden={textHidden} onClick={hiddenText} />
            </S.InputModal>
            <S.TextArea>
              {passwordConfirmError && (
                <S.WarningMessage>{passwordConfirmError}</S.WarningMessage>
              )}
            </S.TextArea>
          </SignForm>
        </S.SignFormBody>
        <S.SnsLogin>
          다른 방식으로 가입하기
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

export default SignUp;

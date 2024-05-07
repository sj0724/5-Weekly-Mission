import mainLogo from '../../assets/logo.svg';
import googleIcon from '../../assets/googleIcon.png';
import kakaoIcon from '../../assets/Kakao.svg';
import * as S from './SignUp.styled';
import { Link } from 'react-router-dom';
import SignForm from 'components/SignForm/SignForm';
import { useState } from 'react';

function SignUp() {
  const [textHidden, setTextHidden] = useState(true);

  const hiddenText = () => {
    setTextHidden(!textHidden);
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
              />
              <S.WarningMessage></S.WarningMessage>
            </S.InputModal>
            <S.InputModal>
              <label htmlFor="password">비밀번호</label>
              <S.Input
                type={textHidden ? 'password' : 'text'}
                placeholder="비밀번호"
                id="password"
                autoComplete="off"
              />
              <S.TextHiddenButton $hidden={textHidden} onClick={hiddenText} />
              <S.WarningMessage></S.WarningMessage>
            </S.InputModal>
            <S.InputModal>
              <label htmlFor="password">비밀번호 확인</label>
              <S.Input
                type={textHidden ? 'password' : 'text'}
                placeholder="비밀번호"
                id="password"
                autoComplete="off"
              />
              <S.TextHiddenButton $hidden={textHidden} onClick={hiddenText} />
              <S.WarningMessage></S.WarningMessage>
            </S.InputModal>
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

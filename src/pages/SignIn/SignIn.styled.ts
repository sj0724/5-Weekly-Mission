import styled from 'styled-components';
import EyeOff from '../../assets/eye_off.svg';
import EyeOn from '../../assets/eye-on.svg';

export const SignBody = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background: var(--Background);
  padding: 32px;
`;

export const SignContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const SignFormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

export const FormLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  span {
    font-size: 16px;
    line-height: normal;
  }

  p {
    color: var(--Linkbrary-primary-color, #6d6afe);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
`;

export const InputModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  label {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const Input = styled.input`
  display: flex;
  width: 400px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20);
  background: var(--Section-white);
  font-size: 16px;
  line-height: 24px;

  &:focus {
    border: 1px solid var(--Primary);
  }
`;

export const WarningMessage = styled.p`
  display: none;
  color: var(--ErrorMessage);
  font-size: 1rem;
  margin: 0;
`;

export const TextHiddenButton = styled.span<{ $hidden: boolean }>`
  position: absolute;
  border: none;
  margin: 0;
  padding: 0;
  right: 15px;
  top: 55px;
  height: 16px;
  width: 16px;
  height: 16px;
  background-image: ${(props) =>
    props.$hidden ? `url(${EyeOff})` : `url(${EyeOn})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  width: 400px;
  padding: 16px 20px;
  border: none;
  border-radius: 8px;
  background: var(--Gradient-purpleblue-to-skyblue);
  color: var(--Gray-cta);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SnsLogin = styled.div`
  display: flex;
  width: 400px;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20);
  background: var(--Linkbrary-gray10);
  color: var(--Linkbrary-gray100);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SnsIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  a {
    display: flex;
    height: 42px;
    width: 42px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`;

export const Google = styled.a`
  background-color: var(--Section-white);

  img {
    with: 22px;
    height: 22px;
  }
`;

export const Kakao = styled.a`
  background-color: var(--Kakao-logo-color);
`;

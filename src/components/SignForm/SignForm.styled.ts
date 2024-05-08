import styled from 'styled-components';

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  cursor: pointer;
`;

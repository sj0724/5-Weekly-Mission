import styled from 'styled-components';

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const LoginButton = styled.button`
  width: 40rem;
  margin-top: 1rem;
  padding: 1.6rem 2rem;
  border: none;
  border-radius: 0.8rem;
  background: var(--Gradient-purpleblue-to-skyblue);
  color: var(--Gray-cta);
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

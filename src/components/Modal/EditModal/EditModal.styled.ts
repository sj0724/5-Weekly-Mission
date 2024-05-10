import styled from 'styled-components';

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  p {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const ModalButton = styled.button`
  cursor: pointer;
  width: 28rem;
  border-radius: 0.8rem;
  background: var(--Gradient-purpleblue-to-skyblue);
  display: flex;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: none;
  color: var(--Gray-cta);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

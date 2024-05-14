import styled from 'styled-components';

export const Title = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1.5rem 0;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const TextArea = styled.div`
  height: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

export const WarningMessage = styled.p`
  color: var(--ErrorMessage);
  font-size: 1.4rem;
  margin: 0;
`;

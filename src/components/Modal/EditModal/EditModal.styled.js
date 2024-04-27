import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Body = styled.div`
  position: relative;
  width: 360px;
  height: 239px;
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20);
  background: #fff;
  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ModalInput = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Primary);
  background: #fff;
`;

export const ModalButton = styled.button`
  cursor: pointer;
  width: 280px;
  border-radius: 8px;
  background: var(--Gradient-purpleblue-to-skyblue);
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  color: var(--Gray-cta);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  z-index: 10;
`;

import styled from 'styled-components';

export const Background = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Body = styled.div`
  position: relative;
  width: 360px;
  height: fit-content;
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20);
  background: #fff;
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

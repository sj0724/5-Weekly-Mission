import styled from 'styled-components';

export const ModalBody = styled.div`
  position: absolute;
  right: -50px;
  bottom: 10px;
  width: 100px;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 10;
`;

export const ModalButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 31px;
  padding: 7px 12px;
  color: var(--Linkbrary-gray100);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    color: var(--Primary);
    background: var(--Linkbarary-gray10);
  }
`;

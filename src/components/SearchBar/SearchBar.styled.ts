import styled from 'styled-components';

export const SearchBarInput = styled.input`
  position: relative;
  padding: 15px 32px;
  width: 100%;
  border-radius: 10px;
  background-color: var(--Gray-cta);
  border: none;
`;

export const SearchBarModal = styled.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchForm = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SearchIcon = styled.img`
  position: absolute;
  z-index: 1;
  top: 15px;
  left: 10px;
`;

export const CloseIcon = styled.img`
  position: absolute;
  right: 16px;
  top: 11px;
  width: 24px;
  height: 24px;
`;

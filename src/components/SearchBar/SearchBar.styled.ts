import styled from 'styled-components';

export const SearchBarInput = styled.input`
  position: relative;
  padding: 1.5rem 3.2rem;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--Gray-cta);
  border: none;
`;

export const SearchBarModal = styled.div`
  width: 100%;
  margin: 4rem auto;
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
  top: 1.5rem;
  left: 1rem;
`;

export const CloseIcon = styled.img`
  position: absolute;
  right: 1.6rem;
  top: 1.1rem;
  width: 2.4rem;
  height: 2.4rem;
`;

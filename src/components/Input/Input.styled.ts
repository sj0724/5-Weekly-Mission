import styled from 'styled-components';
import { InputProps } from './Input';

const inputSize = {
  sm: '28',
  md: '40',
  lg: '50',
};

const InputModal = styled.input<InputProps>`
  display: flex;
  width: ${({ size }) => inputSize[size]}rem;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid
    var(${({ error }) => (error ? '--ErrorMessage' : '--Linkbrary-gray20')});
  background: var(--Section-white);
  font-size: 1.6rem;
  line-height: 2.4rem;

  &:focus {
    border: 1px solid var(--Primary);
  }
`;

export default InputModal;

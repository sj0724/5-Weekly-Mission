import styled from 'styled-components';

const InputModal = styled.input<{ $error: string }>`
  display: flex;
  width: 40rem;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid
    var(${(props) => (props.$error ? '--ErrorMessage' : '--Linkbrary-gray20')});
  background: var(--Section-white);
  font-size: 1.6rem;
  line-height: 2.4rem;

  &:focus {
    border: 1px solid var(--Primary);
  }
`;

export default InputModal;

import styled from 'styled-components';

const InputModal = styled.input<{ $error: string }>`
  display: flex;
  width: 400px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid
    var(${(props) => (props.$error ? '--ErrorMessage' : '--Linkbrary-gray20')});
  background: var(--Section-white);
  font-size: 16px;
  line-height: 24px;

  &:focus {
    border: 1px solid var(--Primary);
  }
`;

export default InputModal;

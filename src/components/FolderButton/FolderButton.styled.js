import styled from 'styled-components';

export const FolderName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid var(--Primary);
  background-color: ${(props) => (props.$select ? 'var(--Primary)' : '#fff')};
  cursor: pointer;
  height: 35px;
  font-size: 1rem;
  white-space: nowrap;
  color: ${(props) => (props.$select ? '#fff' : '#000')};

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

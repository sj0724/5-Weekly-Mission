import styled from 'styled-components';

const Container = styled.div`
  gap: 20px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.empty > 0 ? 'repeat(3, 1fr)' : 'none'};
  margin: 0 auto;
  position: relative;

  @media (max-width: 1199px) {
    grid-template-columns: ${(props) => (props.empty > 0 ? '1fr 1fr' : '1fr')};
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

function ContentsContainer({ children, content }) {
  return <Container empty={content}>{children}</Container>;
}

export default ContentsContainer;

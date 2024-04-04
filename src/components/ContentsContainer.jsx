import styled from "styled-components";

const Container = styled.div`
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  position: relative;

  @media (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

function ContentsContainer({ children }) {
  return <Container>{children}</Container>;
}

export default ContentsContainer;

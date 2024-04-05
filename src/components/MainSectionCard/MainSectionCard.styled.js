import styled from "styled-components";

export const SectionCard = styled.div`
  display: grid;
  grid-template:
    "header image"
    "description image"
    /291px 550px;
  row-gap: 10px;
  column-gap: 157px;
  width: 100%;
  height: fit-content;

  @media (max-width: 1199px) {
    grid-template:
      "header image"
      "description image"
      /262px 385px;
    row-gap: 10px;
    column-gap: 51px;
  }

  @media (max-width: 768px) {
    grid-template:
      "header"
      "image"
      "description";
    row-gap: 10px;
    column-gap: 51px;
    justify-content: center;
    padding: 5rem 4rem;
  }
`;

export const TextBox__title = styled.h2`
  width: 272px;
  font-family: Pretendard;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
  margin: 0;
  grid-area: header;
  align-self: flex-end;
`;

export const Description = styled.p`
  width: 291px;
  color: var(--Description);
  font-family: Abel;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin: 0;
  grid-area: description;
  align-self: flex-start;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }
`;

export const SectionImage = styled.img`
  width: 100%;
  grid-area: image;
`;

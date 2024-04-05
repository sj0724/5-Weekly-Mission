import styled from "styled-components";
import { SectionCard } from "../../components/MainSectionCard/MainSectionCard.styled";

export const Main = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main__Header = styled.div`
  background: var(--Background);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 4.5rem;

  @media (max-width: 1199px) {
    padding-top: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 4rem;
  }
`;

export const Header__contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2.5rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

export const Slogan = styled.h1`
  margin: 0;
  text-align: center;
  font-family: Pretendard;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 5rem; /* 125% */
`;

export const Slogan_gradient = styled.span`
  background: var(--Slogan-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Header__image = styled.div`
  padding: 3.1rem 2.5rem 0 2.5rem;
  width: 1200px;
  aspect-ratio: 2;
  overflow: hidden;

  @media (max-width: 1199px) {
    width: 698px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
  border-radius: 25px;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;

export const Main__contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7.5rem 0;
  background-color: var(--Section-white);
  gap: 100px;

  ${SectionCard}:nth-child(even) {
    grid-template:
      "image header"
      "image description"
      /550px 291px;
  }

  @media (max-width: 1199px) {
    padding-top: 5rem;

    ${SectionCard}:nth-child(even) {
      grid-template:
        "image header"
        "image description"
        /385px 262px;
    }
  }

  @media (max-width: 768px) {
    gap: 0;

    ${SectionCard}:nth-child(even) {
      grid-template:
        "header"
        "image"
        "description";
      row-gap: 10px;
      column-gap: 51px;
      justify-content: center;
      padding: 5rem 4rem;
    }
  }
`;

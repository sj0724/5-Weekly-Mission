import styled from 'styled-components';
import { Description } from '../MainSectionCard/MainSectionCard.styled';

export const Footer = styled.div`
  width: 100%;
  margin: 6rem auto 0;
  background: var(--Footer-black);
  padding: 3.2rem 10.4rem 6.4rem;
  color: #cfcfcf;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    padding: 3.2rem 3.2rem 6.4rem;
  }
`;

export const Footer__menu = styled.div`
  position: relative;
  margin-bottom: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterDescrption = styled(Description)`
  width: fit-content;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    position: absolute;
    left: 0;
    bottom: -60px;
  }
`;

export const Footer__menu__modal = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
`;

export const Footer__menu__icon = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

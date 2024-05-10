import styled from 'styled-components';
import { ButtonProps } from './Button';

const buttonSize = {
  xs: '6',
  sm: '8',
  md: '17.5',
  lg: '22',
};

export const Cta = styled.span<ButtonProps>`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--Gradient-purpleblue-to-skyblue);
  color: var(--Gray-cta);
  padding: 16px 20px;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: ${({ size }) => buttonSize[size]}rem;
  position: relative;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    width: fit-content;
  }
`;

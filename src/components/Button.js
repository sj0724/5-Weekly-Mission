import styled from "styled-components";

const SIZE = {
  large: 22,
  medium: 8,
  small: 3,
};

export const Cta = styled.span`
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
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: ${({ size }) => SIZE[size] ?? SIZE["medium"]}rem;
  position: relative;

  &:hover {
    opacity: 0.8;
  }
`;

function Button({ children, size }) {
  return (
    <>
      <Cta size={size}>{children}</Cta>
    </>
  );
}

export default Button;

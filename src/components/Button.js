import styled from "styled-components";

const Cta = styled.span`
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
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 104px;
`;

function Button({ children }) {
  return (
    <>
      <Cta>{children}</Cta>
    </>
  );
}

export default Button;

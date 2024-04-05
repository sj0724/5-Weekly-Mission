import * as S from "./Button.styled";

function Button({ children, size }) {
  return (
    <>
      <S.Cta size={size}>{children}</S.Cta>
    </>
  );
}

export default Button;

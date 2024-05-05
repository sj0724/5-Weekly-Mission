import React, { ReactNode } from 'react';
import * as S from './Button.styled';

function Button({ children, size }: { children: ReactNode; size: number }) {
  return (
    <>
      <S.Cta size={size}>{children}</S.Cta>
    </>
  );
}

export default Button;

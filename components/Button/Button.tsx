import { ButtonHTMLAttributes, useEffect } from 'react';
import * as S from './Button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'xs' | 'sm' | 'md' | 'lg';
  isActive?: boolean;
  buttonActive?: boolean;
}

export function Button({
  children,
  size,
  isActive,
  buttonActive,
}: ButtonProps) {
  return (
    <S.Cta size={size} disabled={buttonActive && isActive}>
      {children}
    </S.Cta>
  );
}

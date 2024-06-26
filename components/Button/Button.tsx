import { ButtonHTMLAttributes, useEffect } from 'react';
import * as S from './Button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'xs' | 'sm' | 'md' | 'lg';
  isActive?: boolean;
}

export function Button({ children, size, isActive }: ButtonProps) {
  return (
    <S.Cta size={size} disabled={isActive} isActive={isActive}>
      {children}
    </S.Cta>
  );
}

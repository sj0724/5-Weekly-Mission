import { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'xs' | 'sm' | 'md' | 'lg';
}

export function Button({ children, size }: ButtonProps) {
  return <S.Cta size={size}>{children}</S.Cta>;
}

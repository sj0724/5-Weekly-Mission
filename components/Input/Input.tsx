import { ChangeEvent, HtmlHTMLAttributes } from 'react';
import InputModal from './Input.styled';

export interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  size: 'sm' | 'md' | 'lg';
}

function Input({ id, placeholder, type, onChange, error, size }: InputProps) {
  return (
    <>
      <InputModal
        type={type}
        autoCapitalize="off"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onChange}
        error={error}
        size={size}
      />
    </>
  );
}

export default Input;

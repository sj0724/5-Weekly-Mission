import { ChangeEvent, HtmlHTMLAttributes } from 'react';
import InputModal from './Input.styled';

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

function Input({ id, placeholder, type, onChange, error }: InputProps) {
  return (
    <>
      <InputModal
        type={type}
        autoCapitalize="off"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onChange}
        $error={error}
      />
    </>
  );
}

export default Input;

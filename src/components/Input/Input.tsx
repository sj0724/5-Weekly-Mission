import { ChangeEvent } from 'react';
import InputModal from './Input.styled';

interface InputProps {
  id: string;
  text: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

function Input({ id, text, type, onChange, error }: InputProps) {
  return (
    <>
      <InputModal
        type={type}
        autoCapitalize="off"
        id={id}
        placeholder={text}
        onChange={onChange}
        onBlur={onChange}
        $error={error}
      />
    </>
  );
}

export default Input;

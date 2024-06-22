import { FieldError } from 'react-hook-form';
import * as S from './AuthInput.styled';
import { useEffect, useState } from 'react';

export interface FormValueTypes {
  id?: string;
  password?: string;
  confirmPassword?: string;
  folder?: string;
}

export interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  size: 'sm' | 'md' | 'lg';
  error: FieldError | undefined;
  value?: string;
  onChange: (...event: any[]) => void;
  onBlur?: () => void;
}

function AuthInput({
  id,
  label,
  placeholder,
  type,
  size,
  error,
  onChange,
  onBlur,
  value,
}: InputProps) {
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (error) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  }, [error]);

  return (
    <S.InputModal size={size} $error={errorMessage}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <S.TextArea>
        {error && <S.WarningMessage>{error.message}</S.WarningMessage>}
      </S.TextArea>
    </S.InputModal>
  );
}

export default AuthInput;

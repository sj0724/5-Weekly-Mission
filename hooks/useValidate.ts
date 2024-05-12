import { useState } from 'react';
import { emailCheck } from '@/util/util';

function useValidate() {
  const [ok, setOk] = useState(true);
  const [textError, setTextError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const checkText = (text: string) => {
    if (text === '') {
      setOk(false);
      setTextError('내용을 다시 입력해주세요');
    } else {
      setOk(false);
      setTextError('');
    }
  };

  const validateEmail = (email: string) => {
    if (email === '') {
      setOk(false);
      setEmailError('이메일을 입력해주세요');
    } else if (!emailCheck(email)) {
      setOk(false);
      setEmailError('올바른 이메일 주소가 아닙니다.');
    } else if (email && emailCheck(email)) {
      setOk(true);
      setEmailError('');
    }
  };

  const validatePassword = (password: string) => {
    if (password === '') {
      setOk(false);
      setPasswordError('비밀번호을 입력해주세요.');
    } else {
      setOk(true);
      setPasswordError('');
    }
  };

  const validatePasswordConfirm = (
    passwordConfirm: string,
    password: string
  ) => {
    if (passwordConfirm === '') {
      setOk(false);
      setPasswordConfirmError('비밀번호를 다시 입력해주세요.');
    } else if (passwordConfirm) {
      if (passwordConfirm && passwordConfirm !== password) {
        setOk(false);
        setPasswordConfirmError('비밀번호가 일치하지 않습니다.');
      } else if (password === passwordConfirm) {
        setOk(true);
        setPasswordConfirmError('');
      }
    }
  };

  return {
    ok,
    textError,
    emailError,
    passwordError,
    passwordConfirmError,
    checkText,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
  };
}

export default useValidate;

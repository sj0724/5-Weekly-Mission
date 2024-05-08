import { useState } from 'react';
import { emailCheck } from 'utils/util';

function useValidate() {
  const [ok, setOk] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const validateEmail = (email: string) => {
    if (email === '') {
      setOk(false);
      setEmailError('이메일을 입력해주세요');
    } else if (!emailCheck(email)) {
      setOk(false);
      setEmailError('올바른 이메일 주소가 아닙니다.');
    } else if (email && emailCheck(email)) {
      setEmailError('');
    }
  };

  const validatePassword = (password: string) => {
    if (password === '') {
      setOk(false);
      setPasswordError('비밀번호을 입력해주세요.');
    } else {
      setPasswordError('');
    }
  };

  const validatePasswordConfirm = (passwordConfirm: string) => {
    if (passwordConfirm === '') {
      setOk(false);
      setPasswordConfirmError('비밀번호를 다시 입력해주세요.');
    } else {
      setPasswordConfirmError('');
    }
  };

  return {
    ok,
    emailError,
    passwordError,
    passwordConfirmError,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
  };
}

export default useValidate;

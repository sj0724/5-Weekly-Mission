export const calculateDate = (date: number) => {
  if (date < 60 * 2) {
    return { time: date, result: 'minute' };
  }
  if (date <= 60 * 59) {
    const minute = Math.floor(date / (60 * 59));
    return { time: minute, result: 'minutes' };
  }
  if (date < 60 * 60 * 24) {
    const day = Math.floor(date / (60 * 60 * 24));
    return { time: day, result: 'hours' };
  }
  if (date < 60 * 60 * 24 * 30) {
    const day = Math.floor(date / (60 * 60 * 24));
    return { time: day, result: 'days' };
  }
  if (date < 60 * 60 * 24 * 30 * 12) {
    const month = Math.floor(date / (60 * 60 * 24 * 30));
    return { time: month, result: 'months' };
  }
  if (date >= 60 * 60 * 24 * 30 * 12) {
    const year = Math.floor(date / (60 * 60 * 24 * 30 * 12));
    return { time: year, result: 'years' };
  }
  return { time: date, result: 'minute' };
};

export const changeDate = (date: Date) => {
  const dateFormate =
    date.getFullYear() +
    '.' +
    (date.getMonth() + 1 < 9
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) +
    '.' +
    (date.getDate() < 9 ? '0' + date.getDate() : date.getDate());

  return dateFormate;
};

const emailPattern =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

export function emailCheck(email: string) {
  return emailPattern.test(email);
}

export function validateInfo({
  email,
  password,
  passwordConfirm,
}: {
  email: string;
  password?: string;
  passwordConfirm?: string;
}) {
  let result = {
    ok: true,
    emailError: '',
    passwordError: '',
    passwordConfirmError: '',
  };
  if (email === '') {
    result.ok = false;
    result.emailError = '이메일을 입력해주세요';
  } else if (!emailCheck(email)) {
    result.ok = false;
    result.emailError = '올바른 이메일 주소가 아닙니다.';
  }
  if (password === '') {
    result.ok = false;
    result.passwordError = '비밀번호을 입력해주세요.';
  }
  if (passwordConfirm === '') {
    result.ok = false;
    result.passwordConfirmError = '비밀번호를 다시 입력해주세요.';
  }
  if (passwordConfirm && passwordConfirm !== password) {
    result.ok = false;
    result.passwordConfirmError = '비밀번호가 일치하지 않습니다.';
  }
  return result;
}

const eyeImg = document.querySelector('.passwordImg');
const passwordInput = document.querySelector('#password');
const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

export let users = [
  {name: 'test', email: 'test@codeit.com', password: 'codeit101'},
  {name: 'admin', email: 'sj07245@naver.com', password: 'sj07245'},
  {name: 'user1', email: '1234@gmail.com', password: '1234'},
]

export function passwordHidden(){ //password 숨김버튼
  eyeImg.classList.toggle('hidden');
  if(passwordInput.type == 'text'){
    passwordInput.type = 'password';
  }else{
    passwordInput.type = 'text';
  }
}

export function emailCheck(email){ //이메일 형식 검사
  return emailPattern.test(email);
};

export function validateInfo(email, password, passwordConfirm){
  let result = {}
  if(email === ''){
    result.ok = false;
    result.emailError = '이메일을 입력해주세요';
  }else if(emailCheck(email) === false){
    result.ok = false;
    result.emailError = '올바른 이메일 주소가 아닙니다.';
  };
  if(password === ''){
    result.ok = false;
    result.passwordError = '비밀번호을 입력해주세요.';
  };
  if(passwordConfirm && passwordConfirm !== password){
    result.ok = false;
    result.passwordConfirmError = '비밀번호가 다릅니다.';
  };
  return result;
};
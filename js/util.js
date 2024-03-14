const eyeImg = document.querySelector('.passwordImg');
export const passwordInput = document.querySelector('#password');
export const emailInput = document.querySelector('#email');
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
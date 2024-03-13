import { passwordHidden, passwordInput, emailInput, emailCheck,data } from "./util.js";

const emailError = document.querySelector('.email-errorMessage');
const passwordError = document.querySelector('.password-errorMessage');
const eyeBtn = document.querySelector('.eyeBtn');
const loginBtn = document.querySelector('.form__loginButton');

let emailValue = '';
let passwordValue = '';

function addError(input, errormessage, message){
  input.classList.add('input--error');
  errormessage.classList.add('on');
  errormessage.textContent = message;
};

function removeError(input, errormessage){
  input.classList.remove('input--error');
  errormessage.classList.remove('on');
  errormessage.textContent = '';
};

function warningEmail(e){ //이메일 input 경고 메세지
  if(e.target.value){
    return emailCheck(e.target.value) 
    ? removeError(emailInput, emailError) 
    : addError(emailInput, emailError, '올바른 이메일 주소가 아닙니다.');
  }else{
    addError(emailInput,  emailError, '이메일을 입력해주세요');
  }
};

function warningPassword(e){ //패스워드 input 경고 메세지
  return e.target.value ? removeError(passwordInput, passwordError) : addError(passwordInput, passwordError, '비밀번호을 입력해주세요');
};

function login(e){ //로그인
  e.preventDefault();
  emailValue = emailInput.value;
  passwordValue = passwordInput.value;
  const dataEmail = data.find((user) => { //이메일이 데이터에 있나 검사
    return user.email === emailValue;
  })
  if(dataEmail){ //이메일이 데이터에 있을때
    if(passwordValue === dataEmail.password){
      location.assign("/folder.html") //folder이동
    }else{ //이메일은 맞는데 비밀번호가 다를때
      addError(passwordInput, passwordError, '비밀번호을 확인해주세요');
    }
  }else{ //이메일이 데이터에 없을때 경고 문구
    addError(emailInput, emailError, '이메일을 확인해주세요');
    addError(passwordInput, passwordError, '비밀번호을 확인해주세요');
  }
};

eyeBtn.addEventListener('click', passwordHidden);
loginBtn.addEventListener('click', login);
emailInput.addEventListener('focusout', warningEmail);
passwordInput.addEventListener('focusout', warningPassword);

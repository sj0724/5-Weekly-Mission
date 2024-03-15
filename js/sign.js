import { passwordHidden, emailCheck, users, validateInfo } from "./util.js";

const formElement = document.querySelector('#form__inputForm');
const emailError = document.querySelector('.email-errorMessage');
const passwordError = document.querySelector('.password-errorMessage');
const eyeBtn = document.querySelector('.eyeBtn');

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
    ? removeError(e.target, emailError) 
    : addError(e.target, emailError, '올바른 이메일 주소가 아닙니다.');
  }else{
    addError(e.target, emailError, '이메일을 입력해주세요');
  }
};

function warningPassword(e){ //패스워드 input 경고 메세지
  return e.target.value ? removeError(e.target, passwordError) : addError(e.target, passwordError, '비밀번호을 입력해주세요');
};

function formHanddle(e){ //로그인
  e.preventDefault();
  const $email = e.target.email;
  const $password = e.target.password;
  const emailValue = $email.value;
  const passwordValue = $password.value;
  const validate = validateInfo(emailValue, passwordValue);
  if(!validate.ok){
    const dataEmail = users.find((user) => user.email === emailValue);
    if(dataEmail){ //이메일이 데이터에 있을때
      if(passwordValue === dataEmail.password){
        location.assign("/folder.html"); //folder이동
      }else{ //이메일은 맞는데 비밀번호가 다를때
        alert('비밀번호를 확인해주세요!');
        addError($password, passwordError, '비밀번호을 확인해주세요');
      }
    }else{ //이메일이 데이터에 없을때 경고 문구
      alert('일치하는 계정이 없습니다!');
      addError($email, emailError, '이메일을 확인해주세요');
      addError($password, passwordError, '비밀번호을 확인해주세요');
    }
  }else{
    alert('아이디와 비밀번호를 확인해주세요!');
    addError($email, emailError, validate.emailError);
    addError($password, passwordError, validate.passwordError);
  };
};

eyeBtn.addEventListener('click', passwordHidden);
formElement.addEventListener('submit', formHanddle);
formElement.email.addEventListener('focusout', warningEmail);
formElement.password.addEventListener('focusout', warningPassword);

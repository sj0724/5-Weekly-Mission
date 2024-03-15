import { passwordHidden, emailCheck, users, validateInfo } from "./util.js";

const eyeBtn = document.querySelectorAll('.eyeBtn');
const formElement = document.querySelector('#form__inputForm');
const emailError = document.querySelector('.email-errorMessage');
const passwordError = document.querySelector('.password-errorMessage');
const passwordConfirmError = document.querySelector('.passwordConfirm-errorMessage');

const numberPattern = /[0-9]/;
const englishPattern = /[a-zA-Z]/;

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
    if(emailCheck(e.target.value)){
      removeError(e.target, emailError);
      const userEmail = users.find((user) => user.email === e.target.value);
      if(e.target.value === userEmail.email){
        addError(e.target, emailError, '이미 사용 중인 이메일입니다.')
      }
    }else{
      addError(e.target, emailError, '올바른 이메일 주소가 아닙니다.');
    }
  }else{
    addError(e.target, emailError, '이메일을 입력해주세요');
  }
};

function warningPassword(e){ //패스워드 input 경고 메세지
  const password = e.target.value
  if(password){
    console.log(1)
    removeError(e.target, passwordError);
    if(password.length > 7 && numberPattern.test(password) && englishPattern.test(password)){
      console.log(2)
      return;
    }else{
      addError(e.target, passwordError, '비밀번호는 영문,숫자 조합 8자 이상 입력해주세요.')
      console.log(3)
    }
  }else{
    addError(e.target, passwordError, '비밀번호을 입력해주세요');
  }
};

function warningPasswordConfirm(e){
  const password = formElement.password.value;
  const passwordConfirm = e.target.value;
  if(passwordConfirm){
    if(password !== passwordConfirm){
      addError(e.target, passwordConfirmError, '비밀번호가 일치하지 않습니다.')
    }else{
      removeError(e.target, passwordConfirmError);
    }
  }else{
    addError(e.target, passwordConfirmError, '비밀번호를 다시 입력해주세요.')
  }
}

function signup(e){
  e.preventDefault();
  const $email = e.target.email;
  const $password = e.target.password;
  const $passwordConfirm = e.target.passwordConfirm
  const emailValue = $email.value;
  const passwordValue = $password.value;
  const passwordConfirmValue = $passwordConfirm.value;
  const validate = validateInfo(emailValue, passwordValue, passwordConfirmValue);
  if(validate.ok){
    // location.assign("/folder.html"); //folder이동
  }else{
    alert('회원가입을 다시 시도해주세요!');
    addError($email, emailError, '아이디를 입력해주세요.');
    addError($password, passwordError, '비밀번호를 입력해주세요.');
    addError($passwordConfirm, passwordConfirmError, '비밀번호를 입력해주세요.');
  }
}


eyeBtn[0].addEventListener('click', passwordHidden);
eyeBtn[1].addEventListener('click', passwordHidden);
formElement.addEventListener('submit', signup);
formElement.email.addEventListener('focusout', warningEmail);
formElement.password.addEventListener('focusout', warningPassword);
formElement.passwordConfirm.addEventListener('focusout', warningPasswordConfirm);

import { passwordHidden, emailCheck, validateInfo, removeError, addError } from "./util.js";

const formElement = document.querySelector('#form__inputForm');
const emailError = document.querySelector('.email-errorMessage');
const passwordError = document.querySelector('.password-errorMessage');
const eyeBtn = document.querySelector('.eyeBtn');

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
  const signInUser = {email: emailValue, password: passwordValue}
  const validate = validateInfo(emailValue, passwordValue);
  if(validate.ok){
    fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(signInUser),
    })
      .then((response) => response.json())
      .then((result)=>{
        console.log(result)
        if(result.data){
          location.assign("/folder.html"); //folder이동
        }else{
          addError($email, emailError, '이메일을 확인해주세요');
          addError($password, passwordError, '비밀번호을 확인해주세요');
        }
      })
      .catch((e)=>{console.log(e);})
  }else{
    if(validate.emailError){
      addError($email, emailError, validate.emailError);
    }
    if(validate.passwordError){
      addError($password, passwordError, validate.passwordError);
    }
  };
};

eyeBtn.addEventListener('click', passwordHidden);
formElement.addEventListener('submit', formHanddle);
formElement.email.addEventListener('focusout', warningEmail);
formElement.password.addEventListener('focusout', warningPassword);

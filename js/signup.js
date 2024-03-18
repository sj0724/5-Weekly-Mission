import { passwordHidden, emailCheck, validateInfo, removeError, addError } from "./util.js";

const eyeBtn = document.querySelectorAll('.eyeBtn');
const formElement = document.querySelector('#form__inputForm');
const emailError = document.querySelector('.email-errorMessage');
const passwordError = document.querySelector('.password-errorMessage');
const passwordConfirmError = document.querySelector('.passwordConfirm-errorMessage');

const numberPattern = /[0-9]/;
const englishPattern = /[a-zA-Z]/;

function warningEmail(e){ //이메일 input 경고 메세지
  const emailValue = e.target.value;
  if(emailValue){
    if(emailCheck(emailValue)){
      fetch('https://bootcamp-api.codeit.kr/api/check-email', {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({email: emailValue})
      })
        .then((response)=>response.json())
        .then((result)=>{
          if(result.data){
            removeError(e.target, emailError);
          }else{
            addError(e.target, emailError, '이미 사용중인 이메일입니다.');
          }
        })
      }else{
      addError(e.target, emailError, '올바른 이메일 주소가 아닙니다.');
    }
  }else{
    addError(e.target, emailError, '이메일을 입력해주세요');
  }
};

function warningPassword(e){ //패스워드 input 경고 메세지
  const password = e.target.value;
  if(password){
    removeError(e.target, passwordError);
    if(password.length > 7 && numberPattern.test(password) && englishPattern.test(password)){
      return;
    }else{
      addError(e.target, passwordError, '비밀번호는 영문,숫자 조합 8자 이상 입력해주세요.');
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
      addError(e.target, passwordConfirmError, '비밀번호가 일치하지 않습니다.');
    }else{
      removeError(e.target, passwordConfirmError);
    }
  }else{
    addError(e.target, passwordConfirmError, '비밀번호를 다시 입력해주세요.');
  }
};

function signup(e){
  e.preventDefault();
  const $email = e.target.email;
  const $password = e.target.password;
  const $passwordConfirm = e.target.passwordConfirm;
  const emailValue = $email.value;
  const passwordValue = $password.value;
  const passwordConfirmValue = $passwordConfirm.value;
  const validate = validateInfo(emailValue, passwordValue, passwordConfirmValue);
  const signUpUser = {email: emailValue, password: passwordValue};
  if(validate.ok){
    fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({email: emailValue})
    })
      .then((response)=>response.json())
      .then((result)=>{
        if(result.data){
          fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(signUpUser)
          })
            .then((response)=>response.json())
            .then((user)=>{
              if(user.data){
                location.assign("/folder.html"); //folder이동
              }else{
                addError($email, emailError, '이메일 형식이 올바르지 않습니다.');
              }
            })
            .catch((e)=>console.log(e))
        }else{
          addError($email, emailError, '이미 사용중인 이메일입니다.');
        }
      })
      .catch((e)=>console.log(e))
  }else{
    if(validate.emailError){
      addError($email, emailError, validate.emailError);
    }
    if(validate.passwordError){
      addError($password, passwordError, validate.passwordError);
    }
    if(validate.passwordConfirmError){
      addError($passwordConfirm, passwordConfirmError, validate.passwordConfirmError);
    }
  }
};

eyeBtn[0].addEventListener('click', passwordHidden);
eyeBtn[1].addEventListener('click', passwordHidden);
formElement.addEventListener('submit', signup);
formElement.email.addEventListener('focusout', warningEmail);
formElement.password.addEventListener('focusout', warningPassword);
formElement.passwordConfirm.addEventListener('focusout', warningPasswordConfirm);

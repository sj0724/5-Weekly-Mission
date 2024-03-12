const inputForm = document.querySelector('#form__inputForm');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-errorMessage');
const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#password-errorMessage');
const eyeImg = document.querySelector('.passwordImg');
const eyeBtn = document.querySelector('.eyeBtn');
const loginBtn = document.querySelector('.form__loginButton');
const error = document.querySelector('.warningMessage');

let data = [
  {name: 'test', email: 'test@codeit.com', password: 'codeit101'},
  {name: 'admin', email: 'sj07245@naver.com', password: 'sj07245'},
  {name: 'user1', email: '1234@gmail.com', password: '1234'}
];

let emailValue = '';
let passwordValue = '';
const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;


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

function passwordHidden(){ //password 숨김버튼
  eyeImg.classList.toggle('hidden');
  if(passwordInput.type == 'text'){
    passwordInput.type = 'password';
  }else{
    passwordInput.type = 'text';
  }
};

function emailCheck(){ //이메일 형식 검사
  emailValue = emailInput.value;
  return emailValue ? removeError(emailInput, emailError) : addError(emailInput, emailError, '올바른 이메일 주소가 아닙니다.');
};

function warningEmail(e){ //이메일 input 경고 메세지
  return e.target.value ?  emailCheck() :  addError(emailInput,  emailError, '이메일을 입력해주세요');
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
inputForm.addEventListener('keypress', (e) => e.code === 'Enter' && login(e)); //폼에 있는 요소에서 enter입력되면 동작
emailInput.addEventListener('focusout', warningEmail);
passwordInput.addEventListener('focusout', warningPassword);

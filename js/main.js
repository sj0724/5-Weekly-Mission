const inputForm = document.querySelector('#form__inputForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const eyeImg = document.querySelector('.passwordImg');
const eyeBtn = document.querySelector('.eyeBtn');
const loginBtn = document.querySelector('.form__loginButton');


let data = [
  {name: 'test', email: 'test@codeit.com', password: 'codeit101'},
  {name: 'admin', email: 'sj07245@naver.com', password: 'sj07245'},
  {name: 'user1', email: '1234@gmail.com', password: '1234'}
]

let emailValue = ''
let passwordValue = ''
const errorEmail = document.createElement('div');
errorEmail.classList = 'warningMessage'
const errorPassword = document.createElement('div');
errorPassword.classList = 'warningMessage'

function passwordHidden(){ //password 숨김버튼
  eyeImg.classList.toggle('hidden')
  if(passwordInput.type == 'text'){
    passwordInput.type = 'password'
  }else{
    passwordInput.type = 'text'
  }
}

function emailCheck(){ //이메일 형식 검사
  emailValue = emailInput.value;
  const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if(emailPattern.test(emailValue) === false){
    errorEmail.textContent = '올바른 이메일 주소가 아닙니다.';
    inputForm.firstElementChild.append(errorEmail)
  }else{
    console.log('correct')
  }
}

function warningEmail(e){ //이메일 input 경고 메세지
  if(e.target.value){ //input에 정보가 있을때
    if(e.target.parentNode.lastElementChild.className === 'warningMessage'){
      e.target.parentNode.lastElementChild.remove();
      emailCheck()
    }else{
      emailCheck()
    }
  }else{ //input에 정보가 없을때
    errorEmail.textContent = `${e.target.alt}를 입력해주세요`;
    e.target.parentNode.append(errorEmail)
  }
}

function warningPassword(e){ //패스워드 input 경고 메세지
  if(e.target.value){ //input에 정보가 있을때
    if(e.target.parentNode.lastElementChild.className === 'warningMessage'){
      e.target.parentNode.lastElementChild.remove();
    }else{
      return;
    }
  }else{ //input에 정보가 없을때
    errorPassword.textContent = `${e.target.alt}를 입력해주세요`;
    e.target.parentNode.append(errorPassword);
  }
}

function login(e){ //로그인
  e.preventDefault();
  emailValue = emailInput.value;
  passwordValue = passwordInput.value;
  const dataEmail = data.find((user) => { //이메일이 데이터에 있나 검사
    return user.email === emailValue
  })
  if(dataEmail){ //이메일이 데이터에 있을때
    if(passwordValue === dataEmail.password){
      window.open("/folder.html") //folder이동
    }else{ //이메일은 맞는데 비밀번호가 다를때
      errorPassword.textContent = '비밀번호를 확인해주세요';
      inputForm.children[1].append(errorPassword);
    }
  }else{ //이메일이 데이터에 없을때 경고 문구
    errorEmail.textContent = '이메일을 확인해주세요';
    inputForm.firstElementChild.append(errorEmail)
    errorPassword.textContent = '비밀번호를 확인해주세요';
    inputForm.children[1].append(errorPassword);
  }
}

eyeBtn.addEventListener('click', passwordHidden)
loginBtn.addEventListener('click', login)
inputForm.addEventListener('keypress', (e) => e.code === 'Enter' && login(e)) //폼에 있는 요소에서 enter입력되면 동작
emailInput.addEventListener('focusout', warningEmail)
passwordInput.addEventListener('focusout', warningPassword)

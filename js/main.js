const eyeBtn = document.querySelector('.eyeBtn');
const passwordInput = document.querySelector('#password');
const passwordImg = document.querySelector('.passwordImg');
const emailInput = document.querySelector('#email');
const warningMessage = document.querySelector('.warningMessage')

function eyeOpen(){
  passwordImg.classList.toggle('open')
  if(passwordInput.type == 'text'){
    passwordInput.type = 'password'
  }else{
    passwordInput.type = 'text'
  }
}

function warning(){
  warningMessage.style.display = 'block'
}

eyeBtn.addEventListener('click', eyeOpen)
emailInput.addEventListener('focusout', warning)

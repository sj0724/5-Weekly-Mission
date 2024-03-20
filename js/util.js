const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

export function passwordHidden(e) {
  //password 숨김버튼
  e.target.classList.toggle("hidden");
  if (e.target.previousElementSibling.type == "text") {
    e.target.previousElementSibling.type = "password";
  } else {
    e.target.previousElementSibling.type = "text";
  }
}

export function emailCheck(email) {
  //이메일 형식 검사
  return emailPattern.test(email);
}

export function validateInfo(email, password, passwordConfirm) {
  let result = {
    ok: true,
    emailError: "",
    passwordError: "",
    passwordConfirmError: "",
  };
  if (email === "") {
    result.ok = false;
    result.emailError = "이메일을 입력해주세요";
  } else if (!emailCheck(email)) {
    result.ok = false;
    result.emailError = "올바른 이메일 주소가 아닙니다.";
  }
  if (password === "") {
    result.ok = false;
    result.passwordError = "비밀번호을 입력해주세요.";
  }
  if (passwordConfirm === "") {
    result.ok = false;
    result.passwordConfirmError = "비밀번호를 다시 입력해주세요.";
  }
  if (passwordConfirm && passwordConfirm !== password) {
    result.ok = false;
    result.passwordConfirmError = "비밀번호가 일치하지 않습니다.";
  }
  return result;
}

export function addError(input, errorMessage, message) {
  input.classList.add("input--error");
  errorMessage.classList.add("on");
  errorMessage.textContent = message;
}

export function removeError(input, errorMessage) {
  input.classList.remove("input--error");
  errorMessage.classList.remove("on");
  errorMessage.textContent = "";
}

import { passwordHidden, emailCheck, users, validateInfo } from "./util.js";

const eyeBtn = document.querySelectorAll('.eyeBtn');

eyeBtn[0].addEventListener('click', passwordHidden);

const form = document.getElementById("form");

const submitForm = (event) => {
  event.preventDefault();
  const name = event.target.querySelector("input[name=name]").value;
  const nameHint = event.target.querySelector(".name-hint");

  const email = event.target.querySelector("input[type=email]").value;
  const emailHint = event.target.querySelector(".email-hint");

  const date = event.target.querySelector("input[name=date]").value;
  const dateHint = event.target.querySelector(".date-hint");

  const number = event.target.querySelector("input[name=number]").value;
  const numberHint = event.target.querySelector(".number-hint");

  const isValidDate = validateDate(date);
  if (!isValidDate) {
    dateHint.classList.add("date-hint--active");
    return;
  }
  if (dateHint.classList.contains("date-hint--active")) {
    dateHint.classList.remove("date-hint--active");
  }
  alert("Дата валидная! Можно отправить форму");

  const isValidName = validateName(name);
  if (!isValidName) {
    nameHint.classList.add("name-hint--active");
    return;
  }
  if (nameHint.classList.contains("name-hint--active")) {
    nameHint.classList.remove("name-hint--active");
  }
  alert("Имя валидное! Можно отправить форму");

  const isValidEmail = validateEmail(email);
  if (!isValidEmail) {
    emailHint.classList.add("email-hint--active");
    return;
  }
  if (emailHint.classList.contains("email-hint--active")) {
    emailHint.classList.remove("email-hint--active");
  }
  alert("Email валидный! Можно отправить форму");

  const isValidNumber = validateNumber(number);
  if (!isValidNumber) {
    numberHint.classList.add("number-hint--active");
    return;
  }
  if (numberHint.classList.contains("number-hint--active")) {
    numberHint.classList.remove("number-hint--active");
  }
  alert("Число валидное! Можно отправить форму");
};

form.addEventListener("submit", submitForm);

// utils
function validateName(name) {
  const re = /^[a-zA-Z ]{2,30}$/;
  return re.test(name);
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateDate(date) {
  const re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  return re.test(date);
}

function validateNumber(number) {
  const re = /^[+]?\d+$/;
  return re.test(number);
}
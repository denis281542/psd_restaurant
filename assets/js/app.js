const form = document.getElementById("form");

const submitForm = (event) => {
  event.preventDefault();
  const email = event.target.querySelector("input[type=email]").value;
  const hint = event.target.querySelector(".email-hint");
  const isValidEmail = validateEmail(email);
  if (!isValidEmail) {
    hint.classList.add("email-hint--active");
    return;
  }
  if (hint.classList.contains("email-hint--active")) {
    hint.classList.remove("email-hint--active");
  }
  alert("Email валидный! Можно отправить форму");
};

form.addEventListener("submit", submitForm);

// utils
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

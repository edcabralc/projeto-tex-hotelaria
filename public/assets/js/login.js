const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const span = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  emailValidate();
  passwordValidate();
  entrar();
});

function setError(index) {
  campos[index].style.border = "2px solid #e63636";
  span[index].style.display = "block";
  span[index].style.color = "#e63636";
}

function removeError(index) {
  campos[index].style.border = "";
  span[index].style.display = "none";
}

function emailValidate() {
  if (
    !emailRegex.test(campos[0].value) &&
    campos[0].value != "admin@gmail.com"
  ) {
    setError(0);
  } else {
    removeError(0);
  }
}

function passwordValidate() {
  if (campos[1].value != "admin" || campos[1].value === "") {
    setError(1);
  } else {
    removeError(1);
  }
}
function entrar() {
  if (campos[0].value === "admin@gmail.com" && campos[1].value === "admin") {
    window.location.href = "./about.html";
  }
}

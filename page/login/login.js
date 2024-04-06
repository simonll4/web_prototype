async function startSplash() {
  const splash = document.getElementById("startsplash");
  const login = document.getElementById("login");

  // Muestra el splash durante 2 segundos
  await sleep(2000);

  // Transición del splash al login
  splash.style.opacity = "0";

  // Espera a que la transición termine
  await sleep(2500);

  // Muestra el login
  splash.style.display = "none";
  login.style.display = "block";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
startSplash();

var loginEmail = document.getElementById("loginemail");
var loginPassword = document.getElementById("loginpassword");
const loginBtn = document.getElementById("loginbtn");

function checkInputs() {
  if (loginEmail.value && loginPassword.value) {
    loginBtn.disabled = false;
  }
}

loginEmail.addEventListener("input", checkInputs);
loginPassword.addEventListener("input", checkInputs);

loginBtn.addEventListener("click", function () {
  event.preventDefault();
  if (
    loginPassword.value.length >= 8 &&
    loginPassword.value.length <= 32 &&
    loginEmail.value.includes("@")
  ) {
    
    window.location.href = "../transfer/transfer.html";
  }
});

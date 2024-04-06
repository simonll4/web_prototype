document.addEventListener("DOMContentLoaded", (event) => {
  const inputs = document.querySelectorAll(".validate-container input");
  const confirmBtn = document.querySelector("#confirmbtn");

  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      // Verifica si todos los campos de entrada tienen un valor
      let allFilled = Array.from(inputs).every((input) => input.value !== "");
      // Activa o desactiva el botón dependiendo de si todos los campos de entrada tienen un valor
      confirmBtn.disabled = !allFilled;

      // Si el campo de entrada actual tiene un valor, mueve el foco al siguiente campo de entrada
      if (input.value !== "" && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });
  });

  confirmBtn.addEventListener("click", () => {
    window.parent.document.dispatchEvent(new CustomEvent("verifiedidentity"));
  });

  // vaciar los input del codigo de verificacion
  window.parent.addEventListener("emptyinputs", function () {
    inputs.forEach((input) => {
      input.value = "";
    });
  });
});

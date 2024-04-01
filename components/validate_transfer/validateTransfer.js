document.addEventListener("DOMContentLoaded", (event) => {
  const inputs = document.querySelectorAll(".validate-container input");
  const confirmBtn = document.querySelector("#confirmbtn");

  // Agrega un controlador de eventos a cada campo de entrada
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      // Verifica si todos los campos de entrada tienen un valor
      let allFilled = Array.from(inputs).every((input) => input.value !== "");
      // Activa o desactiva el botón dependiendo de si todos los campos de entrada tienen un valor
      confirmBtn.disabled = !allFilled;
    });
  });

  confirmBtn.addEventListener("click", () => {
    window.parent.document.dispatchEvent(new CustomEvent("verifiedidentity"));
    console.log("verifiedidentity event dispatched");
  });
});

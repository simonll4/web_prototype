document.addEventListener("DOMContentLoaded", function () {
  window.parent.addEventListener("initst2", () => {
    window.parent.document.dispatchEvent(new CustomEvent("disablednextbtn"));
  });

  var inputAmount = document.querySelector("#transferamount");
  var availableAmount = document.querySelector("#availableamount");
  var transferMsg = document.querySelector("#message");

  // controla el input de monto a transferir
  inputAmount.addEventListener("input", () => {
    if (
      parseFloat(inputAmount.value) <=
        parseFloat(CleaningNumber(availableAmount.innerText)) &&
      transferMsg.value
    ) {
      window.parent.document.dispatchEvent(new CustomEvent("activenextbtn"));
      // refresca los impuestos por la transferencia
      document.getElementById("taxes").innerText =
        "ARS " + calculateTax(parseFloat(inputAmount.value));
    } else {
      window.parent.document.dispatchEvent(new CustomEvent("disablednextbtn"));
    }
  });

  // controla el input de mensaje
  transferMsg.addEventListener("input", () => {
    if (
      parseFloat(inputAmount.value) <=
        parseFloat(CleaningNumber(availableAmount.innerText)) &&
      transferMsg.value
    ) {
      window.parent.document.dispatchEvent(new CustomEvent("activenextbtn"));
    }
  });

  function CleaningNumber(number) {
    //Elimina los puntos
    let sinPuntos = number.replace(/\./g, "");
    //Divide el número en la coma y toma solo la parte antes de la coma
    let antesDeLaComa = sinPuntos.split(",")[0];
    return antesDeLaComa;
  }

  function calculateTax(amount) {
    return amount * 0.01;
  }
});

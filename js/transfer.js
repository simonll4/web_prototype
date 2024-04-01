document.addEventListener("DOMContentLoaded", (event) => {
  btnNext = document.getElementById("nextbtn");

  btnNext.addEventListener("click", () => {
    let selectedRadio = localStorage.getItem("selectedRadio");
    if (selectedRadio === "singletransfer") {
      singleTransferNext();
    }
    if (selectedRadio === "multipletransfer") {
    }
  });

  // indice de las secciones
  let currentStSectionIndex = 0;

  function singleTransferNext() {
    if (currentStSectionIndex < singleTranferSections.length - 1) {
      currentStSectionIndex++;
    }

    if (currentStSectionIndex < singleTranferSections.length - 1) {
      // Oculta sección actual
      singleTranferSections[currentStSectionIndex - 1].style.display = "none";

      // activar progress bar
      if (singleTranferSections[currentStSectionIndex].id === "st1sect") {
        document.querySelector("#progressbarsect").style.display = "block";
      }

      // cambio de estado de la progress bar
      if (
        (singleTranferSections[currentStSectionIndex].id === "st2sect") |
        (singleTranferSections[currentStSectionIndex].id === "st4sect")
      ) {
        //dispara evento para capturarlo en progressBar.js
        window.dispatchEvent(new CustomEvent("nextbuttonclicked"));
      }

      // cambio de titulo
      if (singleTranferSections[currentStSectionIndex].id === "st3sect") {
        document.getElementById("title").innerText = "Verificacion";
      }

      // Oculta boton next
      if (
        singleTranferSections[currentStSectionIndex].id ===
        "validatetransfersect"
      ) {
        btnNext.style.display = "none";
      }

      // Muestra la sección actual
      singleTranferSections[currentStSectionIndex].style.display = "block";
    }
  }

  // activar boton next
  document.addEventListener("iframechange", () => {
    let selectedRadio = localStorage.getItem("selectedRadio");
    if (selectedRadio) {
      btnNext.disabled = false;
    }
  });

  document.addEventListener("verifiedidentity", () => {
    currentStSectionIndex++;
    // ocultar progress bar
    if (
      singleTranferSections[currentStSectionIndex].id === "transferreceipsect"
    ) {
      document.querySelector("#progressbarsect").style.display = "none";
      // Oculta sección actual
      singleTranferSections[currentStSectionIndex - 1].style.display = "none";
      // Muestra la sección actual
      singleTranferSections[currentStSectionIndex].style.display = "block";
    }
  });

  //secciones single transfer
  const singleTranferSections = document.querySelectorAll(
    "section[id^='st'], #transferstartsect, #transferreceipsect, #validatetransfersect"
  );

  document.addEventListener("backbtn", () => {
    if (currentStSectionIndex > 0) {
      currentStSectionIndex--;

      if (
        (singleTranferSections[currentStSectionIndex].id === "st1sect") |
        (singleTranferSections[currentStSectionIndex].id === "st3sect")
      ) {
        window.dispatchEvent(new CustomEvent("backbuttonclicked"));
      }
      if (singleTranferSections[currentStSectionIndex].id === "st4sect") {
        btnNext.style.display = "block";
      }

      if (
        singleTranferSections[currentStSectionIndex].id ===
        "validatetransfersect"
      ) {
        document.querySelector("#progressbarsect").style.display = "block";
      }

      if (
        singleTranferSections[currentStSectionIndex].id === "transferstartsect"
      ) {
        document.querySelector("#progressbarsect").style.display = "none";
      }

      // Oculta sección actual
      singleTranferSections[currentStSectionIndex + 1].style.display = "none";
      // muestra sección anterior
      singleTranferSections[currentStSectionIndex].style.display = "block";
    }
  });
});

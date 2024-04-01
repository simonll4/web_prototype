document.addEventListener("DOMContentLoaded", (event) => {
  btnNext = document.getElementById("nextbtn");

  // activar boton next
  document.addEventListener("iframechange", () => {
    let selectedRadio = localStorage.getItem("selectedRadio");
    if (selectedRadio) {
      btnNext.disabled = false;
    }
  });

  document.addEventListener("verifiedidentity", () => {
    currentSectionIndex++;
    // ocultar progress bar
    if (
      singleTranferSections[currentSectionIndex].id === "transferreceipsect"
    ) {
      document.querySelector("#progressbarsect").style.display = "none";
      // Oculta sección actual
      singleTranferSections[currentSectionIndex - 1].style.display = "none";
      // Muestra la sección actual
      singleTranferSections[currentSectionIndex].style.display = "block";
    }
  });

  //secciones single transfer
  const singleTranferSections = document.querySelectorAll(
    "section[id^='st'], #transferstartsect, #transferreceipsect, #validatetransfersect"
  );
  // indice de las secciones
  let currentSectionIndex = 0;

  function singleTransferNext() {
    if (currentSectionIndex < singleTranferSections.length - 1) {
      currentSectionIndex++;
    }

    if (currentSectionIndex < singleTranferSections.length - 1) {
      // Oculta sección actual
      singleTranferSections[currentSectionIndex - 1].style.display = "none";

      // activar progress bar
      if (singleTranferSections[currentSectionIndex].id === "st1sect") {
        document.querySelector("#progressbarsect").style.display = "block";
      }

      // cambio de estado de la progress bar
      if (
        (singleTranferSections[currentSectionIndex].id === "st2sect") |
        (singleTranferSections[currentSectionIndex].id === "st4sect")
      ) {
        //dispara evento para capturarlo en progressBar.js
        window.dispatchEvent(new CustomEvent("nextbuttonclicked"));
      }

      // cambio de titulo
      if (singleTranferSections[currentSectionIndex].id === "st3sect") {
        document.getElementById("title").innerText = "Verificacion";
      }

      // Oculta boton next
      if (
        singleTranferSections[currentSectionIndex].id === "validatetransfersect"
      ) {
        btnNext.style.display = "none";
      }

      // Muestra la sección actual
      singleTranferSections[currentSectionIndex].style.display = "block";
    }
  }

  btnNext.addEventListener("click", () => {
    let selectedRadio = localStorage.getItem("selectedRadio");
    console.log(selectedRadio);
    if (selectedRadio === "singletransfer") {
      singleTransferNext();
    }
    if (selectedRadio === "multipletransfer") {
    }
  });

  document.addEventListener("backbtn", () => {
    console.log("backbtn");
    if (currentSectionIndex > 0) {
      currentSectionIndex--;

      if (
        (singleTranferSections[currentSectionIndex].id === "st1sect") |
        (singleTranferSections[currentSectionIndex].id === "st3sect")
      ) {
        window.dispatchEvent(new CustomEvent("backbuttonclicked"));
      }
      if (singleTranferSections[currentSectionIndex].id === "st4sect") {
        btnNext.style.display = "block";
      }

      if (
        singleTranferSections[currentSectionIndex].id === "validatetransfersect"
      ) {
        document.querySelector("#progressbarsect").style.display = "block";
      }

      // Oculta sección actual
      singleTranferSections[currentSectionIndex + 1].style.display = "none";
      // muestra sección anterior
      singleTranferSections[currentSectionIndex].style.display = "block";
    }
  });
});

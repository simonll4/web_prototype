document.addEventListener("DOMContentLoaded", (event) => {
  nextBtn = document.getElementById("nextbtn");
  let selectedRadio = null;

  // activar boton next
  document.addEventListener("iframechange", () => {
    selectedRadio = localStorage.getItem("selectedRadio");
    if (selectedRadio) {
      nextBtn.disabled = false;
    }
  });

  nextBtn.addEventListener("click", () => {
    selectedRadio = localStorage.getItem("selectedRadio");
    if (selectedRadio === "singletransfer") {
      singleTransferNext();
    }
    if (selectedRadio === "multipletransfer") {
      multipleTransferNext();
    }
  });

  document.addEventListener("backbtn", () => {
    if (selectedRadio === "singletransfer") {
      singleTransferback();
    }
    if (selectedRadio === "multipletransfer") {
      multipleTransferback();
    }
  });

  /////////////////////////////////////////////////////////////////////////////////
  /////////////// TRANSFERENCIA UNICA /////////////////////////////////////////////
  //secciones single transfer
  const singleTransferSections = document.querySelectorAll(
    "section[id^='st'], #transferstartsect, #transferreceipsect, #validatetransfersect"
  );
  // indice de las secciones
  let currentStSectionIndex = 0;

  function singleTransferNext() {
    if (currentStSectionIndex < singleTransferSections.length - 1) {
      currentStSectionIndex++;
    }

    if (currentStSectionIndex < singleTransferSections.length - 1) {
      // Oculta sección actual
      singleTransferSections[currentStSectionIndex - 1].style.display = "none";

      // activar progress bar
      if (singleTransferSections[currentStSectionIndex].id === "st1sect") {
        document.querySelector("#progressbarsect").style.display = "block";
      }

      // cambio de estado de la progress bar
      if (
        (singleTransferSections[currentStSectionIndex].id === "st2sect") |
        (singleTransferSections[currentStSectionIndex].id === "st4sect")
      ) {
        //dispara evento para capturarlo en progressBar.js
        window.dispatchEvent(new CustomEvent("nextbuttonclicked"));
      }

      // cambio de titulo
      if (singleTransferSections[currentStSectionIndex].id === "st3sect") {
        document.getElementById("title").innerText = "Verificacion";
      }

      // Oculta boton next
      if (
        singleTransferSections[currentStSectionIndex].id ===
        "validatetransfersect"
      ) {
        nextBtn.style.display = "none";
      }

      // Muestra la sección actual
      singleTransferSections[currentStSectionIndex].style.display = "block";
    }
  }

  document.addEventListener("verifiedidentity", () => {
    currentStSectionIndex++;
    // ocultar progress bar
    if (
      singleTransferSections[currentStSectionIndex].id === "transferreceipsect"
    ) {
      document.querySelector("#progressbarsect").style.display = "none";
      // Oculta sección actual
      singleTransferSections[currentStSectionIndex - 1].style.display = "none";
      // Muestra la sección actual
      singleTransferSections[currentStSectionIndex].style.display = "block";
    }
  });

  function singleTransferback() {
    if (currentStSectionIndex > 0) {
      currentStSectionIndex--;

      if (
        (singleTransferSections[currentStSectionIndex].id === "st1sect") |
        (singleTransferSections[currentStSectionIndex].id === "st3sect")
      ) {
        window.dispatchEvent(new CustomEvent("backbuttonclicked"));
      }
      if (singleTransferSections[currentStSectionIndex].id === "st4sect") {
        nextBtn.style.display = "block";
      }

      if (
        singleTransferSections[currentStSectionIndex].id ===
        "validatetransfersect"
      ) {
        document.querySelector("#progressbarsect").style.display = "block";
      }

      if (
        singleTransferSections[currentStSectionIndex].id === "transferstartsect"
      ) {
        document.querySelector("#progressbarsect").style.display = "none";
      }

      // Oculta sección actual
      singleTransferSections[currentStSectionIndex + 1].style.display = "none";
      // muestra sección anterior
      singleTransferSections[currentStSectionIndex].style.display = "block";
    }
  }

  /////////////////////////////////////////////////////////////////////////////////
  /////////////// TRANSFERENCIA MULTIPLE //////////////////////////////////////////
  //secciones multiple transfer
  const multipleTransferSections = document.querySelectorAll(
    "section[id^='mt'], #transferstartsect, #transferreceipsect, #validatetransfersect"
  );
  let currentSectionIndex = 0;

  function multipleTransferNext() {
    if (currentSectionIndex < multipleTransferSections.length - 1) {
      currentSectionIndex++;
    }

    if (currentSectionIndex < multipleTransferSections.length) {
      // Oculta sección actual
      multipleTransferSections[currentSectionIndex - 1].style.display = "none";
      // Muestra la sección actual
      multipleTransferSections[currentSectionIndex].style.display = "block";

      // activar progress bar
      if (multipleTransferSections[currentSectionIndex].id === "mt1sect") {
        document.querySelector("#progressbarsect").style.display = "block";
      }

      // cambio de titulo
      if (multipleTransferSections[currentSectionIndex].id === "mt2sect") {
        document.getElementById("title").innerText = "Verificacion";
      }

      if (
        (multipleTransferSections[currentSectionIndex].id === "mt2sect") |
        (multipleTransferSections[currentSectionIndex].id ===
          "validatetransfersect")
      ) {
        window.parent.dispatchEvent(new CustomEvent("nextbuttonclicked"));
      }

      // Oculta boton next
      if (
        multipleTransferSections[currentSectionIndex].id ===
        "validatetransfersect"
      ) {
        nextBtn.style.display = "none";
      }
    }
  }

  function multipleTransferback() {
    if (currentSectionIndex > 0) {
      currentSectionIndex--;

      if (
        (multipleTransferSections[currentSectionIndex].id === "mt1sect") |
        (multipleTransferSections[currentSectionIndex].id ===
          "mt2sect")
      ) {
        window.dispatchEvent(new CustomEvent("backbuttonclicked"));
      }
      //desactivar progress bar
      if (
        multipleTransferSections[currentSectionIndex].id === "transferstartsect"
      ) {
        document.querySelector("#progressbarsect").style.display = "none";
      }
      // activar boton
      if (multipleTransferSections[currentSectionIndex].id === "mt2sect") {
        nextBtn.style.display = "block";
      }


      // Oculta sección actual
      multipleTransferSections[currentSectionIndex + 1].style.display = "none";

      multipleTransferSections[currentSectionIndex].style.display = "block";
    }
  }
});

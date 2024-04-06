document.addEventListener("DOMContentLoaded", (event) => {
  const nextBtn = document.getElementById("nextbtn");
  const progressBar = document.querySelector("#progressbarsect");
  let selectedRadio = null;
  let currentSectionIndex = 0;

  // activa el nextbtn una vez que esta un radio seleccionado
  document.addEventListener("iframechange", () => {
    selectedRadio = localStorage.getItem("selectedRadio");
    if (selectedRadio) {
      nextBtn.disabled = false;
    }
  });

  // evento click del boton next: de acuerdo al radio seleccionado se activa la funcion
  nextBtn.addEventListener("click", () => {
    selectedRadio = localStorage.getItem("selectedRadio");
    if (selectedRadio === "singletransfer") {
      singleTransferNext();
    }
    if (selectedRadio === "multipletransfer") {
      multipleTransferNext();
    }
  });

  // evento click del boton back: de acuerdo al radio seleccionado se activa la funcion
  document.addEventListener("backbtn", () => {
    selectedRadio = localStorage.getItem("selectedRadio");

    // comprueba si esta en la ultima seccion de la transferencia
    if (transferReceiptSection) {
      transferReceiptSection.style.display = "none";
      transferReceiptSection = null;
      // se activa la seccion validatetransfersect y la progress bar
      document.getElementById("validatetransfersect").style.display = "block";
      progressBar.style.display = "block";
      // si no llama a la funcion correspondiente a la transferencia
    } else {
      if (selectedRadio === "singletransfer") {
        singleTransferback();
      }
      if (selectedRadio === "multipletransfer") {
        multipleTransferback();
      }
    }
  });

  /////////////////////////////////////////////////////////////////////////////////
  /////////////// TRANSFERENCIA UNICA /////////////////////////////////////////////
  const singleTransferSections = document.querySelectorAll(
    "section[id^='st'], #transferstartsect, #validatetransfersect"
  );

  // se encarga de avanzar por las diferentes secciones de la transferencia unica
  function singleTransferNext() {
    document.dispatchEvent(new CustomEvent("disablednextbtn"));

    // para no pasar de largo el indice
    if (currentSectionIndex < singleTransferSections.length - 1) {
      currentSectionIndex++;
    }

    if (currentSectionIndex < singleTransferSections.length) {
      // activar progress bar
      if (singleTransferSections[currentSectionIndex].id === "st1sect") {
        progressBar.style.display = "block";
      }

      if (singleTransferSections[currentSectionIndex].id === "st3sect") {
        document.dispatchEvent(new CustomEvent("activenextbtn"));
      }

      // cambio de estado de la progress bar
      if (
        (singleTransferSections[currentSectionIndex].id === "st2sect") |
        (singleTransferSections[currentSectionIndex].id === "st4sect")
      ) {
        //dispara evento para capturarlo en progressBar.js
        window.dispatchEvent(new CustomEvent("nextbuttonclicked"));
      }

      // cambio de titulo
      if (singleTransferSections[currentSectionIndex].id === "st3sect") {
        document.getElementById("title").innerText = "Verificacion";
      }

      // Oculta boton next
      if (
        singleTransferSections[currentSectionIndex].id ===
        "validatetransfersect"
      ) {
        nextBtn.style.display = "none";
      }

      // Oculta sección actual
      singleTransferSections[currentSectionIndex - 1].style.display = "none";
      // Muestra la sección siguiente
      singleTransferSections[currentSectionIndex].style.display = "block";
    }
  }

  // se encarga de retroceder por las diferentes secciones de la transferencia unica
  function singleTransferback() {
    document.dispatchEvent(new CustomEvent("disablednextbtn"));

    if (currentSectionIndex > 0) {
      //dispara evento para capturarlo en progressBar.js
      if (
        (singleTransferSections[currentSectionIndex - 1].id === "st1sect") |
        (singleTransferSections[currentSectionIndex - 1].id === "st3sect")
      ) {
        window.dispatchEvent(new CustomEvent("backbuttonclicked"));
      }

      if (
        singleTransferSections[currentSectionIndex].id === "st4sect" ||
        singleTransferSections[currentSectionIndex].id === "st1sect"
      ) {
        document.dispatchEvent(new CustomEvent("activenextbtn"));
      }

      //actviar progress bar y nexbtn
      if (
        singleTransferSections[currentSectionIndex].id ===
        "validatetransfersect"
      ) {
        progressBar.style.display = "block";
        nextBtn.style.display = "block";
      }

      // desactivar progress bar
      if (
        singleTransferSections[currentSectionIndex - 1].id ===
        "transferstartsect"
      ) {
        progressBar.style.display = "none";
      }

      // Oculta sección actual
      singleTransferSections[currentSectionIndex].style.display = "none";
      // muestra sección anterior
      singleTransferSections[currentSectionIndex - 1].style.display = "block";
      currentSectionIndex--;
      console.log(currentSectionIndex);
    }
  }

  /////////////////////////////////////////////////////////////////////////////////
  /////////////// TRANSFERENCIA MULTIPLE //////////////////////////////////////////
  const multipleTransferSections = document.querySelectorAll(
    "section[id^='mt'], #transferstartsect,#validatetransfersect"
  );

  // se encarga de avanzar por las diferentes secciones de la transferencia multiple
  function multipleTransferNext() {
    document.dispatchEvent(new CustomEvent("disablednextbtn"));

    // para no pasar de largo el indice
    if (currentSectionIndex < multipleTransferSections.length - 1) {
      currentSectionIndex++;
    }

    if (currentSectionIndex < multipleTransferSections.length) {
      // activar progress bar
      if (multipleTransferSections[currentSectionIndex].id === "mt1sect") {
        progressBar.style.display = "block";
      }

      // cambio de titulo
      if (multipleTransferSections[currentSectionIndex].id === "mt2sect") {
        document.getElementById("title").innerText = "Verificacion";
      }

      // cambio de estado de la progress bar
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

      // Oculta sección actual
      multipleTransferSections[currentSectionIndex - 1].style.display = "none";
      // Muestra la sección actual
      multipleTransferSections[currentSectionIndex].style.display = "block";
    }
  }

  function multipleTransferback() {
    document.dispatchEvent(new CustomEvent("disablednextbtn"));

    if (currentSectionIndex > 0) {
      if (
        singleTransferSections[currentSectionIndex].id === "st4sect" ||
        singleTransferSections[currentSectionIndex].id === "st1sect"
      ) {
        document.dispatchEvent(new CustomEvent("activenextbtn"));
      }

      //dispara evento para capturarlo en progressBar.js
      if (
        (multipleTransferSections[currentSectionIndex - 1].id === "mt1sect") |
        (multipleTransferSections[currentSectionIndex - 1].id === "mt2sect")
      ) {
        window.dispatchEvent(new CustomEvent("backbuttonclicked"));
      }
      //desactivar progress bar
      if (
        multipleTransferSections[currentSectionIndex - 1].id ===
        "transferstartsect"
      ) {
        progressBar.style.display = "none";
      }
      // activar boton
      if (multipleTransferSections[currentSectionIndex - 1].id === "mt2sect") {
        progressBar.style.display = "block";
        nextBtn.style.display = "block";
      }

      // Oculta sección actual
      multipleTransferSections[currentSectionIndex].style.display = "none";
      multipleTransferSections[currentSectionIndex - 1].style.display = "block";
      currentSectionIndex--;
      console.log(currentSectionIndex);
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////

  var transferReceiptSection = null;
  // evento que se dispara cuando se verifica la identidad por ingreso de codigo
  document.addEventListener("verifiedidentity", () => {
    // ocultar progress bar

    progressBar.style.display = "none";
    // Oculta sección actual
    selectedRadio = localStorage.getItem("selectedRadio");
    if (selectedRadio === "singletransfer") {
      singleTransferSections[currentSectionIndex].style.display = "none";
    }
    if (selectedRadio === "multipletransfer") {
      multipleTransferSections[currentSectionIndex].style.display = "none";
    }
    // Muestra la sección actual
    transferReceiptSection = document.querySelector("#transferreceipsect");
    transferReceiptSection.style.display = "block";
  });

  // se vacian todos los input del codigo de verificacion y se lanza un evento
  // para capturarlo el valudateTransfer.js
  const element = document.querySelector("#validatetransfersect");
  // Crea un observador de mutaciones
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === "style") {
        let displayStyle = window.getComputedStyle(element).display;
        window.dispatchEvent(new CustomEvent("emptyinputs"));
      }
    });
  });
  // Configura el observador para escuchar cambios en los atributos
  observer.observe(element, {
    attributes: true, // Esto hace que el observador escuche los cambios en los atributos
  });

  // desactivar boton next
  document.addEventListener("disablednextbtn", () => {
    nextBtn.disabled = true;
  });

  document.addEventListener("activenextbtn", () => {
    nextBtn.disabled = false;
  });

  // activar boton next cuando se elige el tipo de cuenta a transferir
  // window.addEventListener("storage", function (e) {
  //   if (localStorage.getItem("typeaccount")) {
  //     nextBtn.disabled = false;
  //   }
  // });
});

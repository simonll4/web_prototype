// Obtiene todas las secciones
const multipleTransferSections = document.querySelectorAll("#main-m section");
let currentSectionIndex = 0;

// etapas de progress bar
const steps = document.querySelectorAll("#progressbar li");

document.getElementById("next-btn-2").addEventListener("click", () => {
  if (currentSectionIndex < multipleTransferSections.length - 1) {
    currentSectionIndex++;
  }

  if (currentSectionIndex < multipleTransferSections.length) {
    // Oculta sección actual
    multipleTransferSections[currentSectionIndex - 1].style.display = "none";

    // progress bar
    if (multipleTransferSections[currentSectionIndex].id === "section2") {
      steps[0].classList.remove("active");
      document.querySelector("#progressbar #first").classList.add("completed");
      steps[1].classList.add("active");

      if (multipleTransferSections[currentSectionIndex].id === "section2") {
        document.getElementById("title").innerText = "Verificacion";
      }
    }

    // Muestra la sección actual
    multipleTransferSections[currentSectionIndex].style.display = "block";
  }
});

document.getElementById("back-btn-2").addEventListener("click", () => {
  if (currentSectionIndex > 0) {
    currentSectionIndex--;

    if (multipleTransferSections[currentSectionIndex].id === "section1") {
      steps[1].classList.remove("active");
      document
        .querySelector("#progressbar #first")
        .classList.remove("completed");
      steps[0].classList.add("active");
    }

    // Oculta sección actual
    multipleTransferSections[currentSectionIndex + 1].style.display = "none";

    multipleTransferSections[currentSectionIndex].style.display = "block";
  }
});

// Obtiene todas las secciones
const sections = document.querySelectorAll("#main section");
let currentSectionIndex = 0;

// etapas de progress bar
const steps = document.querySelectorAll("#progressbar li");

document.getElementById("next-btn-1").addEventListener("click", () => {
  // Incrementa el índice de la sección actual
  currentSectionIndex++;

  if (currentSectionIndex < sections.length) {
    // Oculta sección actual
    sections[currentSectionIndex - 1].style.display = "none";

    // progress bar
    console.log(sections[currentSectionIndex]);
    if (sections[currentSectionIndex].id === "section2") {
      steps[0].classList.remove("active");
      document.querySelector("#progressbar #first").classList.add("completed");
      steps[1].classList.add("active");
    }

    if (sections[currentSectionIndex].id === "section4") {
      steps[1].classList.remove("active");
      document.querySelector("#progressbar #second").classList.add("completed");
      steps[2].classList.add("active");
    }

    // Muestra la sección actual
    sections[currentSectionIndex].style.display = "block";
  }
});

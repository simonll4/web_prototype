// Obtiene todas las secciones
const sections = document.querySelectorAll("#main section");
let currentSectionIndex = 0;

// etapas de progress bar
const steps = document.querySelectorAll("#progressbar li");

document.getElementById("next-btn-1").addEventListener("click", () => {
  if (currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
  }

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

    if (sections[currentSectionIndex].id === "section3") {
      document.getElementById("title").innerText = "Verificacion";
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

document.getElementById("back-btn-1").addEventListener("click", () => {
  if (currentSectionIndex > 0) {
    currentSectionIndex--;

    if (sections[currentSectionIndex].id === "section1") {
      steps[1].classList.remove("active");
      document
        .querySelector("#progressbar #first")
        .classList.remove("completed");
      steps[0].classList.add("active");
    }

    if (sections[currentSectionIndex].id === "section2") {
      steps[2].classList.remove("active");
      document
        .querySelector("#progressbar #second")
        .classList.remove("completed");
      steps[1].classList.add("active");
    }

    // Oculta sección actual
    sections[currentSectionIndex + 1].style.display = "none";

    sections[currentSectionIndex].style.display = "block";
  }
});

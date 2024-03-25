// Progress bar cantidad de etapas
// const steps = document.querySelectorAll("#progressbar li");
// var currentStep = 0;

// document.addEventListener("click", nextStep);

// console.log(steps);

// function nextStep() {
//   if (currentStep < steps.length) {
//     steps[currentStep].classList.remove("active");

//     if (currentStep == 0) {
//       document.querySelector("#progressbar #first").classList.add("completed");
//     }
//     if (currentStep == 1) {
//       document.querySelector("#progressbar #second").classList.add("completed");
//     }
//     if (currentStep == 1) {
//       document.querySelector("#progressbar #third").classList.add("completed");
//     }

//     currentStep++;
//     steps[currentStep].classList.add("active");
//   }
// }

// Obtiene todas las secciones
const sections = document.querySelectorAll("#main section");
let currentSectionIndex = 0;

// etapas de progress bar
const steps = document.querySelectorAll("#progressbar li");

document.getElementById("next-btn-1").addEventListener("click", () => {
  // Oculta sección actual
  sections[currentSectionIndex].style.display = "none";

  // Incrementa el índice de la sección actual
  currentSectionIndex++;

  // Si el índice de la sección actual es mayor que el número de secciones, vuelve a la primera sección
  if (currentSectionIndex >= sections.length) {
    currentSectionIndex = 0;
  }

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
});

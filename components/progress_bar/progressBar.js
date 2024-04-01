document.addEventListener("DOMContentLoaded", (event) => {
  const steps = document.querySelectorAll("#progressbar li");
  var currentStepIndex = 0;

  // evento disparado en transfer.js
  window.parent.addEventListener("nextbuttonclicked", () => {
    steps[currentStepIndex].classList.remove("active");

    if (steps[currentStepIndex].id === "firststep") {
      steps[currentStepIndex].classList.remove("active");
      document
        .querySelector("#progressbar #firststep")
        .classList.add("completed");
      steps[currentStepIndex + 1].classList.add("active");
    }

    if (steps[currentStepIndex].id === "secondstep") {
      steps[currentStepIndex].classList.remove("active");
      document
        .querySelector("#progressbar #secondstep")
        .classList.add("completed");
      steps[currentStepIndex + 1].classList.add("active");
    }

    currentStepIndex++;
    console.log(currentStepIndex);
  });

  window.parent.addEventListener("backbuttonclicked", () => {
    if (currentStepIndex > 0) {
      if (steps[currentStepIndex].id === "secondstep") {
        steps[currentStepIndex].classList.remove("active");
        document
          .querySelector("#progressbar #firststep")
          .classList.remove("completed");
        steps[currentStepIndex - 1].classList.add("active");
      }

      if (steps[currentStepIndex].id === "thirdstep") {
        steps[currentStepIndex].classList.remove("active");
        document
          .querySelector("#progressbar #secondstep")
          .classList.remove("completed");
        steps[currentStepIndex - 1].classList.add("active");
      }

      currentStepIndex--;
      console.log(currentStepIndex);
    }
  });
});

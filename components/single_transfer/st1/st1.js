document.addEventListener("DOMContentLoaded", function () {
  selectedWibondRadius = document.getElementById("wibondradius");
  selectedOtherRadius = document.getElementById("otherradius");
  informationInput = document.getElementById("recipientinfo");

  window.parent.addEventListener("initst1", () => {
    window.parent.document.dispatchEvent(new CustomEvent("disablednextbtn"));
  });

  selectedWibondRadius.addEventListener("change", () => {
    if (informationInput.value && selectedWibondRadius.checked) {
      window.parent.document.dispatchEvent(new CustomEvent("activenextbtn"));
    }
  });

  selectedOtherRadius.addEventListener("change", () => {
    if (informationInput.value && selectedOtherRadius.checked) {
      window.parent.document.dispatchEvent(new CustomEvent("activenextbtn"));
    }
  });

  informationInput.addEventListener("input", () => {
    if (
      (informationInput.value && selectedWibondRadius.checked) ||
      (informationInput.value && selectedOtherRadius.checked)
    ) {
      window.parent.document.dispatchEvent(new CustomEvent("activenextbtn"));
    }
  });
});

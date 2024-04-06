document.addEventListener("DOMContentLoaded", function () {
  selectedWibondRadius = document.getElementById("wibondradius");
  selectedOtherRadius = document.getElementById("otherradius");

  window.parent.addEventListener("initst1", () => {
    window.parent.document.dispatchEvent(new CustomEvent("disablednextbtn"));
  });

  selectedWibondRadius.addEventListener("change", () => {
    if (selectedWibondRadius.checked) {
      localStorage.setItem("typeaccount", "wibondradius");
      //window.parent.document.dispatchEvent(new CustomEvent("activenextbtn"));
    }
  });

  selectedOtherRadius.addEventListener("change", () => {
    if (selectedOtherRadius.checked) {
      localStorage.setItem("typeaccount", "otherradius");
      //window.parent.document.dispatchEvent(new CustomEvent("activenextbtn"));
    }
  });
});

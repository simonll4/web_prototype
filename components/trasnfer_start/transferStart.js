document.addEventListener("DOMContentLoaded", (event) => {
  selectedSingleRadius = document.getElementById("singletransfer");
  selectedMultipleRadius = document.getElementById("multipletransfer");
  

  selectedSingleRadius.addEventListener("change", () => {
    if (selectedSingleRadius.checked) {
      localStorage.setItem("selectedRadio", "singletransfer");
      //evento personalizado: cuando se elije un radio se dispara el evento para el trasnfer.js
      window.parent.document.dispatchEvent(new CustomEvent("iframechange"));
    }
  });

  selectedMultipleRadius.addEventListener("change", () => {
    if (selectedMultipleRadius.checked) {
      localStorage.setItem("selectedRadio", "multipletransfer");
      //evento personalizado: cuando se elije un radio se dispara el evento para el trasnfer.js
      window.parent.document.dispatchEvent(new CustomEvent("iframechange"));
    }
  });
});

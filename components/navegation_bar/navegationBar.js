document.addEventListener("DOMContentLoaded", (event) => {
  backBtn = document.getElementById("back-btn");

  backBtn.addEventListener("click", () => {
    //evento personalizado: cuando se hace click en backbtn se dispara el evento para el trasnfer.js
    window.parent.document.dispatchEvent(new CustomEvent("backbtn"));
  });
});

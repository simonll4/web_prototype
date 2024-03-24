let btnNext = document.getElementById("next-btn");

// ver la opcion activa del checkbox y decidir
btnNext.addEventListener("click", () => {
  if (document.getElementById("firstradio").checked) {
    console.log("firstRadio activo");
    window.location.href = "transferenciaU.html";
  } else {
    console.log("firstRadio inactivo");
  }
});

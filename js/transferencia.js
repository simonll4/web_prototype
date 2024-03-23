let btnNext = document.getElementById("btn-next");

// ver la opcion activa del checkbox y decidir
btnNext.addEventListener("click", () => {
  if (document.getElementById("firstradio").checked) {
    console.log("firstRadio activo");
    window.location.href = "trasnferenciaU.html";
  } else {
    console.log("firstRadio inactivo");
  }
});


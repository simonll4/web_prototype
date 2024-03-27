let btnNext = document.getElementById("next-btn");

// ver la opcion activa del checkbox y decidir
btnNext.addEventListener("click", () => {
  if (document.getElementById("firstradio").checked) {
    console.log("firstRadio activo");
    window.location.href = "unitTransfer.html";
  } 
  if (document.getElementById("secondradio").checked) {
    console.log("secondRadio activo");
    window.location.href = "multTransfer.html";
  }
  else {
    console.log("Radio inactivo");
  }
});

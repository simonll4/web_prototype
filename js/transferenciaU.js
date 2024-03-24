

let btnNext = document.getElementById("next-btn-1");

// ver la opcion activa del checkbox y decidir
btnNext.addEventListener("click", () => {
  if (
    document.getElementById("radiowibond").checked |
    document.getElementById("radioother").checked
  ) {
    console.log("Radio activo");
  } else {
    console.log("Radio inactivo");
  }
});


const luzRoja = document.createElement("div");
luzRoja.className = "luz roja";
luzRoja.id = "luz-roja";

function prenderRoja() {
  luzRoja.classList.add("encendida");
}

function apagarRoja() {
  luzRoja.classList.remove("encendida");
}

export { luzRoja, prenderRoja, apagarRoja };

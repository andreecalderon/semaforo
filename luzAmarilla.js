const luzAmarilla = document.createElement("div");
luzAmarilla.className = "luz amarilla";
luzAmarilla.id = "luz-amarilla";

function prenderAmarilla() {
  luzAmarilla.classList.add("encendida");
}

function apagarAmarilla() {
  luzAmarilla.classList.remove("encendida");
}

export { luzAmarilla, prenderAmarilla, apagarAmarilla };
  
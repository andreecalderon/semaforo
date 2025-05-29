const luzVerde = document.createElement("div");
luzVerde.className = "luz verde";
luzVerde.id = "luz-verde";

function prenderVerde() {
  luzVerde.classList.add("encendida");
}

function apagarVerde() {
  luzVerde.classList.remove("encendida");
}

export { luzVerde, prenderVerde, apagarVerde };

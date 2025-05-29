const contenedor = document.createElement("div");
contenedor.className = "contenedor_semaforo";

const luzRoja = document.createElement("div");
luzRoja.className = "luz roja";
luzRoja.id = "luz-roja";

const luzAmarilla = document.createElement("div");
luzAmarilla.className = "luz amarilla";
luzAmarilla.id = "luz-amarilla";

const luzVerde = document.createElement("div");
luzVerde.className = "luz verde";
luzVerde.id = "luz-verde";

contenedor.appendChild(luzRoja);
contenedor.appendChild(luzAmarilla);
contenedor.appendChild(luzVerde);

// Función para apagar todas las luces
function apagarLuces() {
  luzRoja.classList.remove("encendida");
  luzAmarilla.classList.remove("encendida");
  luzVerde.classList.remove("encendida");
}

// Función para prender una luz específica: 'roja', 'amarilla' o 'verde'
function prenderLuz(color) {
  apagarLuces();
  switch (color) {
    case "roja":
      luzRoja.classList.add("encendida");
      break;
    case "amarilla":
      luzAmarilla.classList.add("encendida");
      break;
    case "verde":
      luzVerde.classList.add("encendida");
      break;
  }
}

// Agregar eventos click a cada luz para prenderlas al hacer click
luzRoja.addEventListener("click", () => prenderLuz("roja"));
luzAmarilla.addEventListener("click", () => prenderLuz("amarilla"));
luzVerde.addEventListener("click", () => prenderLuz("verde"));

export { contenedor, prenderLuz };

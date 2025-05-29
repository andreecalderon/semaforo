import { luzRoja, prenderRoja, apagarRoja } from "./luzRoja.js";
import { luzAmarilla, prenderAmarilla, apagarAmarilla } from "./luzAmarilla.js";
import { luzVerde, prenderVerde, apagarVerde } from "./luzVerde.js";

const contenedor = document.createElement("div");
contenedor.className = "contenedor_semaforo";

contenedor.appendChild(luzRoja);
contenedor.appendChild(luzAmarilla);
contenedor.appendChild(luzVerde);

function apagarLuces() {
  apagarRoja();
  apagarAmarilla();
  apagarVerde();
}

function prenderLuz(color) {
  apagarLuces();
  switch (color) {
    case "roja":
      prenderRoja();
      break;
    case "amarilla":
      prenderAmarilla();
      break;
    case "verde":
      prenderVerde();
      break;
  }
}

luzRoja.addEventListener("click", () => prenderLuz("roja"));
luzAmarilla.addEventListener("click", () => prenderLuz("amarilla"));
luzVerde.addEventListener("click", () => prenderLuz("verde"));

export { contenedor, prenderLuz };

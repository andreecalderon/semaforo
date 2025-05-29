import { contenedor, prenderLuz } from "./semaforo.js";

document.getElementById("root").appendChild(contenedor);

setTimeout(() => {
  prenderLuz("verde");
}, 2000);

import { contenedor, prenderLuz } from "./semaforo.js";

document.getElementById("root").appendChild(contenedor);

setTimeout(() => {
  prenderLuz("roja");
}, 2000);

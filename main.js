import { contenedor, prenderLuz } from "./semaforo.js";

document.getElementById("app").appendChild(contenedor);
prenderLuz("roja"); // Inicial por defecto

async function obtenerEstadoThingSpeak() {
  try {
    const apiKey = "MHDCU7X5RAJB2LK8";
    const url = `https://api.thingspeak.com/channels/2978891/fields/1.json?api_key=${apiKey}&results=1`;
    const resp = await fetch(url);
    const data = await resp.json();
    const valor = data.feeds[0]?.field1;

    if (valor === "0") prenderLuz("roja");
    else if (valor === "1") prenderLuz("amarilla");
    else if (valor === "2") prenderLuz("verde");
  } catch (e) {
    console.error("Error consultando ThingSpeak:", e);
  }
}

setInterval(obtenerEstadoThingSpeak, 1000); // Cada 1 segundo






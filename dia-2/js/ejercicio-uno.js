"use strict";

//recibir por prompt datos a b y opperador

//mostrar porconsola resultado

const a = +prompt("Introduce A");
const b = +prompt("Introduce B");
const operador = prompt("Introduce operador");

if (operador == "+") {
  console.log("Resultado= " + (a + b));
} else if (operador == "-") {
  console.log("Resultado= " + (a - b));
} else if (operador == "*") {
  console.log("Resultado= " + a * b);
} else if (operador == "/") {
  console.log("Resultado= " + a / b);
  console.log("Resto= " + (a % b));
} else {
  console.log("operador no válido");
}

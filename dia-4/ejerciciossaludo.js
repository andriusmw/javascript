"use strict";
const nombre = prompt("Indica tu nombre");
const idioma = prompt("indica tu idioma");

const saludo = (a, b) => {
  switch (b) {
    case "ES":
      return "Hola " + a;
    case "EN":
      return "Hello " + a;
    case "GL":
      return "Ola " + a;
    default:
      return "Idioma no disponible";
  }
};

console.log(saludo(nombre, idioma));

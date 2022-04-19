"use strict";

//--------------------- IF ELSE ------------------------/

const a = +prompt("Introduce A");
const b = +prompt("Introduce B");
//El + delante del prompt comvierte a número

/*
if (a < b) {
  console.log("A es menor que B");
} else if (a > b) {
  console.log("A es mayor que B");
  //console.log(´${a} es mayor que ${b}´);
} else {
  console.log("A y B son iguales");
}
*/

/* Más recomendable , más limpio
if (a > 0 && a < 4) {
  console.log("A es mayor que cero");
} else if (a > 3 && a < 7) {
  console.log("A es mayor que tres");
} else if (a > 6) {
  console.lo("A es mayor que seis");
}
*/

if (a > 0) {
  if (a > 3) {
    console.log("A es mayor que 3");
  } else {
    console.log("A es mayor que 0");
  }
} //else

// ---------------- SWITCH ------------------------
const fruta = prompt("¿de qué fruta quieres saber el precio?");
switch (fruta) {
  case "Pera":
    console.log("40 cents");
    break;
  case "Manzana":
    console.log("50 cents");
    break;
  case "Naranja":
    console.log("60 cents");
    break;
  default:
    console.log("seleciona entre Pera, Manzana y Naranja");
}

// ---------------- SWITCH ------------------------
const idioma = prompt("introduce idioma");
const nombre = prompt("introduce nombre");
switch (idioma) {
  case "ES":
    console.log("Bienvenido" + nombre);
    break;
  case "EN":
    console.log("wELLCOME" + nombre);
    break;
  case "GL":
    console.log("Bienvenido en gallego" + nombre);
    break;
  default:
    console.log("seleciona un idioma válido");
    break;
}

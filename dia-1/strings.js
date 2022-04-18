"use strict";

console.log("Introduce estos datos: \n Nombre \n Edad");
// \n sirve para hacer saltos de linea

const nombreCompleto = "Pepe Gonzalez";

const nombre = nombreCompleto.substring(0, 4);
const apellido = nombreCompleto.substring(4, 13);

console.log("nombre: " + nombre + " apellido: " + apellido);

/************************** split y arrays---------------------------- */

const listaGrutas = "naranja,pera,manzana,mandarina";
const arraycontrocitos = listaGrutas.split(",");
//Separa por comas y devuelve un array.
console.log(arraycontrocitos);

const posicionmanzana = listaGrutas.indexOf("manzana");
//Busca su índice
console.log(posicionmanzana);
//.lastIndexOf

console.log(listaGrutas.lastIndexOf("manzana"));

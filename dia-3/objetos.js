"use strict";

const name = "pepe";
const lastname = "rodriguez";
const birthYear = 1996;
const favColor = "blue";

//Para los objetos se usa llaves

const usuario = {
  name: "pepe",
  lastname: "rodriguez",
  birthYear: 1996,
  favColor: "blue",
};

//acceder a valores de objetos

//forma 1
console.log(usuario["name"]);
let loquequiereelusuario = prompt("introduce info a buscar(name,lastname)");
console.log(usuario[loquequiereelusuario]);

//forma2
usuario.name;

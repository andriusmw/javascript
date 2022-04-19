"use strict";

//OPERADORES ARITMETICOS

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2); //Eleva a 2

let clicks = 0;

clicks = clicks + 1;
//clicks++;
//clicks--;

// OPERADORES DE COMPARACIÓN

// === !== == != < <= > >=

const nombre = "samu";
const edad = 18;

console.log(nombre === "pepe");
//Comprueba exactamente igual, incluso el tipo de dato
//Devuelve false

console.log(nombre !== "samu");
//Comprueba si es distinto de
//Devuelve false

console.log(nombre == "samu");
//Comparación no estricta, no comprueba si es el mismo tipo de dato

console.log(edad !== "18"); //true -> no es exactmente igual, tipo dato.
console.log(edad != "18"); //false

console.log(edad <= 18); //true
console.log(edad < 18);

// OPERADORES LÓGICOS

// && || ??
//EL OR se pone altGr + 1

//Operador AND
console.log(nombre === "samu" && edad >= 18); //true
console.log(nombre === "samu" && edad > 18); //false

//Operador OR
console.log(nombre === "samu" || edad >= 18); //true
console.log(nombre === "samu" || edad > 18); //true

//Operador Nullish coal operator
// solo responde si lo de delante es nulo o indefinido
const horasJugadasForm = 0;
const horasJugadas = horasJugadasForm ?? "NO RESPONDIÓ";
console.log(horasJugadas);

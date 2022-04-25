"use strict";

const numeros = [2, 7, 1, 8, 9, 2];

const mapear = (callback) => {
  const arrayResultados = [];

  for (const numero of numeros) {
    const resultado = callback(numero);
    arrayResultados.push(resultado);
  }
  console.log(arrayResultados);
};
//introducimos la función restar3 y luego dentro del bucle, le pasamos de parámetro el número de cada iteración y se ejecuta restar3
//que nos devuelve el valor de ese número - 3.

const restar3 = (num) => {
  return num - 3;
};

mapear(restar3);

/************************************************************ */
/*
/************************************************************ */

// MAP

const numeros = [2, 7, 1, 8, 9, 2];

const numerosMasDos = numeros.map((numero) => {
  return numero + 2;
});

console.log(numerosMasDos);

const usuarios = [
  { nombre: "Pepe", apellido: "González", edad: 38 },
  { nombre: "Lucas", apellido: "Rodríguez", edad: 41 },
  { nombre: "Marcos", apellido: "Fernández", edad: 26 },
];

const usuariosConNombreCompleto = usuarios.map((usuario) => {
  const nombreCompleto = usuario.nombre + " " + usuario.apellido;

  return { nombreCompleto: nombreCompleto, edad: usuario.edad };
});

console.log(usuariosConNombreCompleto);

// [
//   { nombreCompleto: "Pepe González", edad: 38 },
//   { nombreCompleto: "Lucas Rodríguez", edad: 41 },
//   { nombreCompleto: "Marcos Fernández", edad: 26 },
// ];

/************************************************************
 *
 ************************************************************/

// SORT

// const numeros = [2, 7, 1, 8, 9, 2];

// -1 (o menos) => a antes que b
// 0 => lo deja como está
// 1 (o más) => b antes que a

// const numerosOrdenados = numeros.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   } else if (a > b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

const numerosOrdenados = numeros.sort((a, b) => {
  return a - b;
});

console.log(numerosOrdenados);

const nombres = [
  "pepe",
  "maría",
  "marcos",
  "lucas",
  "lucía",
  "jose",
  "carlos",
  "ximena",
  "laura",
];

const nombresOrdenados = nombres.sort((a, b) => {
  return a.localeCompare(b);
});

console.log(nombresOrdenados);

// const usuarios = [
//   { nombre: "Pepe", apellido: "González", edad: 38 },
//   { nombre: "Lucas", apellido: "Rodríguez", edad: 41 },
//   { nombre: "Marcos", apellido: "Fernández", edad: 26 },
// ];

usuarios.sort((a, b) => {
  return a.nombre.localeCompare(b.nombre);
});

console.log(usuarios);

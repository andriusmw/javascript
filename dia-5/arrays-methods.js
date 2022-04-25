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

"use strict";
/*
// WHILE

let a = 0;

while (a <= 5) {
  console.log(a);
  a++;
}

// FOR
let contador = 0;
for (let b = 0; b <= 5; b++) {
  console.log(b);
  contador++;
}

console.log("contador= " + contador);

// Recorrer strings

const nombre = "Pepito";

console.log(nombre[1]);

for (let i = 0; i < nombre.length; i++) {
  console.log(nombre[i]);
}
*/
/*---------------*/
/*
let dias = 0;
let contadorpasos = 0;
for (let pasos = 0; pasos < 16; dias++) {
  console.log("amanece");
  //pasos = pasos + 7;
  while (contadorpasos < 7) {
    pasos++;
    contadorpasos++;
    if (pasos == 16) {
      console.log(
        "ya se ha llegado:" +
          " contadorpasos= " +
          contadorpasos +
          " dias= " +
          dias
      );
      break;
    } else {
      console.log("pasos = " + pasos);
      if (pasos >= 16) {
        console.log("ya se ha llegado");
        console.log("días totales:" + dias);
        break;
      } else {
        console.log("llega la noche");
        pasos = pasos - 2;
        console.log("pasos=" + pasos);
      }
    }
  }
}
*/

let dias = 0;
for (let pasos = 0; pasos < 16; dias++) {
  console.log("amanece");
  pasos = pasos + 7;
  console.log("pasos = " + pasos);
  if (pasos >= 16) {
    console.log("ya se ha llegado");
    console.log("días totales:" + dias);
  } else {
    console.log("llega la noche");
    pasos = pasos - 2;
    console.log("pasos=" + pasos);
  }
}

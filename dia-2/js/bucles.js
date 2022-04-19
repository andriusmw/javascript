"use strict";

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

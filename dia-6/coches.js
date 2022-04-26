"use strict";

//5
const cochesmanualesnegros = coches.filter((coche) => {
  return coche.transmision === "manual" && coche.color === "negro";
});

console.log(cochesmanualesnegros);

//6

coches.reduce((previusValue, coche) => {
  return previusValue + coche.precio;
}, 0);

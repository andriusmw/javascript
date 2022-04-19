"use strict";

const a = +prompt("Introduce A");
const b = +prompt("Introduce B");
//El + delante del prompt comvierte a número

if (a < b) {
  console.log("A es menor que B");
} else if (a > b) {
  console.log("A es mayor que B");
  //console.log(´${a} es mayor que ${b}´);
} else {
  console.log("A y B son iguales");
}

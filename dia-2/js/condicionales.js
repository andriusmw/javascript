"use strict";

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

/*
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

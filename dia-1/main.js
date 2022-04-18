"use strict";
//hace que el javascript sea más seguro y salten errores , que sea
//más restictivo. impide malas prácticas, por ejemplo trabajar con una variable
//vacía o sin declarar primero.

console.log("Hola Mundo");

console.log(2 + 3);

8 + 7; //literales, no son variables ni constantes, son valores

/*----------------------------CONSTANTES Y VARIABLES ----------------------*/
/*
/*-------------------------------------------------------------------------*/

//Camel case --> siempre todo junto sin espacios empezando por minusculas y
//separando cada palabra por mayusuculas

const numeroDeCoches = 2;
//mejor usar const siempre que se pueda, salvo que sepas que su valor va a cambiar, precisamente para evitar que sea un let y que se cambie en algún momento sin darte cuenta. Así prevenimos fallos de comportamiento.

console.log(numeroDeCoches);

let nombre = "andrius";

console.log(nombre);

var edad = 18;
//acceso a ellas en cualquier parte del scope y se pueden cambiar;no se recomienda su uso, se prefiere let.

/*------------------------- TIPOS DE VALORES --------------------------- */
/*
/* ----------------------------------------------------------------------*/

//Strings

let surname = "rodriguez";
surname = "gonzalez";
console.log(surname);

//Number
let age = 18;
console.log(age);

//BigInts

//Se le pone una n al final del número.
//Sirve para poder operar con números muy grandes sin perder precision
// 5454545645454545n

//Boolean

true;
false;

const isFull = true;
//Se le suele poner nombre de pregunta a los booleanos
const isGameOver = false;

//Null

const notasAdicionales = null;
//Algo está vacío a posta, tiene el valor nulo.

//Undefinied

let colorFavorito;
console.log(colorFavorito); //Esto va a dar undefinied, NO defnido, valor
//no asignado.

//Symbol
let sym1 = Symbol("foo");
let sym2 = Symbol("foo");
//Aunque el contenido sea el mismo, son datos distintos.

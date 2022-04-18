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

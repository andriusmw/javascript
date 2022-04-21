"user strict";

const user = {
  nombre: "pepe",
  apellido: "gonzalez",
  edad: "27",
};
/*
const nombre = user.nombre;
const apellido = user.apellido;
const edad = user.edad;

console.log(nombre);*/

const { nombre: nombre, apellido: apellido, edad: edad } = user;

//Guarda las propiedades de un objeto en variables.
//podemos dejar en blanco el nombre de las variables y quitar los : a
//la propiedd y entonces se guarda en una variable del mismo nombre
//que la propiedad.

console.log(user);
console.log(nombre, apellido, edad);

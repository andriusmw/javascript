"user strict";

//Objetos
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

/*

const { nombre, apellido, edad} = user;
*/

console.log(user);
console.log(nombre, apellido, edad);

//Arrays

const peliculas = ["peli1", "peli2", "peli3", "peli4"];

const [a, b, c, d] = peliculas;
//Guarda los valores en las variables, según su posición
//la variable a con indice 0, tiene el valor peli1

// Combinaciones

const usuario = {
  nombre: "pepe",
  apellido: "fernandez",
  edad: 38,
  direcciones: [
    {
      ciudad: "La Coruña",
      calle: "Perico de los palotes",
    },
    {
      ciudad: "Málaga",
      calle: "Cualquier plaza guay",
    },
  ],
};

const primeraDireccion = usuario.direcciones[0];

const { ciudad: miCiudadFavorita, calle: miCallePreferida } = primeraDireccion;

const {
  nombre: nombre,
  apellido: apellido2,
  direcciones: [
    { ciudad: primeraCiudad, calle: primeraCalle },
    { calle: segundaCalle },
  ],
} = usuario;

console.log(nombre, apellido2, primeraCiudad, primeraCalle, segundaCalle);

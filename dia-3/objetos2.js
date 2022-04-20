"use strict";

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

// Acceder a la ciudad de la segunda dirección de pepe

// console.log(usuario.direcciones[1].ciudad);

// for (const direccion of usuario.direcciones) {
//   console.log(direccion.ciudad);
// }

// OPTIONAL CHAINING

const usuarios = [
  {
    nombre: "pepe",
    apellido: "fernandez",
    edad: 38,
    direccion: {
      ciudad: "La Coruña",
      calle: "Plaza Pontevedra",
    },
  },
  {
    nombre: "pepe",
    apellido: "fernandez",
    edad: 38,
  },
];

for (const usuario of usuarios) {
  console.log(usuario.direccion?.ciudad);
}
marca_de_verificación_blanca;
ojos;
manos_levantadas;

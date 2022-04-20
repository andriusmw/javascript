/**
 * REGISTRO DE UN COCHE
 *
 * El prompt nos va a preguntar cuántas propiedades registrar sobre el coche. Luego nos
 * ira preguntando qué propiedades queremos guardar, y luego los valores.
 *
 * ¿Cuántas propiedades quieres guardar? => 2
 *
 * ¿Qué quieres registrar del coche? => marca
 * ¿Qué marca quieres guardar? => Mazda
 *
 * ¿Qué quieres registrar del coche? => cv
 * ¿Qué cv quieres guardar? => 120
 *
 * ¡Coche registrado correctamente!
 *
 * Enseñaremos el coche resultante por consola:
 *
 * {
 *   marca: "mazda",
 *   cv: 120
 * }
 *
 */

const numeroPropiedadesGuardar = +prompt(
  "¿Cuántas propiedades quieres guardar?"
);

if (numeroPropiedadesGuardar > 0) {
  const coche = {};

  for (let i = 1; i <= numeroPropiedadesGuardar; i++) {
    const propiedad = prompt("¿Qué quieres registrar del coche?");
    const valor = prompt(`¿Qué ${propiedad} quieres guardar?`);

    coche[propiedad] = valor;
  }

  console.log("Coche registrado correctamente! :D");
  console.log(coche);
} else {
  console.log("Vuelve cuando quieras registrar un coche!");
}

/**
 * Dado un array de booleanos, los true serán
 * pacientes infectados y los false serán pacientes sanos. Los pacientes
 * infectados, contagian a los que tengan a su izquierda y a su derecha
 *
 * EJEMPLO:
 * Si tenemos este array de pacientes:
 * [true, false, true, false, false, false, true, true]
 *
 * Deberá retornar este:
 * [true, true, true, true, false, true, true, true]
 *
 * EXTRA: Los pacientes infectados se curan
 *
 * EJEMPLO:
 * Si recibe este array de pacientes:
 * [true, false, true, false, false, false, true, true]
 *
 * Deberá retornar este:
 * [false, true, false, true, false, true, false, false]
 *
 */

("use strict");

const pacientes = [true, false, true, false, false, false, true, true];
marca_de_verificación_blanca;
ojos;
manos_levantadas;

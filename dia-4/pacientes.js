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

"use strict";

const pacientes = [true, false, true, false, false, false, true, true];
const pacientesInfectados = [];

for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];

  if (pacientesInfectados[i] === undefined) {
    pacientesInfectados[i] = paciente;
  }

  if (paciente == true) {
    if (i === 0) {
      if (pacientes[i + 1] == false) {
        pacientesInfectados[i + 1] = true;
        pacientesInfectados[i] = false;
      }
    } else if (i === pacientes.length - 1) {
      if (pacientes[i - 1] == false) {
        pacientesInfectados[i - 1] = true;
        pacientesInfectados[i] = false;
        //Falta algo para el último caso
      }
    } else {
      if (pacientes[i - 1] == false) {
        pacientesInfectados[i - 1] = true;
        pacientesInfectados[i + 1] = true;
        pacientesInfectados[i] = false;
      } else if (pacientes[i + 1] == false) {
        pacientesInfectados[i - 1] = true;
        pacientesInfectados[i + 1] = true;
        pacientesInfectados[i] = false;
      }
    }
  }
}

console.log("primer array=");
console.log(pacientes);
console.log("segundo array=");
console.log(pacientesInfectados);

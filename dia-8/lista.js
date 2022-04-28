"use strict";

const cantid = prompt("introduce numero");

const crearLista = (cantidadLi) => {
  //Coge el parámetro que le paso a la funcion crear lista
  //Ese parámetro lo cojo del prompt y se lo paso en la llamada
  const ul = document.createElement("ul");

  for (let i = 0; i <= cantidadLi; i++) {
    let li = document.createElement("li");
    li.textContent = "LI NUM: " + [i];
    ul.appendChild(li);
  }

  document.querySelector("section").append(ul);
};

crearLista(cantid);

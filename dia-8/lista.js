"use strict";

const cantid = prompt("introduce numero");

const crearLista = (cantidadLi) => {
  const ul = document.createElement("ul");

  for (let i = 0; i <= cantidadLi; i++) {
    let li = document.createElement("li");
    li.textContent = "LI NUM: " + [i];
    ul.appendChild(li);
  }

  document.querySelector("section").append(ul);
};

crearLista(cantid);

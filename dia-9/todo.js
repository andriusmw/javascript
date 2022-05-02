"use strict";
const boton = document.getElementById("boton");

boton.addEventListener("click", (event) => {
  {
    event.preventDefault();
    const descrip = document.getElementById("descrip").value;

    const ul = document.getElementById("lista");
    let li = document.createElement("li");
    li.textContent = descrip;
    ul.appendChild(li);
  }
});

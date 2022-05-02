"use strict";

/******************INICIO************************* */
const form = document.querySelector("form");

const tareas = JSON.parse(localStorage.getItem("tasks")) || [];
//Esto lee el localstorage y le pasa el array a tareas; sino hay nada, crea array vacío.

const ul = document.getElementById("lista");

for (const taskDescrip of tareas) {
  const li = document.createElement("li");
  li.textContent = taskDescrip;
  ul.appendChild(li);
}

/**************** CREAR TAREAS ************************ */

form.addEventListener("submit", (event) => {
  {
    event.preventDefault();
    const descrip = document.getElementById("descrip").value;

    let li = document.createElement("li");
    li.textContent = descrip;
    ul.appendChild(li);

    /***********local storage********** */

    //añadir datos
    tareas.push(li.textContent);
    const JSONtareas = JSON.stringify(tareas);

    localStorage.setItem("tasks", JSONtareas);

    //leer
    console.log(JSON.parse(localStorage.getItem("tasks")));

    /****************************** */
  }
});

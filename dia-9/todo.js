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

    /***********local storage********** */

    const tareas = [];

    //añadir datos
    tareas.push(li.textContent);
    const JSONtareas = JSON.stringify(tareas);

    localStorage.setItem("tasks", JSONtareas);

    //leer
    console.log(JSON.parse(localStorage.getItem("tasks")));

    /****************************** */
  }
});

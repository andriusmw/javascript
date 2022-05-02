"use strict";

const tareas = ["tarea1", "tarea2", "tarea3"];

//añadir datos

localStorage.setItem("theme", "dark");

const JSONtareas = JSON.stringify(tareas);

localStorage.setItem("tasks", JSONtareas);

// leer datos

console.log(localStorage.getItem("theme"));
console.log(JSON.parse(localStorage.getItem("tasks")));

// eliminar datos

localStorage.removeItem("tasks");
localStorage.clear();

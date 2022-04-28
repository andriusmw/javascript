"use strict";

// DOCUMENT OBJECT MODEL

console.dir(document);

// SELECCIONAR NODOS

// Seleccionar un único nodo

// const section = document.querySelector("body > section");
const section = document.querySelector("#principal");

console.log(section);

const sectionPorId = document.getElementById("principal");

console.log(sectionPorId);

// Seleccionar varios nodos

const listaParrafos = document.querySelectorAll("p");

// El querySelectorAll nos devuelve una lista de Nodos. Si algún día necesitamos convertirla en un array, podemos usar Array.from(NodeList)
console.log(Array.from(listaParrafos));

const elementosClaseContent = document.getElementsByClassName("content");

console.log(elementosClaseContent);

const todosLosParrafos = document.getElementsByTagName("p");

console.log(todosLosParrafos);

// Estos métodos también existen en cada Nodo

const parrafosDentroDeSection = section.querySelectorAll("p");

console.log(parrafosDentroDeSection);

// MOVERNOS ENTRE NODOS

console.log(section.children);
console.log(section.firstElementChild);
console.log(section.lastElementChild);
console.log(section.nextElementSibling);
console.log(section.previousElementSibling);
console.log(section.parentElement);

// CUIDADO. Queremos trabajar siempre con elementos. Propiedades como firstChild, nos va a dar el primer nodo hijo, tenga el tipo que tenga
console.log(section.firstChild);

// LEER Y MODIFICAR CONTENIDO

console.log(section.firstElementChild.textContent);

section.firstElementChild.textContent = "Título de la seccion cambiado";

// innerText es más pesado computacionalmente, pero cuando el elemento tiene visibility: hidden,nos va a dar el texto vacío
// console.log(section.firstElementChild.innerText);

console.log(section.innerHTML);

// const comentarioUsuario =
//   '<img onerror=\'alert("Hackeado crack!");this.remove()\' src="fotonoexiste.jpg"></img>';

// section.innerHTML = `
//     <h2>Sección con comentarios</h2>
//     <p>Primer comentario</p>
//     <p>${comentarioUsuario}</p>
// `;

// LEER Y MODIFICAR ATRIBUTOS

console.log(section.ariaLabel);

section.ariaLabel = "Primera sección";

section.className = "importante";

console.log(section.lastElementChild.dataset.counter);

console.log(section.lastElementChild.counter);
console.log(section.lastElementChild.getAttribute("counter"));

section.lastElementChild.removeAttribute("counter");

console.log(section.hasAttribute("aria-label"));

section.style.backgroundColor = "red";

// getComputedStyle nos da los estilos finales que tiene un elemento después de renderizarse. Vamos a intentar evitarlo ya que es bastante pesado computacionalmente
console.log(getComputedStyle(section));

// MODIFICANDO CLASES

// section.className += " oscura";

console.log(section.classList);

section.classList.add("oscura");
section.classList.remove("importante");
section.classList.toggle("hidden");
console.log(section.classList.contains("hidden"));
section.classList.replace("oscura", "clara");

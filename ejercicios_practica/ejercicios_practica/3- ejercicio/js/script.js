"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener todos los botones utilizando su clase o ID
y asignarle el evento de mouse "click"

Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)

*/


let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
console.log(boton1.textContent)
console.log(boton2.textContent)
console.log(boton3.textContent)

boton1.addEventListener("click",function(){
    this.classList.add("fuego");
    console.log("boton1")
})

boton2.addEventListener("click",function(){
    this.classList.add("fuego");
    console.log("boton2")
})

boton3.addEventListener("click",function(){
    this.classList.add("fuego");
    console.log("boton3")
})



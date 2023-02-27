//Esto es un comentario de una sola linea

/*
Esto es un comentario 
de 
multiples lineas
*/

// mostrar comentarios o texto en el doc .html
document.write("<h1>Hola Mundo</h1>");

// mostrar un mensaje en consola
console.log("Prueba desde la consola");

//mostrar un mensaje en una ventana emergente
//alert('Prueba de Alert');

// crear o declarar variables (var - let - const)
let producto = "ipad pro 2021";

document.write(producto);

// modificar el contenido de una variable
producto = "ipad pro 2023";

document.write("<br>" + producto);

let numero1 = 30;
let numero2 = 50;

document.write("<br>" + (numero1 + numero2));
// las constantes solo pueden tener un valor y no lo upedo modificar posteriormente

const URL = "https://campus.rollingcodeschool.com/";

document.write("<br>" + URL);

//solicitar un dato al usuario
// let numeroSeleccionado = +prompt("Ingrese un numero del 1 al 100");
let numeroSeleccionado = parseInt(prompt("Ingrese un numero del 1 al 100"));
console.log(numeroSeleccionado)
console.log(typeof(numeroSeleccionado))
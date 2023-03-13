// funciones declarativas
const nombre = 'Anthony Edward';
const apellido = 'Stark';
const apodo = 'Tony';
const nombre1 = 'Steve';
const apellido1 = 'Rogers';
const apodo1 = 'Capitan America';

// funciones anonimas equivalente a funciones de expresion
// const NombreCompleto = function (nombre, apellido){
//     return nombre + ',' + apellido;
// }

//const NombreCompleto = (nombre,apellido) => {
//    return nombre + ',' + apellido;
//}

const NombreCompleto = (nombre, apellido) => nombre + ', '+apellido

function saludar(nombrePersonaje, apellido, apodo){
    const nuevoNombre = NombreCompleto(nombrePersonaje,apellido)
    document.write(`<p>Mi nombre es ${nuevoNombre}, pero me dicen ${apodo}</p>`)
}

//crear una funcion nombreCompleto
//function NombreCompleto(nombre,apellido)
//{
 //   const nombreLargo = nombre+', '+apellido
  //  return nombreLargo;
//}

NombreCompleto(nombre,apellido);
//invocar a una funcion
saludar(nombre,apellido,apodo);

document.write(`<p>${10+450}</p>`)
console.log('test....')

saludar('Tadeo','Muñoz','Teo');

// funciones anonimas equivalente a funciones de expresion


// TODO Pedir a un usuario un nombre y precio de un juego, crear una funcion que informe el precio final en pesos argentinos. Preguntar si quiere saber el precio de otro juego
// funciones declarativas
const nombre = 'Anthony Edward';
const apellido = 'Stark';
const apodo = 'Tony';
const nombre1 = 'Steve';
const apellido1 = 'Rogers';
const apodo1 = 'Capitan America';

function saludar(nombrePersonaje, apellido, apodo){
    const nuevoNombre = NombreCompleto(nombrePersonaje,apellido)
    document.write(`<p>Mi nombre es ${nuevoNombre}, pero me dicen ${apodo}</p>`)
}

//crear una funcion nombreCompleto
function NombreCompleto(nombre,apellido)
{
    const nombreLargo = nombre+', '+apellido
    return nombreLargo;
}
NombreCompleto(nombre,apellido);
//invocar a una funcion
saludar(nombre,apellido,apodo);

document.write(`<p>${10+450}</p>`)
console.log('test....')

saludar('Tadeo','Muñoz','Teo');



//document.write(`<p>Mi nombre es ${nombre} ${apellido}, pero me dicen ${apodo}</p>`)


// funciones anonimas equivalente a funciones de expresion
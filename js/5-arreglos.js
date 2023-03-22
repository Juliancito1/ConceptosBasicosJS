// Arrays
// crear un arreglo vacio
let colores = [];
// crear un arreglo con valores
let peliculas = ["Ant-man","Endgame", 2019, true];

// Funcion para mostrar los datos del arreglo
function mostrarPeliculas(titulo = 'No hay un titulo disponible'){
    document.write(`<h2>${titulo}</h2>`)
    document.write("<ul>")
    for(let posicion = 0;posicion < peliculas.length;posicion++)
    {
        document.write(`<li>${peliculas[posicion]}</li>`)
    }
    document.write("</ul>")
}

//mostrar el arreglo
document.write(peliculas)

// recorrer el arreglo
// length: devuelve la cantidad de elementos del arreglo
//array.length
mostrarPeliculas('Mostrar el arreglo de peliculas');
document.write(`<p>Cantidad de peliculas: ${peliculas.length}</p>`)

// agregar un item al arreglo
mostrarPeliculas('Agregar un item al principio del arreglo')
document.write('<h2></h2>')

mostrarPeliculas('Agregar un item al final del arreglo')
peliculas.unshift("Thor love and thunder","Iron Man")

mostrarPeliculas('Agregar un item en una posicion particular del arreglo')
peliculas.push("Civil War");

peliculas.splice(4,0,"Spiderman: No Way Home");
mostrarPeliculas('Agregar un item en una posicion particular del arreglo')

//modificar elementos del arreglo
peliculas[6] = "Doctor Strange";
mostrarPeliculas("Modificar un elemento del arreglo (6)")

//Eliminar items del arreglo

peliculas.shift();
mostrarPeliculas("Eliminar el primer elemento del arreglo");

peliculas.pop();
mostrarPeliculas("Eliminar el ultimo elemento del arreglo")

peliculas.splice(4,1);
//peliculas.splice(2,3);
mostrarPeliculas("Eliminar un elemento de una posicion particular del arreglo (4)")


// OPERACIONES EXTRAS
document.write("<h2>Operaciones extras</h2>")
// Buscar un elemento en el arreglo
document.write(peliculas.includes("Endgame"));
document.write('<br>'+ peliculas.includes("Capitana Marvel"));
document.write(`<p>¿Encontramos Endgame?: ${peliculas.includes('Endgame')}</p>`)

// El operador condicional ternario (condicion logica)? si es true: si es false

let existeEndgame = peliculas.includes('Endgame') === true ? 'Si existe en nuestra lista de peliculas': 'No existe la pelicula en nuestra lista'

document.write(`<p>¿Encontramos Endgame?: ${existeEndgame}</p>`)
document.write(`<p>¿Encontramos Capitana Marvel?: ${peliculas.includes('Capitana Marvel') ? 'Si existe en nuestra lista de peliculas': 'No existe la pelicula en nuestra lista'}</p>`)

// ordenar un arreglo
peliculas.unshift('antman')
peliculas.sort();

mostrarPeliculas("Lista de peliculas ordenada")
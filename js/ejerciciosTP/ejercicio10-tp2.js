// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt("Ingrese un numero de filas"));
const columnas = parseInt(prompt("Ingrese un numero de columnas"));

let numeroCeldas = filas * columnas;

document.write('<table><tbody>')

for(let indiceFila = 0;indiceFila<filas;indiceFila++){
    document.write('<tr>')

    for(let indiceColumna=0;indiceColumna<columnas;indiceColumna++){
    document.write(`<td>${numeroCeldas}</td>`);
    numeroCeldas--;
    }

    document.write('</tr>');

}

document.write('</tbody> </table>')

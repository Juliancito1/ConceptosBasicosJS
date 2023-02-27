// pedirle al usuario que seleccione un mes y le informaremos si el mes seleccionado tiene 31 dias, 30 o entre 28 y 29
// 31 dias- enero 1, marzo 3, mayo 5, julio 7, agosto 8, octubre 10, diciembre 12.
// 30 dias- abril 4, junio 6, septiembre 9, noviembre 11
// 28 o 29 dias- febrero

let mes = parseInt(
  prompt("Ingrese el numero del mes (1 al 12) 1-enero, 2-marzo")
);
console.log(isNaN(mes));

if (!isNaN(mes)) {
  if (mes > 0 && mes <= 12) {
    if (
      mes === 1 ||
      mes === 3 ||
      mes === 5 ||
      mes === 7 ||
      mes === 8 ||
      mes === 10 ||
      mes === 12
    ) {
      document.write("El mes seleccionado (" + mes + ") tiene 31 dias<br>");
      document.write(`El mes seleccionado (${mes}) tiene 31 dias`);
    } else if (mes === 2) {
      document.write(
        `El mes seleccionado (${mes}) tiene 28 o 29 dias dependiendo del año`
      );
    } else {
      document.write(`El mes seleccionado (${mes}) tiene 30 dias`);
    }
  } else {
    document.write(`Ingreso un numero (${mes}) invalido`);
  }
} else {
  document.write(`El valor ingresado (${mes}), no es un numero`);
}

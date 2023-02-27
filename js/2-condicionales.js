// 16 a 18 años optativo votar
// 18 años hasta 70 años es obligatorio
// mayores de 70 años es optativo
// quiero saber si es la primera vez que vota un usuario

// pedir edad al usuario
// preguntar si es >= 16 

let edad = parseInt(prompt('Ingrese su edad'));

if(edad >= 16 && edad < 18 || edad >= 71) 
{
    document.write("Es optativo que votes");
}
else if(edad >= 18 && edad <=70)
{
    document.write("Es obligatorio votar");
}else
{
    document.write("No podes votar");
}


// while(condicion logica){
//      todo el codigo 
//      cambiar la condicion logica
// }

let i = 2;
while(i<=10)
{
    document.write(`<p>Este es el parrafo N:${i}</p>`)
    i+=2 // i= i+2;
    //i++ es igual a i= i+1
}

// do-while
/*
    do{
        todas las lineas de codigo
        cambiar la condicion logica
    }while(condicion logica)
*/

let contador = 1
do{
    document.write(`<p>Este es el parrafo con do-while N:${contador}</p>`)
    contador++;
}while(contador<=10)

// for
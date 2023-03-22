// 7- Haz un script que escriba una piramide inversa de los numeros del 1 al numero que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que indica 30)


let numeroRepeticiones = 50;

for(let i = numeroRepeticiones; i>0; i--)
{   //bucle que controle la columna
    for(let j = i; j>0; j--)
    {
    document.write(i)
    }
    document.write('<br>')
}
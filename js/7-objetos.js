//objetos con notacion literal

let pelicula = {
    // propiedades -> clave: valor;
    id: 2000,
    genero: 'Comedia',
    nombre: 'Son como niños',
    duracion: '1h 45min',
    estado: true,
    clasificacion: 'atp',
    //metodos
    reproducir: function (){
        document.write(`<p>La peli ${this.nombre} se esta reproduciendo...</p>`)
    },
    pausa: ()=>{document.write(`<p>La peli esta pausada</p>`)}

}

//usar el objeto
console.log(pelicula);
// mostrar el objeto por pantalla
document.write('Pelicula: ' + pelicula.nombre);
document.write('<br>Duración: ' + pelicula.duracion);
document.write('<br>Genero: ' + pelicula['genero']);

// invocar a un metodo
pelicula.reproducir();
pelicula.pausa();

//modificar el objeto
pelicula.duracion = '1hr 55min';
document.write('Pelicula: ' + pelicula.nombre);
document.write('<br>Duración: ' + pelicula.duracion);

//agregar una nueva propiedad
pelicula.fechaEstreno = '15/03/2023';
document.write('<br>Pelicula: ' + pelicula.nombre);
document.write('<br>Fecha de Estreno: ' + pelicula.fechaEstreno);

// borrar una propiedad del objeto
delete pelicula.fechaEstreno;
console.log(pelicula);

//averiguar si una propiedad esta dentro del objeto
console.log(pelicula.hasOwnProperty('region'));
console.log(pelicula.hasOwnProperty('id'));

// definir un prototipo ES5
function Videojuego(){
    this.nombre = 'Terraria';
    this.precio = 129.99;
}

const terraria = new Videojuego();
console.log(terraria);


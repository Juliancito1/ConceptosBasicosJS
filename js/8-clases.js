class VideoJuego {
    constructor(titulo,genero,precio,desarrollador)
    {
        this.titulo = titulo;
        this.genero = genero;
        this.precio = precio;
        this.desarrollador = desarrollador;
        this.lanzamiento = new Date()
        this.valoracion = 0
    }
}

let super_mario = new VideoJuego("Super Mario","Aventura",100,'Nintendo')

console.log(super_mario)
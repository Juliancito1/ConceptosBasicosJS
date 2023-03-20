class VideoJuego {
  #precio; //Declara la propiedad privada (private field)
  constructor(titulo, genero, precio, desarrollador) {
    this._titulo = titulo; //Esto es una simulacion de una propiedad privada
    this.genero = genero; //Esto es una propiedad publica
    this.#precio = precio; //Esto es una propiedad privada
    this.desarrollador = desarrollador;
    this.lanzamiento = new Date();
    this.valoracion = 0;
  }

  //Getters y Setters
  get titulo() {
    return this._titulo;
  }

  set titulo(newTitulo) {
    if (newTitulo == "") {
      document.write("El titulo es incorrecto");
      return;
    }
    this._titulo = newTitulo;
  }

  //Metodos que modifican propiedades publicas
  getGenero() {
    return this.genero;
  }

  setGenero(newGenero) {
    this.genero = newGenero;
  }

  get precio() {
    return this.#precio;
  }

  set precio(newPrecio) {
    if (newPrecio <= 0) {
      document.write("El precio es incorrecto");
      return;
    }
    this.#precio = newPrecio;
  }

  //Metodos
  reproducirJuego() {
    document.write(`Reproduciendo el juego ${this._titulo}...`);
  }
  mostrarInfo() {
    document.write(`
        <ul>
        <li>Titulo: ${this.titulo}</li>
        <li>Genero: ${this.genero}</li>
        <li>Precio: ${this.#precio}</li>
        <li>Desarrollador: ${this.desarrollador}</li>
        <li>Lanzamiento: ${this.lanzamiento}</li>
        <li>Valoracion: ${this.valoracion}</li>
        </ul>`);
  }
}

let super_mario = new VideoJuego("Super Mario", "Aventura", 100, "Nintendo");

super_mario.titulo = "Super Mario Kart";
super_mario.setGenero("Carreras");
super_mario.precio = 500;
document.write(`Titulo: ${super_mario.titulo}<br>`);
document.write(`Genero: ${super_mario.genero}<br>`);
document.write(`Precio: ${super_mario.precio}<br>`);
document.write(`Desarrollador: ${super_mario.desarrollador}<br>`);
document.write(`Lanzamiento: ${super_mario.lanzamiento}<br>`);
document.write(`Valoracion: ${super_mario.valoracion}<br>`);

super_mario.reproducirJuego();

super_mario.mostrarInfo();

document.write("<hr>");

let age_of_empires_3 = new VideoJuego(
  "Age of Empires 3",
  "Estrategia",
  1999,
  "Forgotten Empires"
);

document.write(`Titulo: ${age_of_empires_3.titulo}<br>`);
document.write(`Genero: ${age_of_empires_3.genero}<br>`);
document.write(`Precio: ${age_of_empires_3.precio}<br>`);
document.write(`Desarrollador: ${age_of_empires_3.desarrollador}<br>`);
document.write(`Lanzamiento: ${age_of_empires_3.lanzamiento}<br>`);
document.write(`Valoracion: ${age_of_empires_3.valoracion}<br>`);

age_of_empires_3.reproducirJuego();

age_of_empires_3.mostrarInfo();

document.write("<hr>");


//Herencias

class JuegoDeSupervivencia extends VideoJuego {
  constructor(
    titulo,
    genero,
    precio,
    desarrollador,
    protagonista,
    antagonista
  ) {
    super(titulo, genero, precio, desarrollador);
    this.protagonista = protagonista;
    this.antagonista = antagonista;
  }

  mostrarInfo(){
   super.mostrarInfo()
   document.write(`
   <ul>
   <li>Protagonista: ${this.protagonista}</li>
   <li>Antagonista: ${this.antagonista}</li>
   </ul>`);
  }

  obtenerPrecioConImp(){
    return this.precio *1.75
  }
}


let resident_evil_2 = new JuegoDeSupervivencia(
  "Resident Evil 2",
  "Terror-Supervivencia",
  850,
  "Capcom",
  "Leon",
  "Birkin"
);

document.write(`Titulo: ${resident_evil_2.titulo}<br>`);
document.write(`Genero: ${resident_evil_2.genero}<br>`);
document.write(`Precio: ${resident_evil_2.precio}<br>`);
document.write(`Desarrollador: ${resident_evil_2.desarrollador}<br>`);
document.write(`Lanzamiento: ${resident_evil_2.lanzamiento}<br>`);
document.write(`Valoracion: ${resident_evil_2.valoracion}<br>`);

resident_evil_2.reproducirJuego();

resident_evil_2.mostrarInfo();

document.write(resident_evil_2.obtenerPrecioConImp());
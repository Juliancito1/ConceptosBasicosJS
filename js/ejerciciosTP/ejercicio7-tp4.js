/* 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades. */

class Contacto {
  #nombre;
  #telefono;
  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get telefono() {
    return this.#telefono;
  }

  set telefono(newTelefono) {
    this.#telefono = newTelefono;
  }
}

class Agenda {
  #tamanio;
  constructor(tamanio) {
    this.contactos = [];
    this.#tamanio = tamanio;
  }

  get tamanio() {
    return this.#tamanio;
  }

  set tamanio(nuevoTamanio) {
    this.#tamanio = nuevoTamanio;
  }

  // metodos
  agregarContacto(contacto) {
    //si el contacto existe en la agenda
    if (!this.existeContacto(contacto.nombre)) {
      //tengo que preguntar si la agenda tiene espacios libres
      if (!this.agendaLlena()) this.contactos.push(contacto);
      console.log("Contacto Agregado");
    } else {
      console.log("El contacto existe no lo agrego");
    }
  }

  agendaLlena() {
    if (this.contactos.length === this.tamanio) {
      console.log("Agenda llena");
      return true;
    } else {
      console.log("Queda Espacio");
      return false;
    }
  }

  existeContacto(nombreContacto) {
    // buscar el contacto en la agenda
    const existe = this.contactos.find(
      (contacto) => contacto.nombre === nombreContacto
    );
    console.log(existe);
    if (existe) {
      console.log("El contacto existe");
      return true;
    } else {
      console.log("El contacto no existe");
      return false;
    }
  }

  listarContacto() {
    document.write("<h2Lista de contactos</h2>");
    this.contactos.map((contacto) => {
      document.write(
        `<p>Nombre: ${contacto.nombre} - Telefono ${contacto.telefono}</p>`
      );
      console.log(`Nombre: ${contacto.nombre} - Telefono ${contacto.telefono}`);
    });
  }

  buscarContacto(nombreContacto) {
    const contactoBuscado = this.contactos.find(
      (contacto) => contacto.nombre === nombreContacto
    );
    if (contactoBuscado) {
      console.log(
        `Contacto encontrado, nombre: ${contactoBuscado.nombre} - telefono: ${contactoBuscado.telefono} `
      );
    } else {
      console.log("No encontramos el contacto buscado");
    }
  }

  eliminarContacto(nombreContacto) {
    let contactosFiltrados = this.contactos.filter(
      (contacto) => contacto.nombre !== nombreContacto
    );
    if (contactosFiltrados.length === this.contactos.length) {
      console.log("No borramos ningun contacto");
    } else {
      this.contactos = contactosFiltrados;
      console.log("Borramos al contacto " + nombreContacto);
    }
  }

  espaciosDisponibles() {
    let espaciosDisponibles = this.tamanio - this.contactos.length;
    espaciosDisponibles > 0
      ? console.log(`Espacios disponibles ${espaciosDisponibles}`)
      : console.log(`No hay espacio disponibles`);
  }
}

let nuevaAgenda = new Agenda(10);
console.log(nuevaAgenda);

do {
  let opcion = parseInt(
    prompt(`Seleccione una opcion:
    1-Añadir Contacto
    2-Existe Contacto
    3-Listar Contactos
    4-BuscarContacto 
    5-Eliminar Contacto
    6-Agenda Llena
    7-Huecos Libres
    8-Cambiar el tamaño de la agenda`)
  );

  switch (opcion) {
    case 1:
      // crear el contacto
      let nombre = prompt("Ingrese un nombre");
      let telefono = prompt("Ingrese un telefono");
      let nuevoContacto = new Contacto(nombre, telefono);
      nuevaAgenda.agregarContacto(nuevoContacto);
      console.log(nuevaAgenda);
      break;
    case 2:
      let nombreBuscado = prompt("Ingrese el nombre");
      nuevaAgenda.existeContacto(nombreBuscado);
      break;
    case 3:
      nuevaAgenda.listarContacto();
      break;
    case 4:
      const nombreSolicitado = prompt("Ingreese el nombre que desea buscar");
      nuevaAgenda.buscarContacto(nombreSolicitado);
      break;
    case 5:
      const eliminarPersona = prompt(
        "Ingrese el nombre de la persona que desea borrar"
      );
      nuevaAgenda.eliminarContacto(eliminarPersona);
      break;
    case 6:
      document.write(
        `<p>La agenda esta llena? ${nuevaAgenda.agendaLlena()}</p>`
      );
      break;
    case 7:
      nuevaAgenda.espaciosDisponibles();
      break;
    case 8:
      const nuevoTamanio = parseInt(
        prompt("Ingrese la nueva dimension de la agenda")
      );
      nuevaAgenda.tamanio = nuevoTamanio;
      console.log(
        "Actualizamos el tamaño de la agenda a " + nuevoTamanio + " elementos"
      );
      break;
    default:
      console.log("Ingreso una opcion invalida");
      break;
  }
} while (confirm("Desea realizar otra operacion?"));

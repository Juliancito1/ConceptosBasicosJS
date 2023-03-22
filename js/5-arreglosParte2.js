let productos = [
  "Hidratante facial",
  "Tonico exfoliante",
  "Protector solar factor 50",
  "Protector solar toque seco factor 50",
  "Protector solar con color factor 50",
  "Gel de limpieza facial",
  "Tonico hidratante",
  "Sérum hidratante",
  "Exfoliante de azúcar cherry",
  "Pads de hidrogel para contorno de ojos",
  "Mascarilla facial",
  "Sérum facial con PHA",
  "Agua micellar",
  "Mascara de hidratación y reparación",
  "Protector solar en barra",
  "Crema contorno de ojos",
  "Bálsamo labial",
];

//  mostrar una lista de productos

function mostrarProductos(titulo = "No hay un titulo disponible", arregloProductos) {
  document.write(`<h2>${titulo}</h2>`);
  document.write("<ul>");
  // for(let posicion = 0;posicion < peliculas.length;posicion++)
  // {
  //     document.write(`<li>${peliculas[posicion]}</li>`)
  // }
  // ejemplo de map
  arregloProductos.map(producto => document.write(`<li>${producto}</li>`));
  document.write("</ul>");
}
mostrarProductos('Lista original de productos',productos);

// filtrar los productos por protectores solares.
let protectoresSolares = productos.filter(producto => producto.includes("Protector"));

mostrarProductos('Productos filtrados por protector solar',protectoresSolares);

// buscar un elemento en el arreglo de productos
let buscarProducto = productos.find(producto => producto.includes('Sérum'));

document.write('Elemento buscado : '+buscarProducto)
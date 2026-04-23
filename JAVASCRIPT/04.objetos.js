// KEY: VALUE -> CLAVE: VALOR -> PROPIEDAD: VALOR

const movil = {
  nombre: "iPhone 17",
  precio: 1500,
  marca: "Apple",
  color: "Blanco",
  nuevo: true,
};

// CRUD -> Create Read Update Delete -> Crear Leer Actualizar Borrar

// Leer
console.log(movil.marca);
console.log(movil["marca"]);

// Modificar
movil.precio = 2000;
console.log(movil);

// Crear
movil.funda = "No tiene";
console.log(movil);

// Borrar
delete movil.funda;
console.log(movil);

//

const batman = {
  nombre: "Batman",
  nombreReal: "Bruce Wayne",
  ciudad: "Gotham",
  herramientas: ["Gancho", "Capa", "Batarang", "Batmovil"],
  companiero: {
    nombre: "Robin",
    nombreReal: "Dick Grayson",
    ciudad: "Gotham",
    familia: false,
  },
};

console.log(batman.companiero.nombreReal)
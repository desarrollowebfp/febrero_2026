// const x = 10
// const y = 15
// Esto son dos lineas de comentarios en linea

/* const x = 10
const y = 15 
Esto es un comentario de bloque
*/

// El console log nos dará una salida por terminal o consola
// console.log("Adios")

// LET -> VARIABLES MUTABLES
// CONST -> VARIABLES CONSTANTES
let miPrimerSaludo = "Hola"; //camelCase
console.log(miPrimerSaludo);
miPrimerSaludo = "Buenas tardes";
console.log(miPrimerSaludo);

//const nombre = "Byron"

let edad;
edad = 20;
console.log(edad);

const nombre = "Byron";

// SCOPE -> ALCANCE

// Ambito global
const y = 10;

if (true) {
  // Ambito local
  const x = 5;
  console.log(y);
}

// console.log(x)

// TIPOS DE DATO -> INICIALES
// Strings -> Cadenas de texto
const apellido = "Gonzalez";
const ciudad = 'Madrid';
const frase = 'Mi primo dijo: "A programar se aprende programando."'
// Number -> Numeros
const precio = 50.65
// Booleans -> Reflejo del binario
const disponible = false
const matriculado = true
// Undefined -> No definido -> No existe en el codigo
console.log(patata)
// Null -> Nulo es algo de por si que carece de valor o que todavia no hemos definido correctamente
const nulo = null;
// Arrays -> Colecciones de elementos individuales -> Lista
const animales = ["Perro", "Gato", "Loro"]
// Objetos -> Una entidad con diferentes claves y valores -> Propiedades
const consola = {
    nombre: "PlayStation 5",
    precio: 550,
    color: "Blanco",
    compañia: "Sony"
}
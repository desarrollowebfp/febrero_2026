for (let i = 0; i < 3; i++) {
  console.log("Vuelta:", i);
}

// i = 0 -> SE CUMPLE -> ME LLEVO UN ++ -> Vuelta: 0
// i = 1 -> SE CUMPLE -> ME LLEVO UN ++ -> Vuelta: 1
// i = 2 -> SE CUMPLE -> ME LLEVO UN ++ -> Vuelta: 2
// i = 3 -> NO SE CUMPLE -> SE ROMPE EL BUCLE -> X

const numeros = [2, 4, 6, 8, 10, 12];

let total = 0;

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  total += numero;
}

console.log(total);

////////////////////////////

const numerosDobles = [];

const numerosNormales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numerosNormales.length; i++) {
  const numero = numerosNormales[i];
  numerosDobles.push(numero * 2);
}

console.log(numerosDobles);

// WHILE
let indice = 0;

while (indice < 4) {
  console.log(indice);
  indice++;
}

// DO WHILE
let control = 0;

do {
  console.log("Hola");
  console.log(control);
  control++;
} while (control < 0);

////////////////

const nombres = ["Nicolás", "Dani", "Álvaro", "David"];

for (let i = 0; i < nombres.length; i++) {
  const nombre = nombres[i];
  console.log(nombre);
}

for (const nombre of nombres) {
  console.log(nombre);
}

nombres.forEach((nombre, i) => {
  if (i === 2) {
    console.log(nombre, i);
  } else {
    console.log("Otro", nombre);
  }
});

const movil = {
  nombre: "iPhone 17",
  precio: 1500,
  marca: "Apple",
  color: "Blanco",
  nuevo: true,
};

for (const key in movil) {
  console.log("La clave", key, "tiene el valor", movil[key]);
}

//////////////////
/* const nombre = "Fernando";

for (const letra of nombre) {
  console.log(letra);
}
 */
const saludos = ["Hola", "Hey", "Que pasa"];

for (let i = 0; i < saludos.length; i++) {
  const saludo = saludos[i];
  for (let j = 0; j < saludo.length; j++) {
    const letra = saludo[j];
    console.log(letra);
  }
}

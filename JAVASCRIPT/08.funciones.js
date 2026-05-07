function saludar() {
  console.log("Hola");
}

saludar();

console.log("---------------------------");

function saludarConNombre(nombre) {
  console.log("¡Hola " + nombre + "!");
}

saludarConNombre("Pablo");
saludarConNombre("Ana");
saludarConNombre("Pepito");

console.log("---------------------------");

function sumaDosNumeros(numeroA, numeroB) {
  const total = numeroA + numeroB;
  console.log(total);
}

sumaDosNumeros(5, 9);
sumaDosNumeros(1, 2);

console.log("---------------------------");

function calculadoraEdad(nombre, anioNacimiento, anioActual = 2026) {
  const edad = anioActual - anioNacimiento;
  if (anioActual === 2026) {
    console.log(nombre + " tiene " + edad + " años.");
  } else if (anioActual < 2026) {
    console.log(nombre + " tenía " + edad + " años en " + anioActual);
  } else {
    console.log(nombre + " tendrá " + edad + " años en " + anioActual);
  }
}

calculadoraEdad("Antonio", 1990);
calculadoraEdad("Byron", 2020, 2022);
calculadoraEdad("Antonio", 1990, 2049);

console.log("---------------------------");

/* function multiplicarPorDos(numero) {
  return numero * 2;
} */

const resultado2por2 = multiplicarPorDos(2);

console.log(resultado2por2);

console.log("---------------------------");

/* function multiplicarPorDos(numero) {
  return numero * 2;
} */

const multiplicarPorDos = (numero) => {
  return numero * 2;
};

const variable = () => {}
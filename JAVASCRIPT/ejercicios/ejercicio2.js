/* Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función: */

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

const notas = [6, 3, 9, 6, 9, 2, 4];

const edades = [20, 18, 35, 28, 19, 21, 20]

function averageWord(list) {
  let total = 0;

  for (const item of list) {
    if (typeof item === "string") {
      total += item.length;
    } else {
      total += item;
    }
  }

  console.log(total / list.length);
}

averageWord(mixedElements);
averageWord(notas)
averageWord(edades)
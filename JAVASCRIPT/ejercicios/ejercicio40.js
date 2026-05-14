/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos. */

function findArrayIndex(array, text) {
  const posicion = array.indexOf(text);
  if (posicion !== -1) {
    return posicion;
  } else {
    console.log("No se encuentra el elemento en el array");
  }
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function removeItem(array, text) {
  const posicion = findArrayIndex(array, text);
  array.splice(posicion, 1);
  console.log(array);
}

removeItem(mainCharacters, "Han Solo")
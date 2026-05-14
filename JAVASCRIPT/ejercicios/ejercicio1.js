/* Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  // Iniciamos con cadena vacía: cualquier elemento del array será más largo que ""
  let longestWord = "";

  // Recorremos cada string del array uno a uno
  for (const string of stringList) {
    // Solo actualizamos si el actual es ESTRICTAMENTE más largo (>, no >=)
    // Esto garantiza que ante empate se conserva el primero encontrado
    if (string.length > longestWord.length) {
      longestWord = string;
    }
  }

  console.log(longestWord);
}

findLongestWord(avengers);

const animales = ["Perro", "Gato", "Loro", "Tortuga"];

// Longitud -> Longitud HUMANA
console.log(animales.length); // GO TO HELL

//Longitud ->          1       2        3         4
//const animales = ["Perro", "Gato", "Loro", "Tortuga"];
//Posiciones ->         0        1       2        3

// Posiciones - Indices
console.log(animales[animales.length - 1]);

animales[0] = "Periquito";
console.log(animales);

// METODOS DE ARRAYS

animales.push("Ratón");
console.log(animales);
animales.pop();
console.log(animales);
animales.unshift("Ratón");
console.log(animales);
animales.shift();
console.log(animales);

//SLICE -> CONSULTAR UNA PORCION DEL ARRAY
console.log(animales.slice(1, 3));

//SORT -> ORDENAR
animales.sort();
console.log(animales);

const numeros = [1, 4, 20, 10, 34, 23, 12, 50];
numeros.sort((a, b) => a - b);
console.log(numeros);

animales.reverse();
numeros.reverse();
console.log(animales);
console.log(numeros);

console.log(animales.indexOf("Tigre"));

//CONCAT

const peliculasNuevas = ["Michael", "La Momia", "Mario Bros"];
const peliculasAntiguas = ["Casino", "El Padrino", "Lo que el viento se llevó"];

const peliculas = peliculasNuevas.concat(peliculasAntiguas)
console.log(peliculas)

//SPLICE -> POSICION DONDE EMPIEZO A BORRAR, CUANTOS ELEMENTOS CONTADOS ELIMINO, QUE PONGO EN SU LUGAR
console.log(peliculas)

//peliculas.splice(2, 2, "Dracula", "Weapons", "The Thing")
peliculas.splice(peliculas.indexOf("Casino"), 1)
console.log(peliculas)


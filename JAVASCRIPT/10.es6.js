// DESTRUCTURING

//ARRAYS
const colores = ["azul", "rojo", "verde"];
/* const azul = colores[0];
const rojo = colores[1];
const verde = colores[2]; */
const [azul, rojo, verde] = colores;
console.log(rojo);

//OBJETOS
const batman = {
	nombre: "Batman",
	nombreReal: "Bruce Wayne",
	ciudad: "Gotham",
	vehiculo: {
		nombre: "Batmovil",
		color: "negro",
		gasolina: true,
	},
};

/* const nombre = batman.nombre;
const nombreReal = batman.nombreReal;
const ciudad = batman.ciudad; */

const {
	nombre,
	nombreReal,
	ciudad,
	vehiculo: { color, gasolina },
} = batman;

console.log(gasolina);

//Intercambiar variables
let personaje1 = "Peter";
let personaje2 = "Michael";

[personaje1, personaje2] = [personaje2, personaje1];
console.log(personaje1);

// SPREAD OPERATOR ...
//ARRAYS
const alumnosFEB = ["Jesus", "Javier", "David"];
const alumnosMAY = ["Clara", "Mario", "Lucia"];
const alumnos = ["Alvaro", ...alumnosFEB, ...alumnosMAY, "Luis"];
console.log(alumnos);

const texto = "Prometeo";
const textoEnArray = [...texto];
console.log(textoEnArray);
//OBJETOS

const nuevoBatman = { ...batman, ciudad: "Madrid", familia: false };
console.log(nuevoBatman);

//EXTRA
console.log([..."🧑🏽‍❤️‍💋‍🧑🏽"])
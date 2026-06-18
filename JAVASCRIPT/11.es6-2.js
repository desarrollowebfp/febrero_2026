// EVERY
const lista = ["🥝", "🥝", "🥝", "🍕", "🥝"];
const todosKiwis = lista.every((e) => e === "🥝");
console.log(todosKiwis);

// SOME
const algunKiwi = lista.some((e) => e === "🥝");
console.log(algunKiwi);

//INCLUDES
const animales = ["Perro", "Gato", "Liebre", "Loro"];
const perroEnAnimales = animales.includes("Perro");
console.log(perroEnAnimales);

//FIND
const personajes = [
	{
		id: 1,
		name: "Batman",
		city: "Gotham",
	},
	{
		id: 2,
		name: "Flash",
		city: "Central City",
	},
	{
		id: 3,
		name: "Nightwing",
		city: "Bludhaven",
	},
];

/* let flash = null;
for (const personaje of personajes) {
	if (personaje.id === 2) {
		flash = personaje;
	}
}
console.log(flash) */
const flash = personajes.find((personaje) => personaje.id === 2);
console.log(flash);

const peliculas = [
	"The Evil Dead",
	"Lo que el viento se llevó",
	"Batman",
	"Toy Story 5",
    "Lo que el viento se llevo 2: La venganza"
];

const peliculaConTextoLargo = peliculas.find(
	(pelicula) => pelicula.length > 20,
);
console.log(peliculaConTextoLargo);

/* //Creamos una promesa
const pedirPizza = new Promise((resolve, reject) => {
	let todoBien = false;

	console.log("Cocinando la pizza (esperando al repartidor...)");

	setTimeout(() => {
		if (todoBien) {
			resolve("Pizza en su destino, a comer");
		} else {
			reject("Lo sentimos, la pizza se ha quemado");
		}
	}, 4000);
});

//Manejar la promesa
pedirPizza
	.then((res) => {
		console.log("Exito", res);
	})
	.catch((res) => {
		console.log("Error", res);
	})
	.finally(() => {
		console.log("Pedido cerrado");
	});
 */

//Vamos a obtener 50 pokemons

const pokemonsCrudos = [];

for (let i = 1; i < 152; i++) {
	fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
		.then((res) => res.json())
		.then((res) => {
			pokemonsCrudos.push(res);
		});
}

for (const pokemon of pokemonsCrudos) {
	console.log("Hola");
	document.body.innerHTML += `
    <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}"    `;
}

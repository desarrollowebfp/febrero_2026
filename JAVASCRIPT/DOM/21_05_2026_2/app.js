//CRUD -> CREATE READ UPDATE DELETE

// READ
const title = document.querySelector("#title");
console.log(title);

const listaParrafos = document.querySelectorAll("p");
console.log(listaParrafos);

// UPDATE
title.textContent = "Este es el título nuevo";
listaParrafos[1].textContent = "Este es el segundo parrafo modificado";
listaParrafos[1].className = "clase_especial";

// DELETE
listaParrafos[2].remove();

// CREATE
const h2 = document.createElement("h2");
h2.textContent = "Soy un h2";
h2.className = "clase_subtitulo";
console.log(h2);

document.body.appendChild(h2);

///////////////

const galeria = document.querySelector("#galeria");
const imagen = document.createElement("img");
imagen.src =
  "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg";
imagen.alt = "Paisaje";
console.log(imagen);

galeria.appendChild(imagen);

/////////////////////////

const superheroes = [
  "Spider-Man",
  "Batman",
  "Superman",
  "Wonder Woman",
  "Iron Man",
  "Capitán América",
  "Hulk",
  "Thor",
  "Black Panther",
  "Flash",
  "Aquaman",
  "Green Lantern",
  "Doctor Strange",
  "Black Widow",
  "Hawkeye",
  "Wolverine",
  "Deadpool",
  "Daredevil",
  "Jessica Jones",
  "Luke Cage",
  "Ant-Man",
  "Wasp",
  "Vision",
  "Scarlet Witch",
  "Falcon",
  "Winter Soldier",
  "Shazam",
  "Green Arrow",
  "Supergirl",
  "Batgirl",
  "Robin",
  "Nightwing",
  "Catwoman",
  "Cyborg",
  "Starfire",
  "Raven",
  "Beast Boy",
  "Storm",
  "Cyclops",
  "Jean Grey",
  "Professor X",
  "Magneto",
  "Gambit",
  "Rogue",
  "Blade",
  "Moon Knight",
  "She-Hulk",
  "Ms. Marvel",
  "Captain Marvel",
  "Silver Surfer",
  "The Thing",
  "Mister Fantastic",
  "Invisible Woman",
  "Human Torch",
  "Spawn",
  "Hellboy",
  "Invincible",
  "Static Shock",
  "Blue Beetle",
  "Booster Gold",
];

const contenedor = document.querySelector("#contenedor_supers");

for (const superheroe of superheroes) {
  const li = document.createElement("li");
  li.textContent = superheroe;
  contenedor.appendChild(li)
}

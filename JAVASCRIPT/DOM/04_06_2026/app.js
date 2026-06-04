const albums = [
  {
    title: "Master of Puppets",
    artist: "Metallica",
    year: 1986,
    cover:
      "https://coverartarchive.org/release-group/3d00fb45-f8ab-3436-a8e1-b4bfc4d66913/front-500",
    genre: "Thrash Metal",
    label: "Elektra",
  },
  {
    title: "Paranoid",
    artist: "Black Sabbath",
    year: 1970,
    cover:
      "https://coverartarchive.org/release-group/cc053745-c447-3566-8f27-bed5438c9133/front-500",
    genre: "Heavy Metal",
    label: "Vertigo",
  },
  {
    title: "De Mysteriis Dom Sathanas",
    artist: "Mayhem",
    year: 1994,
    cover:
      "https://coverartarchive.org/release-group/982634e8-cd4d-3f7c-9f90-9b6dea315589/front-500",
    genre: "Black Metal",
    label: "Deathlike Silence",
  },
  {
    title: "Toxicity",
    artist: "System of a Down",
    year: 2001,
    cover:
      "https://coverartarchive.org/release-group/f50fbcb4-bfcd-3784-b4c9-44f4793e66b2/front-500",
    genre: "Metal Moderno",
    label: "American",
  },
  {
    title: "Beneath the Remains",
    artist: "Sepultura",
    year: 1989,
    cover:
      "https://coverartarchive.org/release-group/6d9c2a90-603d-34b5-b855-dd20e61971b7/front-500",
    genre: "Death Metal",
    label: "Roadrunner",
  },
  {
    title: "Back in Black",
    artist: "AC/DC",
    year: 1980,
    cover:
      "https://coverartarchive.org/release-group/d3bc1a64-7561-3787-b680-0003aa50f8f1/front-500",
    genre: "Hard Rock",
    label: "Atlantic",
  },
  {
    title: "The Number of the Beast",
    artist: "Iron Maiden",
    year: 1982,
    cover:
      "https://coverartarchive.org/release-group/4ebfe175-e7ed-34cd-8e91-67c7e4a53579/front-500",
    genre: "Heavy Metal",
    label: "EMI",
  },
  {
    title: "Reign in Blood",
    artist: "Slayer",
    year: 1986,
    cover:
      "https://coverartarchive.org/release-group/dbf1b3c0-1efb-4e5f-9fe1-4c42b144aa24/front-500",
    genre: "Thrash Metal",
    label: "Def Jam",
  },
  {
    title: "Rust in Peace",
    artist: "Megadeth",
    year: 1990,
    cover:
      "https://coverartarchive.org/release-group/19e7c9f3-7c4c-3a56-ba50-4156b39f76ca/front-500",
    genre: "Thrash Metal",
    label: "Capitol",
  },
  {
    title: "Cowboys from Hell",
    artist: "Pantera",
    year: 1990,
    cover:
      "https://coverartarchive.org/release-group/a0398241-a842-3593-83b4-a1aa1df23328/front-500",
    genre: "Groove Metal",
    label: "Atco",
  },
  {
    title: "Transilvanian Hunger",
    artist: "Darkthrone",
    year: 1994,
    cover:
      "https://coverartarchive.org/release-group/bc9a4ab3-2ce0-3a49-b48f-3742169d0636/front-500",
    genre: "Black Metal",
    label: "Peaceville",
  },
  {
    title: "In the Nightside Eclipse",
    artist: "Emperor",
    year: 1994,
    cover:
      "https://coverartarchive.org/release-group/e8170089-f81a-3103-bb22-e6f43c4fcaf9/front-500",
    genre: "Black Metal",
    label: "Candlelight",
  },
  {
    title: "Hybrid Theory",
    artist: "Linkin Park",
    year: 2000,
    cover:
      "https://coverartarchive.org/release-group/b5b4bb4b-8ba5-3acf-88cb-4cae2699d8da/front-500",
    genre: "Metal Moderno",
    label: "Warner",
  },
  {
    title: "The Sickness",
    artist: "Disturbed",
    year: 2000,
    cover:
      "https://coverartarchive.org/release-group/92852c11-b67d-32b9-84d8-b52bba0cec9e/front-500",
    genre: "Metal Moderno",
    label: "Giant",
  },
  {
    title: "Vulgar Display of Power",
    artist: "Pantera",
    year: 1992,
    cover:
      "https://coverartarchive.org/release-group/814e0b20-6884-31c5-9d99-d215f048cfd6/front-500",
    genre: "Groove Metal",
    label: "Atco",
  },
  {
    title: "Ride the Lightning",
    artist: "Metallica",
    year: 1984,
    cover:
      "https://coverartarchive.org/release-group/0da580f2-6768-498f-af9d-2becaddf15e0/front-500",
    genre: "Thrash Metal",
    label: "Megaforce",
  },
  {
    title: "Ænima",
    artist: "Tool",
    year: 1996,
    cover:
      "https://coverartarchive.org/release-group/ef1e8130-dd5f-336a-85fa-4936a47342bd/front-500",
    genre: "Metal Moderno",
    label: "Zoo",
  },
  {
    title: "Filosofem",
    artist: "Burzum",
    year: 1996,
    cover:
      "https://coverartarchive.org/release-group/c2841928-501f-37f7-a59e-cb1629471258/front-500",
    genre: "Black Metal",
    label: "Misanthropy",
  },
  {
    title: "Roots",
    artist: "Sepultura",
    year: 1996,
    cover:
      "https://coverartarchive.org/release-group/f625cd30-9427-360b-b63d-e294d23b1980/front-500",
    genre: "Groove Metal",
    label: "Roadrunner",
  },
  {
    title: "Led Zeppelin IV",
    artist: "Led Zeppelin",
    year: 1971,
    cover:
      "https://coverartarchive.org/release-group/2e61da88-39e9-3473-81d2-c964cb394952/front-500",
    genre: "Hard Rock",
    label: "Atlantic",
  },
];

//Recuperamos el elemento de la lista de HTML
const list = document.querySelector("#list");
//Recuperamos los botones
const yearBtn = document.querySelector("#yearBtn");
const titleBtn = document.querySelector("#titleBtn");
const artistBtn = document.querySelector("#artistBtn");

//Creamos la función que pinta los discos en la interfaz
const showAlbums = () => {
  //Vaciamos la lista antes de volver a meter los albums para que no se repitan, y así aparecen y desaparecen con diferente orden, dando la sensación visual y semántica de haber modificado el array
  list.innerHTML = "";
  //Recorremos los albums
  for (const album of albums) {
    //Por cada album creamos un li nuevo
    const li = document.createElement("li");
    //En cada vuelta añadimos el contenido de HTML al li de una manera un poco más comoda
    li.innerHTML = `
             <img src="${album.cover}" alt="${album.title} cover"/>
             <h2>${album.title}</h2>
             <h3>${album.artist}</h3>
             <p>${album.year} - ${album.label}</p>
             <p>${album.genre}</p>
        `;
    //Cuando terminemos cada li los inyectamos en la lista que recuperamos al principio
    list.appendChild(li);
  }
};
let yearAsc = true;
let titleAsc = true;
let artistAsc = true;

//Le añadimos eventos click a los botones y ordenamos según la propiedad que corresponda el array original, para justo después volver a pintar los discos
yearBtn.addEventListener("click", () => {
  albums.sort((a, b) => {
    if (yearAsc) {
      return a.year - b.year;
    } else {
      return b.year - a.year;
    }
  });
  yearAsc = !yearAsc;
  showAlbums();
});

titleBtn.addEventListener("click", () => {
  albums.sort((a, b) => {
    if (titleAsc) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    } else {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    }
  });
  titleAsc = !titleAsc;
  showAlbums();
});

artistBtn.addEventListener("click", () => {
  albums.sort((a, b) => {
    if (artistAsc) {
      if (a.artist < b.artist) {
        return -1;
      }
      if (a.artist > b.artist) {
        return 1;
      }
      return 0;
    } else {
      if (a.artist > b.artist) {
        return -1;
      }
      if (a.artist < b.artist) {
        return 1;
      }
      return 0;
    }
  });
  artistAsc = !artistAsc;
  showAlbums();
});

//Para ejecutar una función por defecto al abrir la aplicación la podemos dejar fuera pero queda mucho más limpio y controlado hacerlo una vez se cargue el contenido del DOM
document.addEventListener("DOMContentLoaded", showAlbums);

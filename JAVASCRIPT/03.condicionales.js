if (false) {
  console.log("Hola");
}

/////////////////////////

const estudiar = true;
const limpiarHabitacion = false;

// Si estudias o limpias puedes jugar a la videoconsola
if (estudiar && limpiarHabitacion) {
  console.log("Puedes jugar a la videoconsola");
}

//////////////////////////

const edad = 17;

if (edad >= 18) {
  console.log("Puedes conducir");
} else {
  console.log("No puedes conducir");
}

////////////////////////////

const puntuacionPelicula = 7;

if (puntuacionPelicula <= 10 && puntuacionPelicula >= 9) {
  console.log("Obra maestra");
} else if (puntuacionPelicula <= 8 && puntuacionPelicula >= 6) {
  console.log("Notable");
} else if (puntuacionPelicula <= 5 && puntuacionPelicula >= 3) {
  console.log("Pasable");
} else {
  console.log("Malísima");
}

//////////////////////////
const jugador1 = "papel";
const jugador2 = "piedra";

if (jugador1 === "tijera" && jugador2 === "papel") {
  console.log("J1:", jugador1, "vs", "J2:", jugador2);
  console.log("Jugador 1 gana");
} else if (jugador1 === "piedra" && jugador2 === "tijera") {
  console.log("J1:", jugador1, "vs", "J2:", jugador2);
  console.log("Jugador 1 gana");
} else if (jugador1 === "papel" && jugador2 === "piedra") {
  console.log("J1:", jugador1, "vs", "J2:", jugador2);
  console.log("Jugador 1 gana");
} else if (jugador1 === jugador2) {
  console.log("J1:", jugador1, "vs", "J2:", jugador2);
  console.log("Empate");
} else {
  console.log("J1:", jugador1, "vs", "J2:", jugador2);
  console.log("Jugador 2 gana");
}

//////////////////////
const precio = 70;

if (precio >= 10) {
  console.log("Barato");
}
if (precio >= 30) {
  console.log("Precio razonable");
}
if (precio >= 60) {
  console.log("Precio un poco caro");
}
if (precio >= 80) {
  console.log("Precio caro");
}

// IF -> Si la condición se cumple...
// ELSE IF -> Y si esta otra condición se cumple tiro por aquí mejor...
// ELSE -> Y si ninguna de las condiciones se cumplen...

// SWITCH

switch (precio) {
  case precio >= 10:
    console.log("Barato");
    break;
  case precio >= 30:
    console.log("Precio razonable");
    break;
  case precio >= 60:
    console.log("Precio un poco caro");
    break;
  default:
    console.log("Precio caro");
    break;
}

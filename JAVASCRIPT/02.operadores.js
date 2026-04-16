// Operadores aritméticos
console.log(5 + 5);
console.log(10 - 5);
console.log(5 * 2);
console.log(5 / 2);
console.log(4 % 3);

let total = 0;
/* total = total + 5
total = total - 2 */
// Operación y asignación
total += 5;
total -= 2;
// Incremento y decremento
total++;
total--;
console.log(total);

// Operadores lógicos -> Como conseguimos un true o un false

// && -> AND -> Y
console.log(true && true); // El unico que se cumple es el true + true
console.log(true && false);
console.log(false && false);

// || -> OR -> O
console.log(true || true); // True
console.log(true || false); // True
console.log(false || false);

// ! -> NOT -> NO
console.log("Le damos la vuelta a los booleans");
console.log(!false);
console.log(!true);

// Operadores de comparación -> Devuelven un boolean
console.log(5 < 6);
console.log(5 <= 5);
console.log(5 > 6);
console.log(5 >= 5);

// Igual que
console.log(5 == "5");
// Estrictamente igual que ⭐️
console.log(5 === "5");
// Diferente que
console.log(4 != 5);
// Estrictamente diferente que ⭐️
console.log(4 !== 5);

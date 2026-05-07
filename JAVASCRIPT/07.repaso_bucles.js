/* const lista = []

for(let i = 10; i >= 1; i--){
   lista.push(i);
   
}
console.log(lista.join(", "))
console.log("¡Despegue!🚀") */

//////////////////////////////////////////////
const notas = {
  matematicas: 8,
  lengua: 7,
  historia: 9,
  ingles: 6,
  quimica: 9,
  geografia: 3,
  informatica: 5,
};

let suma = 0;
let cuantas = 0;

for (const asignatura in notas) {
  suma += notas[asignatura];
  cuantas++;
}

console.log("Promedio:" + suma / cuantas);

//////////////////////////////////////

const alimentos = ["🍕", "🍫", "🍕", "🥝", "🍕", "🍕", "🍕", "🍫", "🦐"];

let pizzas = 0;

for (const alimento of alimentos) {
  if (alimento === "🍕") {
    pizzas += 1;
  }
}

console.log(pizzas);

/////////////////////////////////
const tienda = [
  {
    producto: "manzana",
    precio: 0.5,
    stock: 30,
  },
  {
    producto: "leche",
    precio: 1.2,
    stock: 12,
  },
  {
    producto: "pan",
    precio: 0.8,
    stock: 0,
  },
  {
    producto: "queso",
    precio: 5.3,
    stock: 4,
  },
];

let stockTotal = 0;

for (const articulo of tienda) {
  //console.log(articulo["producto"]);
  stockTotal += articulo["precio"] * articulo["stock"];

  if(articulo["stock"] === 0){
    console.log("⚠️ No queda stock", articulo["producto"])
  }
}

console.log("Total inventario:", stockTotal);

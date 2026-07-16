const input = document.querySelector("#input");
const resultado = document.querySelector("#resultado");

input.addEventListener("input", (ev) => {
	localStorage.setItem("value", ev.target.value);
	resultado.textContent = ev.target.value;
});

document.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem("value")) {
		resultado.textContent = localStorage.getItem("value");
	}
});

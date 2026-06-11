import "./style.css";
import Header from "./components/Header/Header";
import Curriculum from "./components/Curriculum/Curriculum";
import Skills from "./components/Skills/Skills";

window.addEventListener("DOMContentLoaded", () => {
	const app = document.querySelector("#app");

	app.innerHTML = `
   ${Header()}
   ${Curriculum()}
   ${Skills()}
`;
});

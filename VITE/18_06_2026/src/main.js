import "./style.css";
import Avatar from "./components/Avatar/Avatar";

const init = () => {
	document.querySelector("#app").innerHTML = `
  ${Avatar("David", "sm", true)}
  ${Avatar("Mario Perez")}
  ${Avatar("David", null, true, "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp")}
  ${Avatar("Fernando Rodriguez", "sm")}
  ${Avatar("David", "lg", true, "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp")}
  ${Avatar("David", "lg", true)}
  `;
};

window.addEventListener("DOMContentLoaded", init);

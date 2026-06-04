import "./style.css";
import { titulo, subtitulo } from "./data";
document.querySelector("#app").innerHTML = `
<section id="center">
  <h1>${titulo}</h1>
  <h2>${subtitulo}</h2>
</section>
`;

setupCounter(document.querySelector("#counter"));

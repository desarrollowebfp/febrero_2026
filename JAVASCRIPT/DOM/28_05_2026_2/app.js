const btn = document.querySelector("#btn");

btn.addEventListener("click", (ev) => {
  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sit dui erat est in quis tellus praesent nisl sit. Id consectetur orci phasellus in felis pellentesque auctor velit. Diam sodales suscipit leo praesent. Vehicula dolor turpis in dui ullamcorper augue donec suspendisse ipsum magna.";
  document.body.appendChild(p);
});

window.addEventListener("scroll", (ev) => {
  document.querySelector("h2").textContent =
    ev.target.defaultView.pageYOffset + "px";
});

window.addEventListener("resize", (ev) => {
  document.querySelector("h3").textContent =
    ev.target.innerHeight + " x " + ev.target.innerWidth;
});

const btnTema = document.querySelector("#btn_tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    btnTema.textContent = "🌞";
  } else {
    btnTema.textContent = "🌚";
  }
});

/* const getWeather = () => {
	fetch(
		`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Madrid&aqi=no`,
	)
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
		});
}; */

const weatherImages = {
  // ☀️ Sunny / Clear
  1000: "https://images.unsplash.com/photo-1759301247971-4b5078db2fbd?w=1600&q=80",

  // ⛅ Partly cloudy
  1003: "https://images.unsplash.com/photo-1752517589114-b712bf694aa3?w=1600&q=80",

  // ☁️ Cloudy / Overcast
  1006: "https://images.unsplash.com/photo-1754215624552-41ff8ad1819b?w=1600&q=80",
  1009: "https://images.unsplash.com/photo-1754215624552-41ff8ad1819b?w=1600&q=80",

  // 🌫️ Haze
  1012: "https://images.unsplash.com/photo-1754373218884-dc6507f90f48?w=1600&q=80",

  // 🏜️ Polvo / Tormenta de arena
  1015: "https://images.unsplash.com/photo-1674109830188-86a960afe6a5?w=1600&q=80",
  1018: "https://images.unsplash.com/photo-1674109830188-86a960afe6a5?w=1600&q=80",
  1021: "https://images.unsplash.com/photo-1674109830188-86a960afe6a5?w=1600&q=80",
  1024: "https://images.unsplash.com/photo-1674109830188-86a960afe6a5?w=1600&q=80",
  1027: "https://images.unsplash.com/photo-1674109830188-86a960afe6a5?w=1600&q=80",
  1045: "https://images.unsplash.com/photo-1674109830188-86a960afe6a5?w=1600&q=80",
  1048: "https://images.unsplash.com/photo-1674109830188-86a960afe6a5?w=1600&q=80",

  // 🏭 Humo / Smog
  1033: "https://images.unsplash.com/photo-1741309695551-18af52f2fd49?w=1600&q=80",
  1036: "https://images.unsplash.com/photo-1741309695551-18af52f2fd49?w=1600&q=80",
  1039: "https://images.unsplash.com/photo-1741309695551-18af52f2fd49?w=1600&q=80",
  1042: "https://images.unsplash.com/photo-1741309695551-18af52f2fd49?w=1600&q=80",

  // 🌁 Niebla / Mist
  1030: "https://images.unsplash.com/photo-1757075149676-2c4f19a090b9?w=1600&q=80",
  1135: "https://images.unsplash.com/photo-1757075149676-2c4f19a090b9?w=1600&q=80",
  1147: "https://images.unsplash.com/photo-1757075149676-2c4f19a090b9?w=1600&q=80",

  // 🌧️ Lluvia (llovizna, lluvia ligera/moderada/fuerte, chubascos)
  1063: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1072: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1150: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1153: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1168: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1171: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1180: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1183: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1186: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1189: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1192: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1195: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1198: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1201: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1240: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1243: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",
  1246: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1600&q=80",

  // ❄️ Nieve / Aguanieve / Hielo / Blizzard
  1066: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1069: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1114: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1117: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1204: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1207: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1210: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1213: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1216: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1219: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1222: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1225: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1237: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1249: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1252: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1255: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1258: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1261: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",
  1264: "https://images.unsplash.com/photo-1564260508434-ba6958a4c468?w=1600&q=80",

  // ⛈️ Tormenta eléctrica
  1087: "https://images.unsplash.com/photo-1511149623065-6256ab4f4b5a?w=1600&q=80",
  1273: "https://images.unsplash.com/photo-1511149623065-6256ab4f4b5a?w=1600&q=80",
  1276: "https://images.unsplash.com/photo-1511149623065-6256ab4f4b5a?w=1600&q=80",
  1279: "https://images.unsplash.com/photo-1511149623065-6256ab4f4b5a?w=1600&q=80",
  1282: "https://images.unsplash.com/photo-1511149623065-6256ab4f4b5a?w=1600&q=80"
};

const API_KEY = "69902c6c30a342d6b7e163258241906";

const getWeather = async (city) => {
	const data = await fetch(
		`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`,
	);
	const weatherData = await data.json();
	renderWeather(weatherData);
};

const renderWeather = (data) => {
	const main = document.querySelector("main");
	main.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <h3>${data.current.temp_c}º</h3>
        <div>
            <p>${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="${data.current.condition.text}"/>
        </div>
        <p>${data.current.wind_kph} km/h</p>
        <p>${data.current.humidity} %</p>
    `;
    console.log(weatherImages[data.current.condition.code])
	document.body.style.backgroundImage = weatherImages[data.current.condition.code]
		? `url(${weatherImages[data.current.condition.code]})`
		: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww";
};

const searchBtn = document.querySelector("#search_btn");
const input = document.querySelector("#city_input");

searchBtn.addEventListener("click", () => {
	const city = input.value;
	getWeather(city);
	input.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
	navigator.geolocation.getCurrentPosition((pos) => {
		const coord = `${pos.coords.latitude},${pos.coords.longitude}`;
		if (coord) {
			getWeather(coord);
		} else {
			getWeather("Tokyo");
		}
	});
});

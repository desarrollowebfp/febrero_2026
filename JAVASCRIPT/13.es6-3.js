// MAP

const superheroes = [
	{
		name: "Superman",
		powerLevel: 98,
		species: "Kryptonian",
	},
	{
		name: "Supergirl",
		powerLevel: 95,
		species: "Kryptonian",
	},
	{
		name: "General Zod",
		powerLevel: 96,
		species: "Kryptonian",
	},
	{
		name: "Wolverine",
		powerLevel: 35,
		species: "Mutant",
	},
	{
		name: "Cyclops",
		powerLevel: 40,
		species: "Mutant",
	},
	{
		name: "Magneto",
		powerLevel: 88,
		species: "Mutant",
	},
	{
		name: "Thor Odinson",
		powerLevel: 95,
		species: "Asgardian",
	},
	{
		name: "Hela",
		powerLevel: 93,
		species: "Asgardian",
	},
	{
		name: "Loki",
		powerLevel: 75,
		species: "Asgardian",
	},
	{
		name: "Omni-Man",
		powerLevel: 88,
		species: "Viltrumite",
	},
];

/* const asgardianos = [];

for (const superheroe of superheroes) {
	if (superheroe.species === "Asgardian") {
		asgardianos.push(superheroe);
	}
}

console.log(asgardianos) */

const asgardianos = superheroes.filter(
	(superheroe) =>
		superheroe.species === "Asgardian" && superheroe.powerLevel > 80,
);

console.log(asgardianos);

const alumnos = [
	{
		name: "Liam Smith",
		course: "Mathematics",
		finalGrade: 8.5,
	},
	{
		name: "Emma Johnson",
		course: "Physics",
		finalGrade: 4.2,
	},
	{
		name: "Oliver Brown",
		course: "History",
		finalGrade: 9.0,
	},
	{
		name: "Sophia Garcia",
		course: "Chemistry",
		finalGrade: 3.8,
	},
	{
		name: "Lucas Martinez",
		course: "Mathematics",
		finalGrade: 6.7,
	},
	{
		name: "Mia Davis",
		course: "Literature",
		finalGrade: 5.0,
	},
	{
		name: "Noah Wilson",
		course: "Physics",
		finalGrade: 2.5,
	},
	{
		name: "Isabella Rodriguez",
		course: "History",
		finalGrade: 7.3,
	},
];

const aprobados = alumnos.filter((alumno) => alumno.finalGrade >= 5);
console.log(aprobados);

const noMatematicas = alumnos.filter(
	(alumno) => alumno.course !== "Mathematics",
);
console.log(noMatematicas);

//MAP
const mapAlumnos = [
	{
		name: "Liam Smith",
		course: "Mathematics",
		finalGrade: 8.5,
	},
	{
		name: "Emma Johnson",
		course: "Physics",
		finalGrade: 4.2,
	},
	{
		name: "Oliver Brown",
		course: "History",
		finalGrade: 9.0,
	},
	{
		name: "Sophia Garcia",
		course: "Chemistry",
		finalGrade: 3.8,
	},
	{
		name: "Lucas Martinez",
		course: "Mathematics",
		finalGrade: 6.7,
	},
	{
		name: "Mia Davis",
		course: "Literature",
		finalGrade: 5.0,
	},
	{
		name: "Noah Wilson",
		course: "Physics",
		finalGrade: 2.5,
	},
	{
		name: "Isabella Rodriguez",
		course: "History",
		finalGrade: 7.3,
	},
];

const alumnosSinAsistencia = mapAlumnos.map((alumno) => ({
	nombre: alumno.name,
	nota: Math.round(alumno.finalGrade - 2),
	matriculado: false,
}));

console.log(alumnosSinAsistencia);

const habitantes = ["🙋🏼", "🙋🏼", "🙋🏼", "🐕", "🙋🏼", "🙋🏼", "🙋🏼", "🙋🏼", "🐕"];

const zombies = habitantes.map((habitante) =>
	habitante === "🙋🏼" ? "🧟" : habitante,
);

console.log(zombies);

//REDUCE
const reduceAlumnos = [
	{
		name: "Liam Smith",
		course: "Mathematics",
		finalGrade: 8.5,
	},
	{
		name: "Emma Johnson",
		course: "Physics",
		finalGrade: 4.2,
	},
	{
		name: "Oliver Brown",
		course: "History",
		finalGrade: 9.0,
	},
	{
		name: "Sophia Garcia",
		course: "Chemistry",
		finalGrade: 3.8,
	},
	{
		name: "Lucas Martinez",
		course: "Mathematics",
		finalGrade: 6.7,
	},
	{
		name: "Mia Davis",
		course: "Literature",
		finalGrade: 5.0,
	},
	{
		name: "Noah Wilson",
		course: "Physics",
		finalGrade: 2.5,
	},
	{
		name: "Isabella Rodriguez",
		course: "History",
		finalGrade: 7.3,
	},
];

const total = reduceAlumnos.reduce((acc, alumno) => acc + alumno.finalGrade, 0);
console.log(total / reduceAlumnos.length);

// EJEMPLO DE OTRA COSA CON EL REDUCE
const citizens = ["🙋🏼", "🙋🏼", "🙋🏼", "🐕", "🙋🏼", "🙋🏼", "🙋🏼", "🙋🏼", "🐕"];

const walkingDead = citizens.reduce((acc, citizen) => {
	if (citizen === "🙋🏼") {
		acc.push("🧟");
		return acc;
	} else {
		acc.push(citizen);
		return acc;
	}
}, []);

console.log(walkingDead)
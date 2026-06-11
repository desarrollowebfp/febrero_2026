import "./Curriculum.css";

import { workExperience, education } from "../../data/curriculum";

const Curriculum = () => {
	const main = document.createElement("main");
	const workList = document.createElement("ul");
	const educationList = document.createElement("ul");

	for (const experience of workExperience) {
		const li = document.createElement("li");

		li.innerHTML = `
        <h2>${experience.company}</h2>
        <p>${experience.position}</p>
        <p>${experience.location}</p>
        <p>${experience.startDate} - ${experience.endDate}</p>
        `;

        workList.appendChild(li)
	}

	for (const edu of education) {
		const li = document.createElement("li");

		li.innerHTML = `
        <h2>${edu.degree}</h2>
        <p>${edu.institution}</p>
        <p>${edu.endDate}</p>
        `;

        educationList.appendChild(li)
	}

	main.appendChild(workList);
	main.appendChild(educationList);

	return main.outerHTML
};

export default Curriculum;

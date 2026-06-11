import "./Skills.css";

import skills from "../../data/skills";

const Skills = () => {
	const section = document.createElement("section");
	const skillList = document.createElement("ul");

	for (const skill of skills) {
		const li = document.createElement("li");
		li.innerHTML = `
        <img src="${skill.icon}" alt="${skill.name}"/>
        `;

        skillList.appendChild(li)
	}

	section.appendChild(skillList);
	return section.outerHTML;
};

export default Skills;

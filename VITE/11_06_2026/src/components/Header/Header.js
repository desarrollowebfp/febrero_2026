import "./Header.css";

import personalData from "../../data/personalData";

const Header = () => {
	return `
        <header>
            <h1>${personalData.name} - ${personalData.position}</h1>
            <p>${personalData.description}</p>
            <div>
                <a href="mailto:${personalData.email}">${personalData.email}</a>
                <p>${personalData.country}</p>
            </div>
        </header>
    `;
};

export default Header;

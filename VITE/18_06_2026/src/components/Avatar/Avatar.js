import "./Avatar.css";
import randomColor from "../../utils/randomColor";

// showAvatar: true, false

const Avatar = (username, size, showAvatar, imageURL) => {
	if (!showAvatar) {
		return `
         <div class="avatar ${size}" style="background-color: ${randomColor()}">
           <h2>${username[0]}</h2>
         </div>
        `;
	} else {
		return `
        <div class="avatar ${size}" style="background-color: ${randomColor()}">
            <img src="${imageURL ? imageURL : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541"}" alt="${username} avatar"/>
        </div>
    `;
	}
};

export default Avatar;

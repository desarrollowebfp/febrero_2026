const randomColor = () => {
	const colors = ["#677446", "#7d1ed8", "#842c2d", "#548437", "#1e356d"];

	return colors[Math.floor(Math.random() * colors.length)];
};

export default randomColor;

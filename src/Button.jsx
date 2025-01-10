function Button() {
	let count = 0;

	const handleClick = (name) => {
		if (count < 3) {
			count++;
			console.log(`${name} you clicked me ${count} time/s`);
		} else {
			console.log(`${name} stop clicking me`);
		}
	};
	const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

	const handleClick3 = (e) => (e.target.textContent = "Ouch");

	//return <button onClick={() => handleClick("Ruslane")}>Click Me!</button>;
	return <button onClick={(e) => handleClick3(e)}>Click Me!</button>;
}

export default Button;

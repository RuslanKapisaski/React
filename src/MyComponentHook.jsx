//hooks
import React, { useState } from "react";
function MyComponentHook() {
	
     const [name, setName] = useState("Guest"); //returns array with 2 elements. A varaible and a setter function
	const [age, setAge] = useState(0);
	const [isEmplyoed, setIsEmployed] = useState(false);
	
    const updateName = () => {
		setName("Spongebob");
	};

	const incrementAge = () => {
		setAge(age + 1);
	};

	const toggleEmployStatus = () => {
		setIsEmployed(!isEmplyoed);
	};
	return (
		<div>
			<p>Name: {name}</p>
			<button onClick={updateName}>Set name</button>

			<p>Age: {age}</p>
			<button onClick={incrementAge}>Increment Age</button>

			<p>Is employed: {isEmplyoed ? "Yes" : "No"}</p>
			<button onClick={toggleEmployStatus}>Increment Age</button>
		</div>
	);
}

export default MyComponentHook;

import React, { useState } from "react";
function UpdateArrInState() {
	//array of objects
	const [cars, setCars] = useState([]);
	const [carYear, setCarYear] = useState(new Date().getFullYear());
	const [carMake, setCarMake] = useState("");
	const [carModel, setCarModel] = useState("");

	function handleAddCar() {
		const newCar = { year: carYear + " ", make: carMake, model: carModel };
		setCars((c) => [...c, newCar]);

		setCarYear(new Date().getFullYear());
		setCarMake("");
		setCarModel("");
	}
	function handleRemoveCar(index) {
		setCars((c) => c.filter((element, i) => i !== index));
	}
	function handleCarYearChange(event) {
		setCarYear(event.target.value);
	}
	function handleCarMakeChange(event) {
		setCarMake(event.target.value);
	}
	function handleCarModelChange(event) {
		setCarModel(event.target.value);
	}

	return (
		<div>
			<h2>List of Car Objects</h2>

			<ol>
				{cars.map((car, index) => (
					<li key={index} onClick={() => handleRemoveCar(index)}>
						{car.year}
						{car.make}
						{car.model}
					</li>
				))}
			</ol>

			<input
				type="number"
				value={carYear}
				onChange={handleCarYearChange}
				placeholder="Enter car year"
			/>
			<br />
			<input
				type="text"
				value={carMake}
				onChange={handleCarMakeChange}
				placeholder="Enter car make"
			/>
			<br />
			<input
				type="text"
				value={carModel}
				onChange={handleCarModelChange}
				placeholder="Enter car model"
			/>
			<br />

			<button onClick={handleAddCar}>ADD CAR</button>
		</div>
	);
}

export default UpdateArrInState;

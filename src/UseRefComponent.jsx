import React, { useState, useEffect, useRef } from "react";
/*useRef re-renders component only once unlike useState where the component is rerendered every time  */
function UseRefComponent() {
	/*useRef returns 1 object with one property - current*/
	const inputReference1 = useRef(null);
	const inputReference2 = useRef(null);
	const inputReference3 = useRef(null);

	useEffect(() => {
		console.log("Component render");
	});

	function handleClick1() {
		inputReference1.current.focus();
		inputReference1.current.style.backgroundColor = "yellow";
		inputReference2.current.style.backgroundColor = "";
		inputReference3.current.style.backgroundColor = "";
	}
	function handleClick2() {
		inputReference2.current.focus();
		inputReference1.current.style.backgroundColor = "";
		inputReference2.current.style.backgroundColor = "yellow";
		inputReference3.current.style.backgroundColor = "";
	}
	function handleClick3() {
		inputReference3.current.focus();
		inputReference1.current.style.backgroundColor = "";
		inputReference2.current.style.backgroundColor = "";
		inputReference3.current.style.backgroundColor = "yellow";
	}

	return (
		<div>
			<button onClick={handleClick1}>Click Me 1!</button>
			<input placeholder="Type something" ref={inputReference1} />

			<button onClick={handleClick2}>Click Me 2!</button>
			<input placeholder="Type something" ref={inputReference2} />

			<button onClick={handleClick3}>Click Me 3!</button>
			<input placeholder="Type something" ref={inputReference3} />
		</div>
	);
}

export default UseRefComponent;

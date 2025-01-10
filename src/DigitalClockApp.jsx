import React, { useState, useEffect } from "react";

function DigitalClockApp() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		/*Clean up function */
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	function formatTime() {
		let hours = time.getHours();
		let minutes = time.getMinutes();
		let seconds = time.getSeconds();

		let meridiem = hours >= 12 ? "PM" : "AM";

		hours = hours % 12 || 12;

		return `${padZero(hours)}:
        ${padZero(minutes)}:
        ${padZero(seconds)} 
        ${padZero(meridiem)}`;
	}
    /* Fixing leading zero problem */  
	function padZero(x) {
		return (x < 10 ? "0" : "") + x;
	}

	return (
		<div className="clock-conatiner">
			<div className="clock">
				<span>{formatTime()}</span>
			</div>
		</div>
	);
}

export default DigitalClockApp;

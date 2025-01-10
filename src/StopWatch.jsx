import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
	const [isRunning, setIsRunning] = useState(false);
	const [elapsedTime, setElapsedTime] = useState(0);
	const intervalRef = useRef(null);
	const startTimeRef = useRef(0);

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setElapsedTime(Date.now() - startTimeRef.current);
			}, 10);
		}
		/*Clearing function*/
		return () => {
			clearInterval(intervalRef.current);
		};
	}, [isRunning]);

	function start() {
		setIsRunning(true);
		startTimeRef.current = Date.now() - elapsedTime;
		console.log(2024 - startTimeRef.current / 3_600_000 / 24 / 365);
	}
	function stop() {
		setIsRunning(false);
	}

	function reset() {
		setElapsedTime(0);
		setIsRunning(false);
	}

	function zeroFormat(x) {
		return (x < 10 ? "0" : "") + x;
	}
	function format() {
		let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
		let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
		let seconds = Math.floor((elapsedTime / 1000) % 60);
		let milSeconds = Math.floor((elapsedTime % 1000) / 10);

		return `${zeroFormat(hours)}:
		${zeroFormat(minutes)}:
		${zeroFormat(seconds)}:
		${zeroFormat(milSeconds)}`;
	}

	return (
		<div className="stop-watch">
			<div className="display">{format()}</div>
			<div className="controlls">
				<button className="start-btn" onClick={start}>
					Start
				</button>
				<button className="stop-btn" onClick={stop}>
					Stop
				</button>
				<button className="reset-btn" onClick={reset}>
					Reset
				</button>
			</div>
		</div>
	);
}

export default StopWatch;

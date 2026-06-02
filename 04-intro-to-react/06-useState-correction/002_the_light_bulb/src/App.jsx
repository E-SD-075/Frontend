import { useState } from 'react';
import './index.css';
import LightBulb from './components/Lightbulb';

const App = () => {
	const [isOn, setIsOn] = useState(false);
	// state to track number of times light turned on
	const [counter, setCounter] = useState(0);
	const maxTurns = 10;

	const resetBulb = () => {
		setCounter(0);
		setIsOn(false);
	};
	const toggleLight = () => {
		if (!isOn && counter >= maxTurns) {
			alert('Save some energy! Lights off for now');
			return;
		}

		if (!isOn) {
			setCounter((prev) => prev + 1);
		}

		setIsOn((prev) => !prev);
	};
	// const toggleLight = () => {
	// 	// add to count if light turned on
	// 	if (!isOn) {
	// 		if (counter < 10) {
	// 			setIsOn((prev) => !prev);
	// 			setCounter((prev) => prev + 1);
	// 		} else {
	// 			// if count is greater than or equal to 10 - lock the light off
	// 			alert('Save some energy! Lights off for now');
	// 		}
	// 	} else {
	// 		setIsOn((prev) => !prev);
	// 	}
	// };
	return (
		<>
			<button onClick={toggleLight}>
				{counter >= maxTurns && !isOn
					? 'Locked'
					: isOn
						? 'Turn off'
						: 'Turn on'}
			</button>
			<button onClick={resetBulb}>Reset</button>
			<LightBulb isOn={isOn} />
		</>
	);
};

export default App;

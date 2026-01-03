import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Keyboard from './Keyboard';
import Staff from './Staff';
import { CLEF_RANGE, Clef, Scale } from './constants';
import TimeBar, { TimeBarRef } from './TimeBar';

function getRandomIntInclusive(a: number, b: number): number {
	const min = Math.ceil(Math.min(a, b));
	const max = Math.floor(Math.max(a, b));
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {

	const [clef, setClef] = useState<Clef>(Clef.TREBLE);
	const [pressedKey, setPressedKey] = useState<number | null>(null);
	const [correctKey, setCorrectKey] = useState<number | null>(null);
	const timeBarRef = useRef<TimeBarRef | null>(null);

	const generateKey = () => {
		return getRandomIntInclusive(CLEF_RANGE[clef].min, CLEF_RANGE[clef].max);
	}
	const [noteKey, setNoteKey] = useState<number>(generateKey());

	const onKeyPressed = (pressedKey: number) => {
		if(correctKey !== null){
			return;
		}
		setPressedKey(pressedKey);
		setCorrectKey(noteKey);
		setTimeout(() => {
			setPressedKey(null);
			setCorrectKey(null);
			setNoteKey(generateKey());
			timeBarRef.current?.startAnimation();
		}, 700);
	}

	const timeOutCallback = () => {
		setCorrectKey(noteKey);
		setTimeout(() => {
			setPressedKey(null);
			setCorrectKey(null);
			setNoteKey(generateKey());
			timeBarRef.current?.startAnimation();
		}, 700);
	}

	return (
		<div className="App">
			<header className="App-header">
				<TimeBar ref={timeBarRef} stop={correctKey !== null} timeOutCallback={timeOutCallback} />
				<Staff noteKey={noteKey} clef={Clef.TREBLE} scale={Scale.C_Dur} />
				<Keyboard onKeyPressed={onKeyPressed} pressedKey={pressedKey} correctKey={correctKey} />
			</header>
		</div>
	);
}

export default App;

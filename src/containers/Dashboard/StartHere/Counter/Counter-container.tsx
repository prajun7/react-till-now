import React, { useState } from 'react';
import CounterView from './Counter-view';

const Counter: React.FC = () => {
	const[homeScore, setHomeScore] = useState<number>(0);
	const[awayScore, setAwayScore] = useState<number>(0);

	const addHomeScore = () => setHomeScore(score => score + 1);
	const removeHomeScore = () => setHomeScore(score => score - 1);
	const addAwayScore = () => setAwayScore(score => score + 1);
	const removeAwayScore = () => setAwayScore(score => score - 1);
	const clear = () => {
		setHomeScore(0);
		setAwayScore(0);
	}

	return(
		<CounterView
			homeScore={homeScore}
			addHomeScore={addHomeScore}
			removeHomeScore={removeHomeScore}
			awayScore={awayScore}
			addAwayScore={addAwayScore}
			removeAwayScore={removeAwayScore}
			clear={clear}
		/>
	);
}

export default Counter;
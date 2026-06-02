const Counter = ({ count, onIncrement, onDecrement, setCount }) => {
	return (
		<div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
			<h2>Counter</h2>
			<button
				// onClick={onDecrement}
				onClick={() => setCount((prev) => prev - 1)}
			>
				-
			</button>
			<p>{count}</p>
			<button
				onClick={() => setCount((prev) => prev + 1)}
				// onClick={onIncrement}
			>
				+
			</button>
		</div>
	);
};

export default Counter;

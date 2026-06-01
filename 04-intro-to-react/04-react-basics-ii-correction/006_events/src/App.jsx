import './index.css';

const App = () => {
	const handleClick = (e) => {
		console.log('Whatever I want.');
		alert('Hi! (or something ;)');
	};

	const handleChange = (e) => {
		console.log(e.target.value);
		if (e.target.value === 'secretcodeunlocked') {
			alert('You found the secret code! React is awesome!');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const name = e.target.elements.name.value;
		const email = e.target.elements.email.value;
		const message = e.target.elements.message.value;
		const button = e.target.elements.button;

		try {
			if (!name) throw new Error('Name is required');
			if (name.length < 2)
				throw new Error('Name must be at least 2 characters long');

			if (!email) throw new Error('Email is required');
			if (!email.includes('@')) throw new Error('Invalid email.');

			if (!message) throw new Error('Message is required');
			if (message.length < 5)
				throw new Error('Message must be at least 5 characters long');

			alert(`Thank you for submitting the form! ${name}, ${email}, ${message}`);
			const formInfo = {
				name,
				email,
				message
			};
			console.log(formInfo);
			e.target.reset();
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='App'>
			<h2>Click Event</h2>
			<button onClick={handleClick}>Click me!</button>
			<button
				onClick={(e) => {
					console.log('Whatever I want.');
					alert('Hi! (or something ;)');
				}}
			>
				Click me too!
			</button>
			<h2>Change Event</h2>
			<label>
				Try to guess the secret
				<input onChange={handleChange} type='text' name='secret' />
			</label>
			<h1>Submit Event</h1>
			<form onSubmit={handleSubmit} noValidate>
				<label>
					Name
					<input type='text' name='name' />
				</label>
				<label>
					Email
					<input type='text' name='email' />
				</label>
				<label>
					Message
					<textarea name='message' id=''></textarea>
				</label>

				<button name='button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default App;

import { useState } from 'react';

const App = () => {
	const initialState = {
		name: '',
		email: '',
		tel: '',
		message: ''
	};
	const [form, setForm] = useState(initialState);

	const handleChange = (e) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			const { name, email, tel, message } = form;

			if (!name || name.length < 2)
				throw new Error('Name cannot be blank or less than 2');
			if (!email || !email.includes('@'))
				throw new Error('Email cannot be blank and must be valid email');
			if (!tel || tel.length < 2)
				throw new Error('Telephone cannot be blank or less than 2');
			if (!message || message.length < 2)
				throw new Error('Message cannot be blank or less than 2');

			console.log(form);
			setForm(initialState);
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					width: '25%'
				}}
			>
				<label>
					Name:
					<input
						value={form.name}
						onChange={handleChange}
						type='text'
						name='name'
					/>
				</label>
				<label>
					Email:
					<input
						value={form.email}
						onChange={handleChange}
						type='email'
						name='email'
					/>
				</label>
				<label>
					Telephone:
					<input
						value={form.tel}
						onChange={handleChange}
						type='tel'
						name='tel'
					/>
				</label>
				<label>
					Message:
					<textarea
						value={form.message}
						onChange={handleChange}
						name='message'
					></textarea>
				</label>
				<button type='submit'>Send</button>
			</form>
		</div>
	);
};

export default App;

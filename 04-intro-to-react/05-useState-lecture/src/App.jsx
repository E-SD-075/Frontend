import { useState } from 'react';

import { ducksInThePond } from './data/ducks';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Pond from './components/Pond';
import DuckForm from './components/DuckForm';
import Footer from './components/Footer';

function App() {
	const [ducks, setDucks] = useState(ducksInThePond);
	return (
		<div className='bg-slate-600 text-gray-300 flex flex-col min-h-screen'>
			<Navbar />
			<main className='grow flex flex-col justify-between py-4'>
				<Header />
				<Pond ducks={ducks} />
				<DuckForm setDucks={setDucks} />
			</main>
			<Footer />
		</div>
	);
}

export default App;

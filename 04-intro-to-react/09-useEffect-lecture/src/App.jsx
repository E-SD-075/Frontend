import { useState, useEffect } from 'react';

import { getDucks } from './data/ducks';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Pond from './components/Pond';
import DuckForm from './components/DuckForm';
import Footer from './components/Footer';

function App() {
	const [ducks, setDucks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// const getAndSetDucks = async () => {
		// 	const allDucks = await getDucks();
		// 	setDucks(allDucks);
		// };
		// getAndSetDucks();
		setLoading(true);

		const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

		const abortController = new AbortController();
		(async () => {
			try {
				await sleep(2000);
				const allDucks = await getDucks(abortController);
				setDucks(allDucks);
			} catch (error) {
				if (error.name === 'AbortError') {
					console.log('Fetch aborted');
				} else {
					console.error(error);
					setError('Error bringing ducks to the pond');
				}
			} finally {
				setLoading(false);
			}
		})();

		console.log('useEffect ran');

		return () => {
			abortController.abort();
		};
	}, []);

	return (
		<div className='bg-slate-600 text-gray-300 flex flex-col min-h-screen'>
			<Navbar />
			<main className='grow flex flex-col justify-between py-4'>
				<Header />
				<Pond error={error} loading={loading} ducks={ducks} />
				<DuckForm setDucks={setDucks} />
			</main>
			<Footer />
		</div>
	);
}

export default App;

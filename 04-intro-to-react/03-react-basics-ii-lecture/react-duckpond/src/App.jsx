import Navbar from './components/Navbar';
import Header from './components/Header';
import Pond from './components/Pond';
import DuckForm from './components/DuckForm';
import Footer from './components/Footer';

function App() {
	const isSignedIn = false;
	return (
		<div className='bg-slate-600 text-gray-300 flex flex-col min-h-screen'>
			<Navbar isSignedIn={isSignedIn} />
			<main className='flex-grow flex flex-col justify-between py-4'>
				<Header />
				<Pond />
				<DuckForm />
			</main>
			<Footer />
		</div>
	);
}

export default App;

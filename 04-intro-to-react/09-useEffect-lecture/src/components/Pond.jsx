import DuckCard from './DuckCard';

const Pond = ({ ducks, loading, error }) => {
	console.log(loading);
	return (
		<section
			id='pond'
			className='flex justify-center flex-wrap gap-4 p-4 w-full'
		>
			{loading && <p className='text-center font-medium'>Loading...</p>}
			{error && (
				<p className='text-center text-red-500 font-semibold'>{error}</p>
			)}
			{!loading &&
				!error &&
				ducks.map((duck) => (
					<DuckCard /*duck={duck}*/ key={duck._id} {...duck} />
				))}
			{/* <DuckCard {...singleDuck} prop2="I'm here too!" /> */}
		</section>
	);
};

export default Pond;

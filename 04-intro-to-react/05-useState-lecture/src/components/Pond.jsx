import DuckCard from './DuckCard';

const Pond = ({ ducks }) => {
	return (
		<section
			id='pond'
			className='flex justify-center flex-wrap gap-4 p-4 w-full'
		>
			{ducks.map((duck) => (
				<DuckCard /*duck={duck}*/ key={duck._id} {...duck} />
			))}
			{/* <DuckCard {...singleDuck} prop2="I'm here too!" /> */}
		</section>
	);
};

export default Pond;

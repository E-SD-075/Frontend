const Graduate = ({ graduate }) => {
	if (graduate) {
		return <p className='text-md'>graduated</p>;
	}

	return <p className=''>enrolled</p>;
};

export default Graduate;

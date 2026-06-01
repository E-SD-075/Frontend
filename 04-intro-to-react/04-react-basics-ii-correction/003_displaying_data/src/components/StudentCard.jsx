const StudentCard = ({ student }) => {
	return (
		<div className='card'>
			<img
				src={student.picture}
				alt={`${student.firstName} ${student.lastName}`}
			/>
			<div className='card-body'>
				<h2>
					{student.firstName} {student.lastName}
				</h2>
				<p>Age: {student.age}</p>
				<p>City: {student.city}</p>
				<p>Course: {student.course}</p>
			</div>
		</div>
	);
};

export default StudentCard;

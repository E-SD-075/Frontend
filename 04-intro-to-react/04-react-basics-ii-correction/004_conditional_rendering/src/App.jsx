import './index.css';
import Student from './components/Student';

// Download the template to get started
const studentData = {
	firstName: 'Testy',
	lastName: 'McTest',
	age: 42,
	course: 'Web Development',
	city: 'Berlin',
	picture: 'https://randomuser.me/api/portraits/men/1.jpg',
	gpa: 50,
	graduate: false
};

const App = () => {
	return (
		<div>
			<Student {...studentData} />
		</div>
	);
};

export default App;

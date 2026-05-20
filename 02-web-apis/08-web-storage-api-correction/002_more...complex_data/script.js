//  global variables at the top
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const reloadBtn = document.querySelector('#reload');

const getTasksFromStorage = () => {
	return JSON.parse(localStorage.getItem('tasks')) || [];
};

const createTaskLi = (newTask) => {
	const newLi = document.createElement('li');
	const newP = document.createElement('p');
	const deleteBtn = document.createElement('button');

	newLi.setAttribute('id', newTask.id);
	newLi.className = 'flex gap-4 items-baseline px-4 justify-between';

	newP.textContent = newTask.content;

	deleteBtn.textContent = 'Delete';
	deleteBtn.className =
		'mt-5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded';
	deleteBtn.addEventListener('click', (e) => {
		const tasks = getTasksFromStorage();

		const updatedTasks = tasks.filter((task) => task.id !== newTask.id);

		localStorage.setItem('tasks', JSON.stringify(updatedTasks));

		e.target.parentElement.remove();
	});
	newLi.appendChild(newP);
	newLi.appendChild(deleteBtn);

	return newLi;
};

const tasksOnLoad = getTasksFromStorage();

tasksOnLoad.forEach((task) => {
	const taskLi = createTaskLi(task);
	ul.appendChild(taskLi);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const userInput = form.querySelector('#userInput');
	const userInputValue = userInput.value.trim();
	const tasks = getTasksFromStorage();

	try {
		if (!userInputValue) throw new Error('Cannot submit an empty task!');
		const newTask = {
			id: 'task-' + crypto.randomUUID().replaceAll('-', ''),
			content: userInputValue
		};
		console.log(newTask);
		const updatedTasks = [newTask, ...tasks];
		localStorage.setItem('tasks', JSON.stringify(updatedTasks));

		const newLi = createTaskLi(newTask);

		ul.appendChild(newLi);

		e.target.reset();
	} catch (error) {
		alert(error.message);
	}
});

reloadBtn.addEventListener('click', () => {
	window.location.reload();
});

// 1.  **HTML Structure**:
//     *   Use the provided HTML structure which includes three buttons and an empty `ul` element.
// const addBtn = document.getElementById('add-item-btn');
const addBtn = document.querySelector('#add-item-btn');
const alertBtn = document.querySelector('#alert-btn');
const logBtn = document.querySelector('#console-btn');
const itemList = document.querySelector('#item-list');

// 2.  **JavaScript Tasks**:
//     *   Attach an event to the first button to create a new `li`
// in the `ul` with a random task from the provided array.
// Array of 10 random tasks as strings
const tasks = [
	'Complete the project',
	'Attend the meeting',
	'Write a report',
	'Review the code',
	'Fix the bugs',
	'Update the documentation',
	'Plan the next sprint',
	'Conduct user testing',
	'Optimize the performance',
	'Design'
];

//         *   Make sure you scroll to the last task so the last one is always visible!
addBtn.addEventListener('click', () => {
	const randomIndex = Math.floor(Math.random() * tasks.length);
	// console.log(randomIndex);
	const newTask = document.createElement('li');
	newTask.textContent = tasks[randomIndex];
	itemList.appendChild(newTask);
	newTask.scrollIntoView();
});
//     *   Attach an event to the second button to display an alert with a custom message.
alertBtn.addEventListener('click', () => alert('Do you feel alert?'));

//     *   Attach an event to the third button to output a custom message to the console.
logBtn.addEventListener('click', () => console.log('Dev secrets!'));

// What would happen if instead of `element.addEventListener('click', listener)` you would  do `element.onclick = listener`? What are the differences?

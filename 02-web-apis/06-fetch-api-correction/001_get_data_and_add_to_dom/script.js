// *   **Fetch Data**: Write JavaScript to fetch todos from the JSON Placeholder API, we want the ToDos endpoint, [you can find more about the API docs in here](https://jsonplaceholder.typicode.com).
// *   **Display Data:** Populate the DOM with the fetched todos. Pay attention to the
//  completed status of each task in the response and style it accordingly!

// **JSON Placeholder API**: A free online REST API that you can use for testing and prototyping.

// This exercise should give you a good understanding of how to work with APIs and dynamically update the DOM with JavaScript. Happy coding!
// fetch('https://jsonplaceholder.typicode.com/todos')
// 	.then((response) => response.json())
// 	.then((json) => console.log(json));

const todoList = document.querySelector('#todo-list');

const getTodos = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

	const data = await res.json();

	return data;
};

const renderTodo = (todo, container) => {
	const li = document.createElement('li');
	li.setAttribute('id', todo.id);
	li.textContent = todo.title;

	// if (todo.completed) {
	// 	li.className = 'bg-green-500 border-2 my-2';
	// } else {
	// 	li.className = 'bg-red-500 border-2 my-2';
	// }
	todo.completed
		? (li.className = 'bg-green-500 border-2 my-2')
		: (li.className = 'bg-red-500 border-2 my-2');

	container.appendChild(li);
};

const fetchAndRenderTodos = async () => {
	const allTodos = await getTodos();

	allTodos.forEach((todo) => {
		renderTodo(todo, todoList);
	});
	console.log(allTodos);
};

fetchAndRenderTodos();

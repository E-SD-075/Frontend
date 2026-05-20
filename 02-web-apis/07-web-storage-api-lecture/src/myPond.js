// create & update
// localStorage.setItem('newThing', 'Look ma, I set something in localStorage!');
// localStorage.setItem('newThing2', 'Look ma, I set something in localStorage!');
// localStorage.setItem('newThing3', 'Look ma, I set something in localStorage!');

// read
const myNewThing = localStorage.getItem('newThing');
// console.log(myNewThing);
// localStorage.setItem('newThing', 'Who am I??');
const updatedNewThing = localStorage.getItem('newThing');
// console.log(updatedNewThing);

// delete
// setTimeout(() => {
// 	localStorage.removeItem('newThing');
// 	console.log('after removing:', localStorage.getItem('newThing'));
// 	console.log('variable after removing:', myNewThing);
// }, 2000);
// localStorage.clear();

// complex data
const myPondAddForm = document.querySelector('#my-pond-add-form');
const myPond = document.querySelector('#my-pond');
const myDucksOnLoad = JSON.parse(localStorage.getItem('myDucks')) || [];

const renderSingleDuck = (duckObj, container) => {
	const { imgUrl, name, quote } = duckObj;
	const card = document.createElement('div');
	card.className =
		'shadow-xl hover:shadow-2xl hover:cursor-pointer w-96 rounded-md m-auto flex-flex-col';

	const figure = document.createElement('figure');
	figure.className = 'rounded-t-md overflow-hidden w-full h-96';
	const img = document.createElement('img');
	img.src = imgUrl;
	img.alt = name;
	figure.appendChild(img);

	const body = document.createElement('div');
	body.className = 'flex flex-col p-6 pt-2 rounded-b-md bg-slate-800 h-40';
	const title = document.createElement('h2');
	title.className = 'text-3xl border-b-2 mb-4 border-b-gray-400';
	title.textContent = name;
	const text = document.createElement('p');
	text.textContent = quote;
	body.appendChild(title);
	body.appendChild(text);

	card.appendChild(figure);
	card.appendChild(body);

	container.appendChild(card);
};

myDucksOnLoad.forEach((duck) => renderSingleDuck(duck, myPond));

myPondAddForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const myDucks = JSON.parse(localStorage.getItem('myDucks')) || [];
	console.log(myDucks);
	const name = myPondAddForm.querySelector('#name');
	const imgUrl = myPondAddForm.querySelector('#img-url');
	const quote = myPondAddForm.querySelector('#quote');

	try {
		if (!name.value.trim()) {
			throw new Error('Name is required!');
		}
		if (!imgUrl.value.trim()) {
			throw new Error('Name is required!');
		}
		if (!quote.value.trim()) {
			throw new Error('Name is required!');
		}

		const newDuck = {
			_id: crypto.randomUUID(),
			name: name.value,
			imgUrl: imgUrl.value,
			quote: quote.value
		};

		const updatedDucks = [...myDucks, newDuck];

		// localStorage.setItem('newDuck', JSON.stringify(newDuck));
		localStorage.setItem('myDucks', JSON.stringify(updatedDucks));
		renderSingleDuck(newDuck, myPond);
		e.target.reset();
	} catch (error) {
		alert(error.message);
	}
});

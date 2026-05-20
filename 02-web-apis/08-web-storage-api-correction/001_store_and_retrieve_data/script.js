// 1.  From the boilerplate, get the contents of the input once the form is submitted.
// select the form element

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const reloadBtn = document.querySelector('#reload');
const getStoredQuotes = () => {
	return JSON.parse(localStorage.getItem('quotes')) || [];
};

const quotesOnPageLoad = getStoredQuotes();

// 2.  Make sure that when the document loads, you populate the contents of your storage item into the list.
// You can try to add an event listener of type `load` to the window itself!
quotesOnPageLoad.forEach((quote) => {
	const li = document.createElement('li');
	li.textContent = quote;
	ul.appendChild(li);
});

// console.log(form);
form.addEventListener('submit', (e /*short for event*/) => {
	e.preventDefault();
	const messageInput = document.querySelector('#userInput');
	const messageInputValue = messageInput.value.trim();
	// quotes
	const quoteArray = getStoredQuotes();
	console.log(quoteArray);
	console.log(messageInput.value);
	try {
		// 2.  Make sure the input is not empty before saving!
		if (!messageInputValue) {
			throw new Error('Cannot submit an empty quote!');
		}
		// 1.  Every time you hit the "Submit" button, add a new list item to the empty `ul`.
		// Make sure the new item is at the top!
		// 1.1 create a new list item
		const li = document.createElement('li');
		// 1.2 set the text content to the message input's value
		li.textContent = messageInputValue;
		// 1.3 add the list item as a child of the ul
		ul.prepend(li);
		// ul.insertBefore(li, ul.firstChild);
		// 3.  Store this value in `localStorage` as part of an array.
		// Store the new value at the beginning of the array!
		// quoteArray.unshift(messageInput.value.trim());
		const updatedQuotes = [messageInputValue, ...quoteArray];
		console.log(updatedQuotes);
		localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
		// 4.  Reset the form
		e.target.reset();
		// could also work
		// form.reset();
	} catch (error) {
		alert(error.message);
	}
});

// Reload:

// 1.  Just because we can. Add an event to the `reload` button so it [reloads the preview](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload). Your store data should reload too!

// **Tip:** Verify the Storage section in the browser's developer tools to make sure the data is there!
reloadBtn.addEventListener('click', () => {
	window.location.reload();
});

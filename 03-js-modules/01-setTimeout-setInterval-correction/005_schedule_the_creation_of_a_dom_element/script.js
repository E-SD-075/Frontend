// *   Use `setTimeout` to schedule the creation of a promotion message after 3 seconds.
// const showMessage = () => {
// 	const messageContainer = document.querySelector('#message-container');
// 	// *   Add some text to the promotion message, like "Special Offer: Get 20% off your next purchase!".
// 	let textNode = document.createTextNode(
// 		'Special Offer: Get 20% off your next purchase!'
// 	);
// 	// *   Create a new DOM element (e.g., a `<div>`) for the promotion message.
// 	let divContainer = document.createElement('div');
// 	divContainer.appendChild(textNode);
// 	// *   Use Tailwind CSS to style the message with a background color, padding, rounded corners, and centered text.
// 	divContainer.classList =
// 		'mt-5 px-4 py-2 bg-red-500 hover:bg-blue-400 text-white rounded';
// 	// *   Append the new element to the `message-container` div.
// 	messageContainer.appendChild(divContainer);
// };
// setTimeout(showMessage, 3000);

const messageContainer = document.querySelector('#message-container');

setTimeout(() => {
	const h2 = document.createElement('h2');
	h2.textContent = 'Special Offer: Get 20% off your next purchase!';
	h2.className =
		'bg-red-500 text-white p-4 rounded-lg shadow-lg max-w-md mx-auto';

	messageContainer.appendChild(h2);
}, 3000);

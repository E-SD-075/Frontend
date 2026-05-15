// *   Add an event listener to handle form submission.

//     *   [Make sure to toggle the error and success
// styles](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)!
//     *   Clear the form fields

//  In a real-life scenario, we would use the yet another Web API to send the data from the form over the network to store the data, sign up an user, create an order, process a payment and a very long et cetera, that other Web API is called **Fetch API**. We will talk about it very soon!
const contactForm = document.querySelector('#contact-form');
const output = document.querySelector('#output');
console.log(output);

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();
	// console.log(e.target.elements);

	const nameInput = contactForm.querySelector('#name');
	const emailInput = contactForm.querySelector('#email');
	const messageTextArea = contactForm.querySelector('#message');

	const name = nameInput.value.trim();
	const email = emailInput.value.trim();
	const message = messageTextArea.value.trim();
	try {
		// *   Validate that all fields are not empty.
		if (!name) {
			throw new Error('Name is required!');
		}
		if (!email) {
			throw new Error('Email is required!');
		}
		if (!message) {
			throw new Error('Message is required!');
		}
		//     *   If validation passes, output the form data to the console and
		//  display it in the `p` element as a list (`ul`)
		console.log(name, email, message);
		output.innerHTML = `<ul>
    <li>Name: ${name}</li>
    <li>Email: ${email}</li>
    <li>Message: ${message}</li>
    </ul>`;
		output.classList.remove('bg-red-500');
		output.classList.add('bg-green-500');

		e.target.reset();
	} catch (error) {
		console.error(error);
		//     *   If not output an error message in the `p` element, style it as a
		// n error. Maybe something red and flashy?
		output.textContent = error.message;
		output.classList.remove('bg-green-500');
		output.classList.add('bg-red-500');
	}
});

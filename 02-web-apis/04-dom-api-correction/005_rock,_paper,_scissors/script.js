// 1.  **HTML with Tailwind CSS:**

//     *   A card at the top to display the score (User vs. Computer).
//     *   A card with three buttons for selecting Rock, Paper, or Scissors.
//     *   An empty card to display the result of each round.
//     *   A button to play the round.
// 2.  **JavaScript:**

let playerChoice = '';
//     *   Listen for a click on the play button.
const playBtn = document.querySelector('#play-button');
const choiceBtns = document.querySelectorAll('#selection button');
const resultDiv = document.querySelector('#result');
console.log(choiceBtns);

playBtn.addEventListener('click', () => {
	//     *   Check if the user selected something; if not, alert the user.
	// if (!playerChoice) {
	// 	return alert('Make a selection!');
	// }
	// curly brackets optional for a one-line if statement
	if (!playerChoice) return alert('Make a selection!');
	resultDiv.textContent = 'Here is where the result of the game will go!';
});
//     *   Mark the user selected button in some way.
choiceBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		console.log(e.target.id);
		playerChoice = e.target.id;

		e.target.classList.add('border-black', 'border-2');

		for (const otherBtn of choiceBtns) {
			if (otherBtn.id !== playerChoice)
				otherBtn.classList.remove('border-black', 'border-2');
		}
	});
});
//     *   Randomly select Rock, Paper, or Scissors for the computer.
//     *   Compare the user's selection with the computer's selection.
//     *   Display the result in the output area.
//     *   Update the score and the DOM accordingly.

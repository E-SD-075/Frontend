// Schedule a fetch request
// ========================

// **Objective:** Use `setInterval` to schedule a fetch request to the Pokémon API and increment a counter. For every request,
// output an object with the name of the Pokémon and its ID.

// **Instructions:**

// *   Create a variable `counter` and set it to 1.
// let counter = 1;
// // *   Use `setInterval` to schedule a fetch request to the Pokémon API every second.
// const intervalId = setInterval(() => {
// 	// *   Stop the interval after 150 requests. We only want the OG Pokémon! :D
// 	if (counter > 150) {
// 		clearInterval(intervalId);
// 		return;
// 	}
// 	// *   The fetch request URL should be `https://pokeapi.co/api/v2/pokemon/` followed by the current value of `counter`.
// 	const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
// 	// *   Fetch the data and extract the Pokémon's name and ID.
// 	fetch(url)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			const pokemonInfo = {
// 				name: data.name,
// 				id: data.id
// 			};
// 			// *   Output an object with the Pokémon's name and ID to the console.
// 			console.log(pokemonInfo);
// 		})
// 		.catch((error) => console.error(error));
// 	// *   Increment the counter after each fetch request.
// 	counter++;
// }, 1000);
const getPokemon = async (pokemonId) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
	if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

	const data = await res.json();

	return data;
};
let counter = 1;
// *   Use `setInterval` to schedule a fetch request to the Pokémon API every second.
const intervalId = setInterval(async () => {
	// *   The fetch request URL should be `https://pokeapi.co/api/v2/pokemon/` followed by the current value of `counter`.
	const { name, id } = await getPokemon(counter);
	// *   Fetch the data and extract the Pokémon's name and ID.
	// const pokemon = { name: name, id: id };
	// shorthand for same meaning as line above
	const pokemon = { name, id };
	console.log(pokemon);
	// *   Increment the counter after each fetch request.
	counter++;
	// *   Stop the interval after 150 requests. We only want the OG Pokémon! :D
	if (counter > 150) clearInterval(intervalId);
}, 1000);

// demo of argument not updating variable - pass by value
// let counter = 1;

// const incrementCounter = (counterArg) => {
// 	counterArg++;
// 	console.log('counterArg:', counterArg);
// };

// incrementCounter(counter);

// console.log('counter after:', counter);

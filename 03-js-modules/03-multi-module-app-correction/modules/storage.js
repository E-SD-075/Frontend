const getCartFromStorage = () => JSON.parse(localStorage.getItem('cart')) || [];

const addToCart = (product) => {
	const currentCart = getCartFromStorage();
	const isInCart = currentCart.some(
		(itemInCart) => itemInCart.id === product.id
	);
	let updatedCart = [];

	// if item is cart already
	if (isInCart) {
		// increase the count property by 1 of our product

		updatedCart = currentCart.map((itemInCart) =>
			itemInCart.id === product.id
				? { ...itemInCart, count: itemInCart.count + 1 }
				: itemInCart
		);
		// updatedCart = currentCart.map((itemInCart) => {
		// 	// if the item's id matches the product's id - increase the count by 1
		// 	if (itemInCart.id === product.id) {
		// 		return { ...itemInCart, count: itemInCart.count + 1 };
		// 	} else {
		// 		// else leave the item as is
		// 		return itemInCart;
		// 	}
		// });
	} else {
		// else (item is not in cart)
		// add item to cart
		const newItem = { ...product, count: 1 };
		updatedCart = [...currentCart, newItem];
	}

	localStorage.setItem('cart', JSON.stringify(updatedCart));
};

// simply add item to cart
// const addToCart = (product) => {
// 	const currentCart = getCartFromStorage();

// 	const updatedCart = [...currentCart, product];

// 	localStorage.setItem('cart', JSON.stringify(updatedCart));
// };

export { getCartFromStorage, addToCart };

import { getProducts } from './modules/network.js';
import { renderProductCard } from './modules/ui.js';
// import a default export - no {}
// import getProducts from './modules/network.js';

// const productsContainer = document.getElementById('products-container');
const productsContainer = document.querySelector('#products-container');

const fetchAndRenderProducts = async () => {
	try {
		const products = await getProducts();
		console.log(products);

		products.forEach((product) => {
			renderProductCard(product, productsContainer);
		});
	} catch (error) {
		console.error(error);
	}
};

fetchAndRenderProducts();

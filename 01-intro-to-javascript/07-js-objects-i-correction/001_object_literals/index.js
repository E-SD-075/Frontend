// 1.  Create an object called `book` using object literal syntax.

// 2.  The `book` object should have the following properties:
const book = {
	//     *   `title`: a string representing the title of the book.
	title: 'Future Plan',
	//     *   `author`: a string representing the author of the book.
	author: 'Community',
	//     *   `pages`: a number representing the total pages in the book.
	pages: 55,
	//     *   `isRead`: a boolean indicating if the book has been read or not.
	isRead: true,
	// 3.  Add a method named `summary` to the `book` object. This method should return a string summarizing the book details in the format:
	//     *   `"Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]"`.
	summaryOfTheBook() {
		// let readStr;
		// if (this.isRead) {
		// 	readStr = 'Yes';
		// } else {
		// 	readStr = 'No';
		// }

		// return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${readStr}`;
		return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead ? 'Yes' : 'No'}`;
	}
};

console.log(book);
console.log(book.summaryOfTheBook());

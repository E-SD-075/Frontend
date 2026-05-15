// 1.  **Select Elements and Log to Console**:
// const somethingWithId = document.getElementById('the-id');
// const somethingWithId2 = document.querySelector('#the-id');
//     *   Select the `h1` element inside the `.hero-content` div and log it to the console.
const heroTitle = document.querySelector('.hero-content h1');
console.log(heroTitle);
console.dir(heroTitle);
//     *   Select all the `a` elements inside the `.nav-list`
// and log them to the console.
const allNavA = document.querySelectorAll('.nav-list a');
console.log(allNavA);
//     *   Select the `.btn` element and log it to the console.
const btn = document.querySelector('.btn');
console.log(btn);

// 2.  **Modify Styles**:

//     *   Change the background color of the `.header` element to `#b5651d`.
const header = document.querySelector('.header');
console.log(header);
header.style.backgroundColor = '#b5651d';
// for (const item of header) {
// }
//     *   Change the font size of the `h1` element inside the `.hero-content`
//  div to `3rem`.
heroTitle.style.fontSize = '3rem';

//     *   Change the text color of all `a` elements inside the `.nav-list`
//  to `#faf0e6`.
// for (const link of allNavA) {
// 	link.style.color = '#faf0e6';
// }
allNavA.forEach((link) => (link.style.color = '#faf0e6'));
// 3.  **Add Content**:

//     *   Select the `.hero-content` div and add a new `p`
// element with the text "Open daily from 7 AM to 9 PM." inside it.
const heroContent = document.querySelector('.hero-content');
const openP = document.createElement('p');
openP.className = 'open-info'; // for adding additional styling (optional)
openP.textContent = 'Open daily from 7 AM to 9 PM.';
heroContent.appendChild(openP);

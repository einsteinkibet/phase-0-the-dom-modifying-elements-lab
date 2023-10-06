// Write your code here!

// Remove the 'main#main' DOM node
document.querySelector('main#main').remove();

// Create a newheader variable that points to an <h1> element
const newHeader = document.createElement('h1');

// the 'newHeader'id  of the new <h1> element  has an id of 'victory'
newHeader.id = 'victory';

// Set the text content of the new <h1> element with your name in place of YOUR-NAME
newHeader.textContent = 'YOUR-NAME is the champion';
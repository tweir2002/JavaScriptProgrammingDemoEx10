// create a new div element
let newDiv = document.createElement('div');

// we can set different html attributes on the element
newDiv.setAttribitute('id', 'myDiv');

// give the div some content. add some text to the div
let divContent = document.createTextNode('We are creating a new div!');

// add the divContent to the new div
newDiv.appendChild(divContent);

// add the new div to the body of our document
document.body.appendChild(newDiv);

// create a new paragraph element
let newParagraph = document.createElement('p');
newParagraph.setAttribute('id', 'myParagraph');


newParagraph.innerHTML = '<strong>This is my paragraph</strong>';

newDiv.appendChild(newParagraph);

let myButton = document.createElement('button');
myButton.setAttribute('id', 'myButton');
myButton.setAttribute('class', 'but');
myButton.innerText = 'Click me!';

newDiv.appendChild(myButton);
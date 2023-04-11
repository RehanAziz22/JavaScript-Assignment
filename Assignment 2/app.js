// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it

function closureFunction(number) {
  return function (num) {
    console.log(num + number)
  }
}

let innerFunction = closureFunction(6)
innerFunction(5)

// =======================================================================================

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


function searchArray(array, value) {
  if (array.length === 0) {
    return false;
  }

  if (array[0] === value) {
    return true;
  }

  return searchArray(array.slice(1), value);
}

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(searchArray(array, 5)); // true
console.log(searchArray(array, 8)); // false

// =======================================================================================

// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

function create() {
  let userInput = prompt("Enter String");
  let newpara = document.createElement('p')
  newpara.textContent = userInput;

  const body = document.querySelector('body')
  body.appendChild(newpara)
}

// create()

// =======================================================================================

// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function addnewlist() {
  let userInput = prompt("Enter List Item");
  let newItem = document.createElement('li')

  newItem.textContent = userInput;

  const ul = document.querySelector('ul')
  ul.appendChild(newItem)

}

// addnewlist()

// =======================================================================================

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

// changeBackgroundColor(document.querySelector('li'),'red')


// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

function storedata(name, obj) {
  let stringify = JSON.stringify(obj)
  localStorage.setItem(name, stringify)
  console.log(name, obj)
}
let obj = {
name:"Rehan",
age:21,
gender:"male"
}
// storedata("person",obj)
// =======================================================================================

// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function storedata(name) {
  let data = localStorage.getItem(name)
  let stringify = data? JSON.parse(data):"nodata";

  console.log(stringify)
}

storedata("person")
// =======================================================================================

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.
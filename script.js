// get element by id

const title = document.getElementById("page-title");
console.log(title);

// get elements by class
const errors = document.getElementsByClassName("error"); // Returns an array of all error class
console.log(errors);

// get elements by tag name
const paras = document.getElementsByTagName("p"); // Returns an array of all the paragraph tags
console.log(paras);

// Now the issue with these getElementByClassName & getElementsByTagName is that we can't use forEach() method with these.
// So, it's better to use querySelector and querySelectorAll.
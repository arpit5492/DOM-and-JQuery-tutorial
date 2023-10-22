const anchor = document.querySelector("a");
console.log(anchor.getAttribute("href"));

anchor.setAttribute("href", "https://www.amazon.com");
anchor.innerText = 'Link to Amazon.com';

const error = document.querySelector("div.error");
console.log(error);

error.setAttribute("class", "success");

error.setAttribute("style", "color: blue;");// We can also set the color of the para element inside div using setAttribute() method

// But there is a drawback of adding styles using setAtrribute() method.
// The drawback is that it overwrites the color property and sets a property which we have set using setAtrribute() method
// We will see that in the next lesson
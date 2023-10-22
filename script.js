const anchor = document.querySelector("a");
console.log(anchor.getAttribute("href"));

anchor.setAttribute("href", "https://www.amazon.com");
anchor.innerText = 'Link to Amazon.com';

const error = document.querySelector("div.error");
console.log(error);

error.setAttribute("class", "success");

error.setAttribute("style", "color: blue;");// We can also set the color of the para element inside div using setAttribute() method
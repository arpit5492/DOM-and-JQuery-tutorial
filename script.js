const header = document.querySelector("h1");
console.log(header);

// header.setAttribute("style", "margin: 50px;"); // Using setAttribute() it overwrites the color property. This is a big drawback of setAttribute()
// Instead we can use .style property as below:
console.log(header.style);

header.style.margin = '50px';
header.style.color = 'blue';
header.style.margin = ''; // Removes the margin
header.style.fontSize = '50px';
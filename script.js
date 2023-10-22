// using innerText property

const title = document.querySelector("#page-title");
// console.log(title.innerText);
// title.innerText = 'New Title';

// using innerHTML property

// const paras = document.querySelector("p");
// console.log(paras.innerHTML);

// paras.innerHTML += "<h3>Hello world!!</h3>"; // += appends to the original tag

// const paras = document.querySelectorAll("p");
// // console.log(paras);

// paras.forEach(para => {
//     para.innerHTML += "<h3>New title</h3>";
// });

const content = document.querySelector(".content")
console.log(content);

const people = ['Rajiv', 'Rahul', 'Joseph'];
people.forEach(person => {
    content.innerHTML += `<h4>${person}</h4>`;
});




const paras = document.querySelectorAll("p");
// console.log(paras);

paras.forEach(para => {
    // console.log(para);
    if(para.textContent.includes("error")){ // textContent property shows the span element even if the display is set to "none"
        para.classList.add("error");
    }
    if(para.innerText.includes("success")){
        para.classList.add("success");
    }
});

const title = document.querySelector(".title");
title.classList.toggle("test"); //here toggle() method add the class "test"
title.classList.toggle("test"); //here toggle() method removes the class "test"

// There are three methods which we can use on classList - add(), remove() and toggle()
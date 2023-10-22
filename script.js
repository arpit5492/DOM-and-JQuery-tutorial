const paras = document.querySelectorAll("p");
// console.log(paras);

paras.forEach(para => {
    // console.log(para);
    if(para.textContent.includes("error")){
        para.classList.add("error");
    }
    else if(para.textContent.includes("success")){
        para.classList.add("success");
    }
});
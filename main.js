// დავალება 1
const bodyEl =document.body;
const modalBtnEl = document.querySelector('.modal-btn');
const section1 = document.querySelector('.section-1');
const modalEl = document.querySelector('.modal');
const closeEl = document.querySelector('.close');

modalBtnEl.addEventListener("click", ()=>{

    bodyEl.classList.add("opacity");
    section1.classList.add('disappear');
    modalEl.classList.remove('disappear')
})
closeEl.addEventListener("click", ()=>{
  
    bodyEl.classList.remove("opacity");
    section1.classList.remove('disappear');
    modalEl.classList.add('disappear')
})


// დავალება 2

const inputEl = document.getElementById('input-el');
const section2Btn = document.querySelector('.section-2-btn');


section2Btn.addEventListener("click", (e)=>
{
    e.preventDefault()
    let color = inputEl.value.toLowerCase();

    if(color==='red' || color==='green' || color==='blue' || color==='black' || color==='white'){
        bodyEl.style.backgroundColor = color;
        inputEl.value=""
    } else {
        alert('Wrong color!');
        inputEl.value=""
    }
})

// დავალება 3

const inputEl2 = document.getElementById('input-el2');
const section3Btn = document.querySelector('.section-3-btn');

section3Btn.addEventListener("click", (e)=>
{
    e.preventDefault()
    let numbersArr = inputEl2.value.split(':');
    let sum = numbersArr.reduce((acc, value) => Number(acc) + Number(value) , 0);
    
    document.querySelector(".p-3").innerText= `Average: ${sum/numbersArr.length}`;
   
})
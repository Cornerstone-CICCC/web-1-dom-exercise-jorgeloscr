// YOUR CODE HERE

const output1 = document.getElementById("output1")
const btn1 = document.querySelector("#btn1")

btn1.addEventListener("click",()=>{
    output1.style.color = "red"
})

// ------------------Exercise one---------------------------------

const output2 = document.getElementById("output2")
const btn2 = document.querySelector("#btn2")
const spanText= document.createElement("span")

spanText.style.color= "yellow"
btn2.addEventListener("click", ()=> {
    output2.append(spanText.textContent = "Hello World")
})

// --------------------------E 2-------------------------------



const pSmall = document.querySelector(".small-text")
btn3.addEventListener("click", ()=> {
    pSmall.classList.remove("small-text")
})


// / --------------------------E 3------------------------------



const btn4 = document.getElementById("btn4")
const output4 = document.querySelectorAll("output4 p")

btn4.addEventListener("click",()=>{
    output4.forEach(output => {
        output.style.color = "red"
    })
})


// / --------------------------E 4------------------------------
 
const btn5 = document.getElementById("btn5")
const output5 = document.querySelector("output5")
const inputMessage = document.getElementById("message")

btn5.addEventListener('click', ()=> {
    const message = inputMessage.value
    console.log(message)
  })
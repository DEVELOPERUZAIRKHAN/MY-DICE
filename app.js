let myDice= Math.floor(Math.random()*6)+1
let diceContainer=document.querySelector(".dice-container")
let diceCover=document.querySelector(".dice-cover")
let dice=document.querySelector(".myImg")
myDice=Math.floor(Math.random()*6)+1;
dice.src=`./images/dice${myDice}.png`
const audio =document.querySelector("audio")
let btnEl=document.querySelector(".btn")
btnEl.addEventListener("click",function() {
    audio.play()
    
    setTimeout(()=>{

        diceCover.classList.add("first-animation")
        diceCover.classList.remove("second-animation")
    
        setTimeout(()=>{
            let myDice= Math.floor(Math.random()*6)+1
    dice.src=`./images/dice${myDice}.png`
    diceCover.classList.remove("first-animation")
    diceCover.classList.add("second-animation")
        },500)
    })
    },500)


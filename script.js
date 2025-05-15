// const division = document.getElementById("division")
// let display = document.getElementById("input")
let clear = document.getElementById("clear")
let total = document.getElementById("equalTo")
let historyBtn = document.getElementById("historyBtn")
let history = []

function addNumToDisplay(val){
    return input.value = input.value + val
}



function clearVal(){
    return input.value = ""
}

function totalVal(){
    history.push (input.value)
    return input.value = eval(input.value)
}

historyBtn.addEventListeners( "click",function(){
    value.input 
})


total.addEventListener("click", totalVal)
clear.addEventListener("click", clearVal)


// const division = document.getElementById("division")
// const multiplication = document.getElementById("multiplication")
// const addition = document.getElementById("addition")
// const subtraction = document.getElementById("subtraction")

let display = document.getElementById("input")
let clear = document.getElementById("clear")
let total = document.getElementById("equalTo")


function addNumToDisplay(val){
    return input.value = input.value + val
}



function clearVal(){
    return input.value = " "
}

function totalVal(){
    return input.value = eval(input.value + val)
}




total.addEventListener("click", totalVal)
clear.addEventListener("click", clearVal)


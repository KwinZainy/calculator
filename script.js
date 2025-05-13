// const division = document.getElementById("division")
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
    return input.value = eval()
}




total.addEventListener("click", totalVal)
clear.addEventListener("click", clearVal)


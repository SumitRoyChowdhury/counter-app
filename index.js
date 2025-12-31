let decrementBtn = document.getElementsByClassName("decrement-btn")[0];
let incrementBtn = document.getElementsByClassName("increment-btn")[0];
let resetBtn = document.getElementsByClassName("reset-btn")[0];
let displayBox = document.getElementsByClassName("val")[0];
let value = 0;

decrementBtn.addEventListener("click", decrementVal);
incrementBtn.addEventListener("click", incrementVal);
resetBtn.addEventListener("click", resetVal);

function incrementVal(){
    value += 1;
    displayBox.innerText = value;
}

function decrementVal(){
    value -= 1;
    displayBox.innerText = value;
}

function resetVal(){
    value = 0;
    displayBox.innerText = value;
}
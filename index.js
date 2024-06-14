const increase = document.querySelector("#increase");

const reset = document.querySelector("#reset");

const decrease = document.querySelector("#decrease");

const counter = document.querySelector("#counter");

firstNumber=0;

function first(){

    firstNumber++;

    counter.innerHTML = firstNumber;

}

function two(){
    
    firstNumber = 0;
    
    counter.innerHTML = firstNumber;
}

function three(){

    firstNumber--;

    counter.innerHTML = firstNumber;
}
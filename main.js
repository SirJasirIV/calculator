const result = document.querySelector(".rsltarea");
const num1 = document.querySelector(".n1");
const num2 = document.querySelector(".n2");
const num3 = document.querySelector(".n3");
const num4 = document.querySelector(".n4");
const num5 = document.querySelector(".n5");
const num6 = document.querySelector(".n6");
const num7 = document.querySelector(".n7");
const num8 = document.querySelector(".n8");
const num9 = document.querySelector(".n9");
const numZero = document.querySelector(".zero");
const plus = document.querySelector(".plus");
const multi = document.querySelector(".mult")
const subtract = document.querySelector(".sub")
const divis = document.querySelector(".divi")
const equal = document.querySelector(".eq")
const clear = document.querySelector(".clear")
const scndnum = document.querySelector(".scndnum")
const header = document.querySelector(".header")

let firstNum = "";
let secondNum = "";
let secondstat = false;


function handleNumberInput(num) {
    if (!secondstat) {
        firstNum += num;
        result.textContent = firstNum;
    } else {
        secondNum += num;
        result.textContent = secondNum;
    }
    updateheader()
}

num1.addEventListener("click", () => handleNumberInput("1"));
num2.addEventListener("click", () => handleNumberInput("2"));
num3.addEventListener("click", () => handleNumberInput("3"));
num4.addEventListener("click", () => handleNumberInput("4"));
num5.addEventListener("click", () => handleNumberInput("5"));
num6.addEventListener("click", () => handleNumberInput("6"));
num7.addEventListener("click", () => handleNumberInput("7"));
num8.addEventListener("click", () => handleNumberInput("8"));
num9.addEventListener("click", () => handleNumberInput("9"));
numZero.addEventListener("click", () => handleNumberInput("0"));

// Toggle between first and second number input
scndnum.addEventListener("click", () => {
    secondstat = !secondstat;
    scndnum.textContent = secondstat ? "1st number" : "2nd number";
    result.textContent = secondstat ? secondNum || "0" : firstNum || "0";
});
function updateheader(){
if (firstNum !== ""){
    header.textContent = "Enter second number!"
    if(secondNum !== ""){
        header.textContent = "Choose an operation symbol!"
    }
}}
plus.addEventListener("click",() =>{
  let add = parseInt(firstNum) + parseInt(secondNum)
  result.textContent = add
})
subtract.addEventListener("click",() =>{
  let minus = parseInt(firstNum) - parseInt(secondNum)
  result.textContent = minus 
})
multi.addEventListener("click",() =>{
  let by = parseInt(firstNum) * parseInt(secondNum)
  result.textContent = by
})
divis.addEventListener("click",() =>{
  let division = parseInt(firstNum) / parseInt(secondNum)
  result.textContent = division
})
clear.addEventListener("click",() => {
    firstNum = "";
    secondNum = "";
    result.textContent = "0";
    header.textContent = "Enter first number!";
})
updateheader()
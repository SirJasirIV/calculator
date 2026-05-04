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
let resultant = "";
num1.addEventListener("click", () => {
 resultant += "1";
 result.textContent = resultant;
})
num2.addEventListener("click", () => {
 resultant += "2";
 result.textContent = resultant;
})
num3.addEventListener("click", () => {
 resultant += "3";
 result.textContent = resultant;
})
num4.addEventListener("click", () => {
 resultant += "4";
 result.textContent = resultant;
})
num5.addEventListener("click", () => {
 resultant += "5";
 result.textContent = resultant;
})
num6.addEventListener("click", () => {
 resultant += "6";
 result.textContent = resultant;
})
num7.addEventListener("click", () => {
 resultant += "7";
 result.textContent = resultant;
})
num8.addEventListener("click", () => {
 resultant += "8";
 result.textContent = resultant;
})
num9.addEventListener("click", () => {
 resultant += "9";
 result.textContent = resultant;
})
numZero.addEventListener("click", () => {
 resultant += "0";
 result.textContent = resultant;
})



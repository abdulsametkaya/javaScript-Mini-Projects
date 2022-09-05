let funBtn = document.querySelectorAll(".fn");
let numBtn = document.querySelectorAll(".numBtn");
var input = document.querySelector("#input");
const result = document.querySelector("#result");
const remove = document.querySelector(".remove");
const del = document.querySelector(".del");
const esittir = document.querySelector(".esittir");
const yuzde = document.querySelector(".yuzde");

let selectedOperator = "";
let num1 = "";
let num2 = "";
let numTxt = "";
let answer = 0;

numBtn.forEach((each) => {
  each.addEventListener("click", (e) => {
    numTxt = e.target.innerText;
    input.innerText += numTxt;
    num1 += numTxt;
  });
});

funBtn.forEach((each) => {
  each.addEventListener("click", (e) => {
    if (input.innerText.length > 0) {
      const funBtn = e.target.innerText;
      selectedOperator = funBtn;
      num2 = num1;
      num1 = "";
      input.innerText = "";
    }
  });
});

remove.addEventListener("click", () => {
  input.innerText = "";
  result.innerText = "0";
  selectedOperator = "";
  num1 = "";
  num2 = "";
  numTxt = "";
  answer = 0;
});

del.addEventListener("click", () => {
  let lng = input.innerText.length;
  input.innerText = input.innerText.slice(0, lng - 1);
});

esittir.addEventListener("click", () => {
  switch (selectedOperator) {
    case "+":
      answer = Number(num2) + Number(num1);
      break;
    case "-":
      answer = Number(num2) - Number(num1);
      break;
    case "/":
      answer = Number(num2) / Number(num1);
      break;
    case "x":
      answer = Number(num2) * Number(num1);
      break;
  }
  input.innerText = answer;
  num1 = answer;
  result.innerText = answer;
});

import {sumar,multiplicar} from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const sumBtn = document.querySelector("#SumBtn");
const MultBtn = document.querySelector("#MultBtn")


sumBtn.addEventListener("click", ()=>{

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  console.log("funciona")

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";

});

MultBtn.addEventListener("click", () => {

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  console.log("funciona")


  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});

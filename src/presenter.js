import multiplicar from "./sumador";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");
const MultBtn = document.querySelector("#MultBtn")

MultBtn.addEventListener("click", () => {

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  console.log("funciona")


  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});

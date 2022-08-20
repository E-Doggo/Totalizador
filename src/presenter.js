import multiplicar from "./sumador";
import {impuestar, calcularImpuesto } from "./impuesto";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const form = document.querySelector("#totalizar-form");
const rDiv = document.querySelector("#resultado-div");
const iDiv = document.querySelector('#impuesto-div');
const tDiv = document.querySelector('#total-div')
const MultBtn = document.querySelector("#MultBtn");

MultBtn.addEventListener("click", () => {

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  let mult = multiplicar(firstNumber, secondNumber);
  let imp = impuestar(1);

  rDiv.innerHTML = "<p>" + "El precio neto es: " + mult + "</p>";
  iDiv.innerHTML = "<p>" + "Impuesto CA: " + imp*100 +"%"+  "</p>";
  tDiv.innerHTML = "<p>" + "total: " + calcularImpuesto(mult, imp) +  "</p>";
  console.log('a');
});

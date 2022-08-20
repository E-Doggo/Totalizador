import multiplicar from "./sumador";
import {impuestar, calcularImpuesto } from "./impuesto";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const state = document.querySelector("#estado");
const form = document.querySelector("#totalizar-form");
const rDiv = document.querySelector("#resultado-div");
const iDiv = document.querySelector('#impuesto-div');
const tDiv = document.querySelector('#total-div')
const MultBtn = document.querySelector("#MultBtn");

MultBtn.addEventListener("click", () => {

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  let mult = multiplicar(firstNumber, secondNumber);
  let imp = impuestar(state.value);

  rDiv.innerHTML = "<p>" + "Precio neto = " + mult + "$ </p>";
  iDiv.innerHTML = "<p>" + "Impuesto "+state.value+ " (" + imp*100 +"%) = "+ multiplicar(mult, imp) + "$ </p>";
  tDiv.innerHTML = "<p>" + "Total = " + calcularImpuesto(mult, imp) +  "$ </p>";
  console.log('a');
});

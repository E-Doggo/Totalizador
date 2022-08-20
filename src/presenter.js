import multiplicar from "./sumador";
import {impuestar, calcularTotal, descuento } from "./impuesto";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const state = document.querySelector("#estado");
const form = document.querySelector("#totalizar-form");
const rDiv = document.querySelector("#resultado-div");
const iDiv = document.querySelector('#impuesto-div');
const dDiv = document.querySelector('#descuento-div');
const tDiv = document.querySelector('#total-div');
const MultBtn = document.querySelector("#MultBtn");

MultBtn.addEventListener("click", () => {

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  let mult = multiplicar(firstNumber, secondNumber);
  let desc = descuento(mult);
  let imp = impuestar(state.value);

  rDiv.innerHTML = "<p>" + "Precio neto = " + mult + "$ </p>";
  dDiv.innerHTML = "<p>" + " Descuento (" + desc*100 +"%) = "+ multiplicar(mult, desc) + "$ </p>";
  iDiv.innerHTML = "<p>" + "Impuesto "+state.value+ " (" + imp*100 +"%) = "+ multiplicar(mult, imp) + "$ </p>";
  tDiv.innerHTML = "<p>" + "Total = " + calcularTotal(mult, imp, desc) +  "$ </p>";
});

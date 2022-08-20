import multiplicar from "./sumador";
import {impuestar, calcularTotal, descuento, calcularDescuento} from "./impuesto";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
var state = document.getElementById("estado");
const form = document.querySelector("#totalizar-form");
const rDiv = document.querySelector("#resultado-div");
const iDiv = document.querySelector('#impuesto-div');
const dDiv = document.querySelector('#descuento-div');
const tDiv = document.querySelector('#total-div');
const MultBtn = document.querySelector("#MultBtn");

MultBtn.addEventListener("click", () => {

  const cant = Number.parseInt(first.value);
  const precio = Number.parseInt(second.value);

  let pedido = multiplicar(cant, precio);
  let desc = descuento(pedido);
  let totDes = calcularDescuento(pedido, desc);
  let imp = impuestar(state.value);

  rDiv.innerHTML = "<p>" + "Precio neto = " + pedido + "$ </p>";
  dDiv.innerHTML = "<p>" + " Descuento (" + desc*100 +"%) = "+ multiplicar(pedido, desc) + "$ </p>";
  iDiv.innerHTML = "<p>" + "Impuesto "+state.value+ " (" + imp*100 +"%) = "+ multiplicar(totDes, imp) + "$ </p>";
  tDiv.innerHTML = "<p>" + "Total = " + calcularTotal(pedido, imp, desc) +  "$ </p>";
});

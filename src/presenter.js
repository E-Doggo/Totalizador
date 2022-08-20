import multiplicar from "./sumador";
import impuestar from "./impuesto";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const form = document.querySelector("#totalizar-form");
const rDiv = document.querySelector("#resultado-div");
const iDiv = document.querySelector('#impuesto-div')
const MultBtn = document.querySelector("#MultBtn")

MultBtn.addEventListener("click", () => {

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  rDiv.innerHTML = "<p>" + "El precio neto es: " + multiplicar(firstNumber, secondNumber) + "</p>";
  console.log('1');
  iDiv.innerHTML = "<p>" + "Impuesto CA: " + impuestar(1)*100 +"%"+  "</p>";
  console.log('2');
});

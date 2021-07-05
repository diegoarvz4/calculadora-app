//SETUP///////////////////////////////////
const botónIgualSplit = document.getElementById("btn-split-eq");
const botónCustomSplit = document.getElementById("btn-split-cus");
const textoSección = document.getElementById("section-title");
const secciónIgualSplit = document.getElementById("area-split-eq");
const resultadoIgualSplit = document.getElementById("result-split-eq");
const secciónCustomSplit = document.getElementById("area-split-cus");

const botónCálculoIgualSplit = document.getElementById("btn-calc-split-eq");
const botónBorrarIgualSplit = document.getElementById("btn-clear-split-eq");

const inputCuentaIgual = document.getElementById("ipt-cuenta-eq");
const inputPorcentajeIgual = document.getElementById("ipt-porcentaje-eq");
const inputSplitIgual = document.getElementById("ipt-split-eq");

textoSección.innerHTML = "Elige un tipo de cálculo...";
//ACTION////////////////////////////////////

botónIgualSplit.onclick = function () {
  botónIgualSplit.classList.add("highlight");
  textoSección.innerHTML = "Cálculo Equal Split";
  botónCustomSplit.classList.remove("highlight");
  secciónIgualSplit.style.display = "block";
  secciónCustomSplit.style.display = "none";
};

botónCustomSplit.onclick = function () {
  botónCustomSplit.classList.add("highlight");
  textoSección.innerHTML = "Cálculo Custom Split";
  botónIgualSplit.classList.remove("highlight");
  secciónIgualSplit.style.display = "none";
  secciónCustomSplit.style.display = "block";
};

botónCálculoIgualSplit.onclick = function () {
  resultadoIgualSplit.innerHTML = `
  
  Propina Total: $ ${inputCuentaIgual.value * inputPorcentajeIgual.value}
  <br>
  Por Persona: $ ${
    (inputCuentaIgual.value * inputPorcentajeIgual.value) /
    inputSplitIgual.value
  }
  
  `;
};

botónBorrarIgualSplit.onclick = function () {
  inputCuentaIgual.value = "";
  inputPorcentajeIgual.value = "";
  inputSplitIgual.value = "";

  resultadoIgualSplit.innerHTML = "";
};

//SETUP///////////////////////////////////
const botónIgualSplit = document.getElementById("btn-split-eq");
const botónCustomSplit = document.getElementById("btn-split-cus");
const textoSección = document.getElementById("section-title");
const secciónIgualSplit = document.getElementById("area-split-eq");
const resultadoIgualSplit = document.getElementById("result-split-eq");
const secciónCustomSplit = document.getElementById("area-split-cus");
const resultadoCustomSplit = document.getElementById("result-split-cus");
const divCustom = document.getElementById("contiene-split-custom")

/////////

const botónCálculoIgualSplit = document.getElementById("btn-calc-split-eq");
const botónBorrarIgualSplit = document.getElementById("btn-clear-split-eq");

const inputCuentaIgual = document.getElementById("ipt-cuenta-eq");
const inputPorcentajeIgual = document.getElementById("ipt-porcentaje-eq");
const inputSplitIgual = document.getElementById("ipt-split-eq");

const inputCuentaCustom = document.getElementById("ipt-cuenta-cus");
const inputPorcentajeCustom = document.getElementById("ipt-porcentaje-cus");
const inputSplitCustom = document.getElementById("ipt-split-cus");

const botónSetupCustomSplit = document.getElementById("btn-setup-split-cus");
const botónBorrarCustomSplit = document.getElementById("btn-clear-split-eq");

var totalPropinaEqual = "0";
var totalPropinaCustom = "0";




textoSección.innerHTML = "Elige un tipo de cálculo...";
//ACTION SELECT MODE////////////////////////////////////

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

//ACTION SPLIT EQUAL////////////////////////////////////

botónCálculoIgualSplit.onclick = function () {

totalPropinaEqual = inputCuentaIgual.value * inputPorcentajeIgual.value;


  resultadoIgualSplit.innerHTML = `
  
  Propina Total: $ ${totalPropinaEqual}
  <br>
  Por Persona: $ ${
    totalPropinaEqual /
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

//ACTION SPLIT CUSTOM////////////////////////////////
botónSetupCustomSplit.onclick = function(){

totalPropinaCustom = inputCuentaCustom.value * inputPorcentajeCustom.value;

resultadoCustomSplit.innerHTML = `

  Propina Total: $ ${totalPropinaCustom}
  <br>  
  Por Persona: $ ${
    totalPropinaCustom / inputSplitCustom.value
  }
`;

divCustom.innerHTML = "";


// Crear cierta cantidad de bloques de input de acuerdo
// al número ingresado en "¿SPLIT entre cuántos?"
// y
//// Agregar id's "secuenciales" a dichos inputs
for (let i=0; i < inputSplitCustom.value; i++){


  
divCustom.insertAdjacentHTML('beforeend', `

<div class="row">
          <div class="col-6">
            <p>Pago Comensal ${i+1}</p>
          </div>
          <div class="col-6">
            <input
              id="ipt-cus-${i+1}"
              type="number"
              inputmode="number"
              placeholder="$100.00"
            ></input>
          </div>
        </div>

`);
}

divCustom.insertAdjacentHTML("beforeend",`

<div class="row">
  <div class="col-6">
  <button class ="btn btn-info">Calcular!</button>
  </div>
</div>

`);

}


// Declarar variables "secuenciales" a dichos inputs
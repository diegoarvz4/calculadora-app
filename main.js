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
const botónBorrarCustomSplit = document.getElementById("btn-clear-split-cus");
var botónCálculoCustomSplit;

var totalPropinaEqual = "0";
var totalPropinaCustom = "0";

var comensalesConformes = "0";




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


// Crear cierta cantidad de bloques de input de acuerdo
// al número ingresado en "¿SPLIT entre cuántos?"
// y
//// Agregar id's "secuenciales" a dichos inputs
divCustom.innerHTML = "";

totalPropinaCustom = inputCuentaCustom.value * inputPorcentajeCustom.value ;

divCustom.insertAdjacentHTML("afterbegin", `
<h2>Propina total: $${totalPropinaCustom}</h2>

`);

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
  <button class ="btn btn-info" id="btn-calc-split-cus">Calcular!</button>
  </div>
</div>

`);


botónCálculoCustomSplit = document.getElementById("btn-calc-split-cus");

botónCálculoCustomSplit.onclick = function(){
comensalesConformes = 0;
  resultadoCustomSplit.innerHTML = "";

  totalPropinaCustom = inputCuentaCustom.value * inputPorcentajeCustom.value ;



  for(let j=0;j < inputSplitCustom.value; j++){

if(document.getElementById("ipt-cus-"+(j+1)).value != "" || document.getElementById("ipt-cus-"+(j+1)).value != 0){
//Si el valor de determinado input es diferente de nada o 0,
//-Registro su "número de comensal"
//-Resto del total el valor de dicho input
  resultadoCustomSplit.insertAdjacentHTML("beforeend", `
  
  Comensal ${j+1} : $ ${document.getElementById("ipt-cus-"+(j+1)).value}
  <br>
  
  `)

  totalPropinaCustom = totalPropinaCustom-document.getElementById("ipt-cus-"+(j+1)).value;

}    

if (document.getElementById("ipt-cus-"+(j+1)).value === "" || document.getElementById("ipt-cus-"+(j+1)).value === "0"){
//Si no hay valor en cierto input, suma a una variable que utilizaremos después
//para calcular la partes proporcionales del resto.
  comensalesConformes ++;
  
}

}

if(comensalesConformes == inputSplitCustom.value){
//Si todos los inputs estaban vacíos, implica que el cálculo se hace proporcionalmente
  console.log("Todos los comensales conformes: calcular partes iguales");

  resultadoCustomSplit.insertAdjacentHTML("afterbegin",`
  Partes iguales de: $${ totalPropinaCustom / inputSplitCustom.value}
  
  `);
}

 resultadoCustomSplit.insertAdjacentHTML("beforeend",`
<span style="color:red">Restante: $${totalPropinaCustom}</span>`);

  
 
  
}


}








botónBorrarCustomSplit.onclick = function(){

inputCuentaCustom.value = "";
inputPorcentajeCustom.value = "";
inputSplitCustom.value = "";

divCustom.innerHTML = "";
resultadoCustomSplit.innerHTML = "";

}
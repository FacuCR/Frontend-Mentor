'use strict';

// Acitivacion del boton reset
const btnReset = document.querySelector(".btnReset");
const inpNumPep = document.querySelector(".inpNumPep");
const inpBill = document.querySelector(".inpBill");
let tipAmount = document.querySelector(".tipAmount");
let total = document.querySelector(".total");

// Funcion para chequear que los inputs no esten vacios y habilitar el boton de reset
const ComprobarInputs = () => {   
    if (inpBill.value === "" || inpNumPep.value === "") {
        btnReset.disabled = true;
    } else {
        btnReset.disabled = false;
    }
}

inpBill.addEventListener("input", ComprobarInputs);

inpNumPep.addEventListener("input", ComprobarInputs);

btnReset.addEventListener("click", () => {
    inpBill.value = "";
    inpNumPep.value = "";
    tipAmount.innerHTML = "0.00";
    total.innerHTML = "0.00";
});

// Calculadora de la propina por personas
const CalcularPropina = () => {
    if (inpBill.value !== "" && inpNumPep.value !== "") {
        // Calculo de la propina que debe pagar cada persona
        let porcentaje = document.querySelector('input[name="btnradio"]:checked').value;
        let propina = parseFloat(inpBill.value) * porcentaje/100;
        tipAmount.innerHTML = propina;

        // Total a pagar
        total.innerHTML = parseFloat(inpBill.value) + (propina * parseInt(inpNumPep.value));
    } 
}

inpBill.addEventListener("input", CalcularPropina);
inpNumPep.addEventListener("input", CalcularPropina);

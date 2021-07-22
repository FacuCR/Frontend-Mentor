'use strict';

// Acitivacion del boton reset
const btnReset = document.querySelector(".btnReset");
const inpNumPep = document.querySelector(".inpNumPep");
const inpBill = document.querySelector(".inpBill");

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
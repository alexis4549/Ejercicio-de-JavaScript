var pacientes = document.querySelectorAll(".paciente");

function validarPeso(peso)
{
    if(peso>0 && peso<650) return true;
    else return false;
}

function validarAltura(altura)
{
    if(altura>0 && altura<2.75) return true;
    else return false;
}

function calcularIMC(peso,altura)
{
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

for(var i=0;i<pacientes.length;i++){ 
    //EXTRAEMOS ALTURA Y PESO DE HTML
    var peso = (pacientes[i].querySelector(".info-peso")).textContent;
    var altura = (pacientes[i].querySelector(".info-altura")).textContent;
    //VALIDAR ALTURA Y PESO
    if(validarAltura(altura) && validarPeso(peso))
    {
        (pacientes[i].querySelector(".info-imc")).textContent = calcularIMC(peso,altura);
    }
    else
    {
        (pacientes[i].querySelector(".info-imc")).textContent = "Altura o peso incorrectos!";
        pacientes[i].classList.add("validarValores");
    }
}



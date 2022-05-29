var input = document.querySelector("#input-filtrar");
var pacientes = document.querySelectorAll(".paciente");

input.addEventListener("input",function(){
    for(var i=0;i<pacientes.length;i++)
    {
        var nombre = pacientes[i].querySelector(".info-nombre").textContent;
        nombre = nombre.toLowerCase();
        if(!(nombre.includes(this.value.toLowerCase())))
        {
            pacientes[i].classList.add("invisible");
        }
        else
        {
            pacientes[i].classList.remove("invisible");
        }
    }
})
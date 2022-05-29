var boton = document.querySelector("#boton-actualizar");

boton.addEventListener("click",function(){
    var xhl = new XMLHttpRequest;
    var error = document.querySelector("#mensaje-ajax");
    xhl.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhl.addEventListener("load",function(){
        if(xhl.status==200){
            error.textContent = "";
            var pacientes = JSON.parse(xhl.responseText);
            for(var i=0; i< pacientes.length;i++)
            {
                asociarTabla(crearTabla(pacientes[i]));
            }
        }
        else
        {
            error.textContent = "Error al buscar pacientes";
        }
    })
    xhl.send();
})
var boton = document.querySelector("#adicionar-paciente");

class paciente
{
    constructor(pnombre, ppeso, paltura, pgordura, pimc)
    {
        this.nombre = pnombre;
        this.peso = ppeso;
        this.altura = paltura;
        this.gordura = pgordura;
        this.imc = pimc;
    }

}

function crearTD(dato,clase)
{
    var td = document.createElement("td");
    td.textContent = dato;
    td.classList.add(clase);
    return td;
}

function crearTabla(paciente1)
{
    var trpaciente = document.createElement("tr");
    trpaciente.classList.add("paciente");

    trpaciente.appendChild(crearTD(paciente1.nombre,"info-nombre"));
    trpaciente.appendChild(crearTD(paciente1.peso,"info-peso"));
    trpaciente.appendChild(crearTD(paciente1.altura,"info-altura"));
    trpaciente.appendChild(crearTD(paciente1.gordura,"info-gordura"));
    trpaciente.appendChild(crearTD(paciente1.imc,"info-imc"));
    return trpaciente;
}   

function agregarPaciente(event)
{
    event.preventDefault();

    //EXTRAEMOS LOS DATOS QUE NECESITAMOS DE HTML
    var form = document.querySelector("#form-datos");    
    var tabla = document.querySelector("#tabla-pacientes");

    var paciente1 = new paciente(form.nombre.value,form.peso.value,form.altura.value,form.gordura.value,calcularIMC(form.peso.value,form.altura.value))
    var trpaciente = crearTabla(paciente1);
    tabla.appendChild(trpaciente);
    form.reset();
}

boton.addEventListener("click",agregarPaciente);
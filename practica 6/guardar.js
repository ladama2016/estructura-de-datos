const final=document.querySelector(".guardar");
const edit=document.querySelector(".editar");

final.addEventListener("click",function(e)
{
    e.preventDefault();

    guardar();
    cargar();

});

edit.addEventListener("click",function(i)
{
    i.preventDefault();
    
    editar();

});


function guardar()
{
    const nombre = document.getElementById("nombre").value;
    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;
    const sexo = document.getElementById("sexo").value;
    const edad = document.getElementById("edad").value;
    const fecha = document.getElementById("fecha").value;
    const tipo = document.getElementById("tipo").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
   
    const nombre_f = document.getElementById("nombre_f").value;
    const first_f = document.getElementById("first_f").value;
    const second_f = document.getElementById("second_f").value;
    const parestesco_f = document.getElementById("parestesco_f").value;
    const sexo_f = document.getElementById("sexo_f").value;
    const edad_f = document.getElementById("edad_f").value;
    const fecha_f = document.getElementById("fecha_f").value;
    const tipo_f = document.getElementById("tipo_f").value;
    const telefono_f = document.getElementById("telefono_f").value;
    const direccion_f = document.getElementById("direccion_f").value;

    const enfermedad = document.getElementById("enfermedad").value;
    const tiempo = document.getElementById("tiempo").value;

    const inter = document.getElementById("inter").value;
    const centro = document.getElementById("centro").value;
    const diag = document.getElementById("diag").value;

    const personales = {"nombre":nombre,"first":first,"second":second,"sexo":sexo,"edad":edad,"fecha":fecha,"tipo":tipo,"telefono":telefono,"direccion":direccion};
    const familiares = {"nombre":nombre_f,"first":first_f,"second":second_f,"parestesco":parestesco_f,"sexo":sexo_f,"edad":edad_f,"fecha":fecha_f,"tipo":tipo_f,"telefono":telefono_f,"direccion":direccion_f};
    const condiciones = {"enfermedad":enfermedad,"tiempo":tiempo};
    const internamientos = {"inter":inter,"centro":centro,"diag":diag};


    localStorage.setItem("personales",JSON.stringify(personales));
    localStorage.setItem("familiares",JSON.stringify(familiares));
    localStorage.setItem("condiciones",JSON.stringify(condiciones));
    localStorage.setItem("internamientos",JSON.stringify(internamientos));

}

function cargar()
{
    
    const datos_personales=JSON.parse(localStorage.getItem("personales"));
    const datos_familiares=JSON.parse(localStorage.getItem("familiares"));
    const datos_condiciones=JSON.parse(localStorage.getItem("condiciones"));
    const datos_internamientos=JSON.parse(localStorage.getItem("internamientos"));

    document.getElementById("name_p").innerHTML ="<h2><h2/>"+datos_personales.nombre;
    document.getElementById("first_p").innerHTML ="<h2><h2/>"+datos_personales.first;
    document.getElementById("second_p").innerHTML ="<h2><h2/>"+datos_personales.second;
    document.getElementById("sexo_p").innerHTML ="<h2><h2/>"+datos_personales.sexo;
    document.getElementById("edad_p").innerHTML ="<h2><h2/>"+datos_personales.edad;
    document.getElementById("fecha_p").innerHTML ="<h2><h2/>"+datos_personales.fecha;
    document.getElementById("tipo_p").innerHTML ="<h2><h2/>"+datos_personales.tipo;
    document.getElementById("telefono_p").innerHTML ="<h2><h2/>"+datos_personales.telefono;
    document.getElementById("direccion_p").innerHTML ="<h2><h2/>"+datos_personales.direccion;

    document.getElementById("name_fp").innerHTML ="<h2><h2/>"+datos_familiares.nombre;
    document.getElementById("first_fp").innerHTML ="<h2><h2/>"+datos_familiares.first;
    document.getElementById("second_fp").innerHTML ="<h2><h2/>"+datos_familiares.second;
    document.getElementById("parestesco_fp").innerHTML ="<h2><h2/>"+datos_familiares.parestesco;
    document.getElementById("sexo_fp").innerHTML ="<h2><h2/>"+datos_familiares.sexo;
    document.getElementById("edad_fp").innerHTML ="<h2><h2/>"+datos_familiares.edad;
    document.getElementById("fecha_fp").innerHTML ="<h2><h2/>"+datos_familiares.fecha;
    document.getElementById("tipo_fp").innerHTML ="<h2><h2/>"+datos_familiares.tipo;
    document.getElementById("telefono_fp").innerHTML ="<h2><h2/>"+datos_familiares.telefono;
    document.getElementById("direccion_fp").innerHTML ="<h2><h2/>"+datos_familiares.direccion;

    document.getElementById("enfermedad").innerHTML ="<h2><h2/>"+datos_condiciones.enfermedad;
    document.getElementById("tiempo").innerHTML ="<h2><h2/>"+datos_condiciones.tiempo;

    document.getElementById("inter").innerHTML ="<h2><h2/>"+datos_internamientos.inter;
    document.getElementById("centro").innerHTML ="<h2><h2/>"+datos_internamientos.centro;
    document.getElementById("diag").innerHTML ="<h2><h2/>"+datos_internamientos.diag;

}

function editar()
{
    document.getElementById("name_p").innerHTML ="<input></input>";
    document.getElementById("first_p").innerHTML ="<input></input>";
    document.getElementById("second_p").innerHTML ="<input></input>";
    document.getElementById("sexo_p").innerHTML ="<input></input>";
    document.getElementById("edad_p").innerHTML ="<input></input>";
    document.getElementById("fecha_p").innerHTML ="<input></input>";
    document.getElementById("tipo_p").innerHTML ="<input></input>";
    document.getElementById("telefono_p").innerHTML ="<input></input>";
    document.getElementById("direccion_p").innerHTML ="<input></input>";

    document.getElementById("name_fp").innerHTML ="<input></input>";
    document.getElementById("first_fp").innerHTML ="<input></input>";
    document.getElementById("second_fp").innerHTML ="<input></input>";
    document.getElementById("parestesco_fp").innerHTML ="<input></input>";
    document.getElementById("sexo_fp").innerHTML ="<input></input>";
    document.getElementById("edad_fp").innerHTML ="<input></input>";
    document.getElementById("fecha_fp").innerHTML ="<input></input>";
    document.getElementById("tipo_fp").innerHTML ="<input></input>";
    document.getElementById("telefono_fp").innerHTML ="<input></input>";
    document.getElementById("direccion_fp").innerHTML ="<input></input>";

    document.getElementById("enfermedad_p").innerHTML ="<input></input>";
    document.getElementById("tiempo_p").innerHTML ="<input></input>";

    document.getElementById("inter_p").innerHTML ="<input></input>";
    document.getElementById("centro_p").innerHTML ="<input></input>";
    document.getElementById("diag_p").innerHTML ="<input></input>";

    const nombre = document.getElementById("nombre_p").value;
    const first = document.getElementById("first_p").value;
    const second = document.getElementById("second_p").value;
    const sexo = document.getElementById("sexo_p").value;
    const edad = document.getElementById("edad_p").value;
    const fecha = document.getElementById("fecha_p").value;
    const tipo = document.getElementById("tipo_p").value;
    const telefono = document.getElementById("telefono_p").value;
    const direccion = document.getElementById("direccion_p").value;
   
    const nombre_f = document.getElementById("nombre_f").value;
    const first_f = document.getElementById("first_f").value;
    const second_f = document.getElementById("second_f").value;
    const parestesco_f = document.getElementById("parestesco_f").value;
    const sexo_f = document.getElementById("sexo_f").value;
    const edad_f = document.getElementById("edad_f").value;
    const fecha_f = document.getElementById("fecha_f").value;
    const tipo_f = document.getElementById("tipo_f").value;
    const telefono_f = document.getElementById("telefono_f").value;
    const direccion_f = document.getElementById("direccion_f").value;

    const enfermedad = document.getElementById("enfermedad_p").value;
    const tiempo = document.getElementById("tiempo").value;

    const inter = document.getElementById("inter").value;
    const centro = document.getElementById("centro").value;
    const diag = document.getElementById("diag").value;

    const personales = {"nombre":nombre,"first":first,"second":second,"sexo":sexo,"edad":edad,"fecha":fecha,"tipo":tipo,"telefono":telefono,"direccion":direccion};
    const familiares = {"nombre":nombre_f,"first":first_f,"second":second_f,"parestesco":parestesco_f,"sexo":sexo_f,"edad":edad_f,"fecha":fecha_f,"tipo":tipo_f,"telefono":telefono_f,"direccion":direccion_f};
    const condiciones = {"enfermedad":enfermedad,"tiempo":tiempo};
    const internamientos = {"inter":inter,"centro":centro,"diag":diag};


    localStorage.setItem("personales",JSON.stringify(personales));
    localStorage.setItem("familiares",JSON.stringify(familiares));
    localStorage.setItem("condiciones",JSON.stringify(condiciones));
    localStorage.setItem("internamientos",JSON.stringify(internamientos));


}






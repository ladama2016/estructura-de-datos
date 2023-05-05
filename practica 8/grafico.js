const form = document.getElementById("formulario");

form.addEventListener("submit", function(event) 
{

  event.preventDefault();

  char();

});

function char(){

    var graph = document.getElementById("grafico");
   
    const bar_value1=document.getElementById("bar_value1").value;
    const bar_value2=document.getElementById("bar_value2").value;
    const bar_value3=document.getElementById("bar_value3").value;
    const bar_value4=document.getElementById("bar_value4").value;
    const bar_value5=document.getElementById("bar_value5").value;
    const bar_value6=document.getElementById("bar_value6").value;
    const bar_value7=document.getElementById("bar_value7").value;
    const bar_value8=document.getElementById("bar_value8").value;
    const bar_value9=document.getElementById("bar_value9").value;
    const bar_value10=document.getElementById("bar_value10").value;
    const bar_value11=document.getElementById("bar_value11").value;
    const bar_value12=document.getElementById("bar_value12").value;
    
    var xValues = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    var yValues = [bar_value1,bar_value2,bar_value3,bar_value4,bar_value5,bar_value6,bar_value7,bar_value8,bar_value9,bar_value10,bar_value11,bar_value12];
    var barColors = ["#ff0000","#ff8000","#ffff00","#80ff00","#00ff00","#00ff80","#00ffff","#0080ff","#0000ff","#8000ff","#ff00ff","#ff0080"];

    const data = 
    {
        labels: xValues,
        datasets: [{
            label: "Ventas del año",
            data:yValues,
            backgroundColor: barColors
        }]
    };

    const config =
    {
        type :"bar",
        data: data,

    };

    new Chart (graph,config)



}

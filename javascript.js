function recibir()
{
  var cedula=document.getElementById("id").value;
  let numero0=0;
  let numero1=0;
  let numero2=0;
  let numero3=0;
  let verificador= 0;     
  var suma=0;
  
  for (let i = 10; i>=0; i--){
    
    if (i%2!==0)
    {
      numero0=cedula[i]*=2;
    }
    
    else 
    {
      numero0=cedula[i];
    } 
    
    if (numero0>=10)
    {
      numero0=numero0.toString();
      numero1=parseInt(numero0[0]);
      numero2=parseInt(numero0[1]);
      
      numero0=numero1+=numero2;
   } 
    
    
    suma=suma+parseInt(numero0);

  }
  suma-=cedula[10];
  suma=suma*9;

  suma=suma.toString();
  numero1=parseInt(suma[0]);
  numero2=parseInt(suma[1]);
  numero3=parseInt(suma[2]);
  
  verificador=numero3;
  
  document.getElementById("respuesta").innerHTML = " se han terminado de ingresar los datos el resultado es ";
  
  if (verificador==cedula[10])
  {
    document.getElementById("respuesta").innerHTML = "el numero de cedula ingresado es correcto "; 
  }
  
  else
  {
    document.getElementById("respuesta").innerHTML = " el numero ingresado no es corrrecto.el verificaador deberia ser "+verificador;
  }
 
    
}

function borra() 
{
  

}
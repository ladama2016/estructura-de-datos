const pag = document.querySelector(".move");
const siguiente2 = document.querySelector(".siguiente-2");
const atras1=document.querySelector(".atras-1");
const siguiente3 = document.querySelector(".siguiente-3");
const atras2=document.querySelector(".atras-2");
const siguiente4 = document.querySelector(".siguiente-4");
const atras3=document.querySelector(".atras-3");
const siguiente5 = document.querySelector(".siguiente-5");
const atras4=document.querySelector(".atras-4");
const end=document.querySelector(".end");

siguiente2.addEventListener("click",function(e)
{
    e.preventDefault();

    pag.style.marginLeft = "-25%";

});


atras1.addEventListener("click",function(e)
{
    e.preventDefault();

    pag.style.marginLeft = "0%";

});

siguiente3.addEventListener("click",function(e)
{
    e.preventDefault();

    pag.style.marginLeft = "-50%";

});


atras2.addEventListener("click",function(e)
{
    e.preventDefault();

    pag.style.marginLeft = "-25%";

});

siguiente4.addEventListener("click",function(e)
{
    e.preventDefault();

    pag.style.marginLeft = "-75%";

});


atras3.addEventListener("click",function(e)
{
    e.preventDefault();

    pag.style.marginLeft = "-50%";

});

siguiente5.addEventListener("click",function(e)
{
    e.preventDefault();

    pag.style.marginLeft = "-100%";

});


atras4.addEventListener("click",function(e)
{
    e.preventDefault();

    pag.style.marginLeft = "-75%";

});
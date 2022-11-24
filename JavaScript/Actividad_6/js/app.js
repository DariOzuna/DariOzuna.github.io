//funcion que suma dos numeros.

function sumar() {
var x,y,res

x=parseInt(document.getElementById("n1").value)
y=parseInt(document.getElementById("n2").value)

sumar=parseInt(x)+parseInt(y)
document.getElementById("resultado").innerHTML="La suma es:" +sumar;
}
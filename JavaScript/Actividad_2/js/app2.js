//aplicacion para evaluar un numero entre 10 y  100

var n;

n=parseInt(prompt("digite un numero entero"));

//evaluamos el proceso numerico

if (n>=10 && n<=100) {
    document.write("El numero " +n+ " esta entre 10 y 100 ");
} else {
    document.write("El numero " +n+ " no esta entre 10 y 100");
}
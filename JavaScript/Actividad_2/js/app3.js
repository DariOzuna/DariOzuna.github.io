//aplicacion para evaluar si un numero es positivo o negativo

var num;

//capturar datos del usuario
num=parseInt(prompt("Ingrese un numero "))

//proceso para evaluar si el numero es positivo o negativo

if (num>0) {

    document.write("El numero " +num+ " es positivo")
    
} else {
    document.write("El numero " +num+ " es negativo")
}

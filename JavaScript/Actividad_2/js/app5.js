//aplicacion para evaluar si una persona es mayor o menor de edad

var edad;

//capturar datos del usuario
edad=parseInt(prompt("Ingrese la edad de la persona"))

//proceso para evaluar si es mayor o menor de edad

if (edad>=18) {

    document.write("USTED ES MAYOR DE EDAD")
    
} else {
    document.write("USTED ES MENOR DE EDAD")
}

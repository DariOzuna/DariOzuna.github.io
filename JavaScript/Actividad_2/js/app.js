
//Aplicacion para evaluar la fiebre de una persona

var temp;

//capturar los datos del usuario 
temp=parseFloat(prompt("ingrese su temperatura en grados centigrados:"));

//proceso para evaluar la fiebre 
if (temp>=38) {
    document.write("la temperatura " +temp+ " °C indica fiebre");
} else {
     document.write("la temperatura " +temp+ " °C indica que el paciente no tiene fiebre");
}
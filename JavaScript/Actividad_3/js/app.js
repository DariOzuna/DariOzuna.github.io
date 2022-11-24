


var op;
var n1, n2, resultado;

op=parseInt(prompt("Escoja una opcion del menu \n 1. Suma, \n 2. Resta, \n 3. Multiplicacion, \n 4. Division "))

switch (op) {
	case 1:
		n1=parseInt(prompt("Digite el primer numero"));
		n2=parseInt(prompt("Digite el segundo numero"));

		resultado=n1+n2
		document.write ("la suma de " +n1+ "+" +n2+ " es: "  +resultado)
		break;
	case 2:
		n1=parseInt(prompt("Digite el primer numero"));
		n2=parseInt(prompt("Digite el segundo numero"));

		resultado=n1-n2
		document.write ("la resta de " +n1+ "-" +n2+ " es: " +resultado)
		
		break;
	case 3:
		n1=parseInt(prompt("Digite el primer numero"));
		n2=parseInt(prompt("Digite el segundo numero"));

		resultado=n1*n2
		document.write ("la multiplicacion de " +n1+ "*" +n2+ " es: "  +resultado)
		
		break;
	case 4:
		n1=parseFloat(prompt("Digite el primer numero"));
		n2=parseFloat(prompt("Digite el segundo numero"));

		resultado=n1/n2
		document.write ("la division de " +n1+ "/" +n2+ " es: "  +resultado)
		break;

	default:
			document.write("Seleccione una opcion del menu");
	
		break;
		
}
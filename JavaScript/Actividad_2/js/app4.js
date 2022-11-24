//aplicacion para evaluar si los ingresos que generan una empresa es ganancia o si esta generando perdidada

//capturar datos del usuario
ingresos=parseFloat(prompt("REGISTRE AQUI LOS INGRESOS QUE GENERA"));
gastos=parseFloat(prompt("INGRESE EL VALOR DE LOS GASTOS"));

//proceso para evaluar las perdidas y ganancias}
if (ingresos>gastos) {
    document.write("SU EMPRESA HA GENERADO GANANCIAS")
} else {
    document.write("SU EMPRESA HA GENERADO PERDIDAS")
}
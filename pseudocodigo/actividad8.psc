Proceso CANCELARFACTURA
	
	Definir op, valor, descuento, resultado Como Real;
	Escribir "1.Efectivo";
	Escribir "2.tarjeta";
	Escribir "3 Nequi o DaviPlata";
	
	Escribir "ESCOJA UNA OPCION DEL MENU ";
	Leer op;
	Segun op Hacer
		1.:
			Limpiar Pantalla
			Escribir "---------------------";
			Escribir "LA FORMA DE PAGO ES EFECTIVO";
			Escribir "INGRESE EL VALOR DEL ARTICULO";
			Leer valor;
			descuento<-valor*0.15;
			resultado<-valor-descuento;
			Escribir "el descuento del articulo es de:" descuento ;
			Escribir "el total a pagar en la factura es de: " resultado;
			Esperar Tecla
			
		2.:
			Limpiar Pantalla
			Escribir "LA FORMA DE PAGO ES TARJETA";
			Escribir "---------------------";
			Escribir "INGRESE EL VALOR DEL ARTICULO";
			Leer valor;
			descuento<-valor*0.10;
			resultado<-valor-descuento;
			Escribir "el descuento del articulo es de:" descuento ;
			Escribir "el total a pagar en la factura es de: " resultado;
			Esperar Tecla
		3.:
			Limpiar Pantalla
			Escribir "LA FORMA DE PAGO ES NEQUI O DAVIPLATA";
			Escribir "---------------------";
			Escribir "INGRESE EL VALOR DEL ARTICULO";
			Leer valor;
			descuento<-valor*0.05;
			resultado<-valor-descuento;
			Escribir "el descuento del articulo es de:" descuento ;
			Escribir "el total a pagar en la factura es de: " resultado;
			Esperar Tecla
			
			
		De Otro Modo:
			Escribir "seleccione una opcion del menu";
	Fin Segun
	
FinProceso

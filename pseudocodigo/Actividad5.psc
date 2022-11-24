Proceso SueldoFinal
	//entrada
	Definir sueldo, bonificacion,descuento,transporte,fdven Como Real;
	Definir Nhijos Como Entero;
	Escribir "ingrese el sueldo base del empleado";
	leer sueldo;
	Escribir "ingrese la cantidad de hijos del empleado";
	leer Nhijos;
	//proceso
	bonificacion<- sueldo*(0.05*Nhijos);
	descuento<- sueldo*0.04;
	transporte<-sueldo*0.10;
	fdeven<-sueldo+bonificacion-descuento+transporte;
	//salida
	Escribir "la bonificacion obtenida del empleado es de;" sueldo;
	Escribir "El descuento que se le hace al empleado para la S.s es de;" descuento;
	Escribir "El auxilio de transporte que recibe el empleado es de;" transporte;
	Escribir "El suedo total de vengado que recibe el empleado es de;" fdeven;
FinProceso

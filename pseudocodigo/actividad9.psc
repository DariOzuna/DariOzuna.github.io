Proceso IMC
	
	Definir peso,estatura,formula Como Real;
	Escribir "---------------------";
	Escribir "  **MASA CORPORAL**  ";
	Escribir "---------------------";
	Escribir "INGRESE EL PESO CORPORAL DE LA PERSONA";
	Leer peso;
	Escribir "ingrese la estatura de la persona";
	Leer estatura;
	
	formula<-peso/(estatura*estatura);
	
	Si formula<18.5 Entonces
		Escribir "<<------------------------------------->>";
		Escribir "El paciente se encuentra bajo de peso ";
		Escribir "<<------------------------------------->>";
	SiNo
		Si formula>=18.5 y formula>=24.9 Entonces
			Escribir "<<---------------------------------------------------->>";
			Escribir "El paciente se encuentra con un peso corporal normal";
			Escribir "<<---------------------------------------------------->>";
		SiNo
			Si formula>=25 y formula>=29.9 Entonces
				Escribir "<<------------------------------------->>";
				Escribir "El paciente se encuentra con sobrepeso";
				Escribir "<<------------------------------------->>";
			SiNo
				Si formula>=30 y formula>=34.9 Entonces
					Escribir "<<------------------------------------->>";
					Escribir "El paciente se encuentra con obesidad";
					Escribir "<<------------------------------------->>";
				SiNo
					Si formula>=35 y formula>=39.9 Entonces
						Escribir "<<------------------------------------->>";
						Escribir "El paciente se encuentra con obesidad ll";
						Escribir "<<------------------------------------->>";
					SiNo
						Si formula>=40 y formula>=49.9 Entonces
							Escribir "<<------------------------------------->>";
							Escribir "El paciente se encuentra con obesidad lll";
							Escribir "<<------------------------------------->>";
						SiNo
							Si formula>50 Entonces
								Escribir "<<------------------------------------->>";
								Escribir "El paciente se encuentra con obesidad lV";
								Escribir "<<------------------------------------->>";
							SiNo
								Escribir "<<-------------------------------------------->>";
								Escribir "¡¡¡VERIFIQUE QUE LOS DATOS ESTEN CORRECTOS!!!";
								Escribir "<<---------------------------------------------->>";
							Fin Si
						Fin Si
					Fin Si
				Fin Si
			Fin Si
		Fin Si
	Fin Si
FinProceso


//definimos variables
var peso, estatura, imc;

//capturamos entradas
peso=parseFloat(prompt("Ingrese el peso en kilogramos"))
estatura=parseFloat(prompt("Ingrese la estatura en metros"))

//calculamos el proceso
imc=peso/(estatura*estatura)

//proceso y salida
if (imc<18.5){

    document.write("bajo peso <img src='img/bajo-peso.png' alt='bajo peso' height='50px'>")

} else if(imc>=18.5 && imc<=24.9){
    
    document.write("peso normal <img src='img/peso.png' alt='peso normal' height='50px'>")

}else if(imc>=25 && imc<=29.9){
    
    document.write("sobre peso <img src='img/sobrepeso.jpg' alt='sobrepeso' height='50px'>")

}else if(imc>=30 && imc<=34.9){
    document.write("obesidad I <img src='img/gordo.png' alt='obesidad' height='50px'>")

}else if(imc>=35 && imc<=39.9){

    document.write("obesidad II <img src='img/obesidad ii.png' alt='obesidad II' height='50px'>")

}else if(imc>=40 && imc<=49.9){
    
    document.write("obesidad III <img src='img/obesidad III.png' alt='obesidad III' height='50px'>")
}else if (imc>=50){
    
    document.write("obesidad IV <img src='img/obesidad iv.png' alt='obesidad IV' height='50px'>")

}else{
    document.write("Escriba los valores numericos esperados..")

}
//1. Solicitar los 3 números al usuario variables 
// Se usa parseFloat para asegurarnos que se traten de un número y no como texto
let num1 = parseFloat(prompt("Ingresa el primer número"));
let num2 = parseFloat(prompt("Ingresa el segundo número"));
let num3 = parseFloat(prompt("Ingresa el tercer número"));

/*Ocults el mensaje de "Espera.." html esto fue investigacion */
document.getElementById("mensaje-espera").classList.add("oculto");
/*Validacion de numeros, proceso */
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
 //    Si hay error (ej. escribieron letras), mostramos la seccion de error 
    document.getElementById("seccion-error").classList.remove("oculto");
}
//3. Identificar si los tres números son identicos 
else if (num1 === num2 && num2 === num3) {
    //<Strong> Seccion verde 
    document.getElementById("num-igual").textContent = num1;
    document.getElementById("seccion-iguales").classList.remove("oculto");


}
//4. Analizar, ordenar y mostrar los resultados (si son diferentes )
else {
    //Guardar el numero en un arreglo 
    let numeros = [num1, num2, num3];

    //Ordenar de menor a mayor 
    let ordenMenorAMayor = [...numeros].sort(function(a, b) {
        return a - b;
     });
     
    
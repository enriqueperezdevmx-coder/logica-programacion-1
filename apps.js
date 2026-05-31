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
    let ordenMayorAMenor = [...numeros].sort(function(a, b ) {
        return b-a;
    });
    
// Inyectar los valores individuales en los <span> correspondientes
    // Como ordenMayorAMenor está de mayor a menor, la posición 0 es el mayor, la 1 el centro y la 2 el menor
    document.getElementById("res-mayor").textContent = ordenMayorAMenor[0];
    document.getElementById("res-centro").textContent = ordenMayorAMenor[1];
    document.getElementById("res-menor").textContent = ordenMayorAMenor[2];
    
    // Inyectar los arreglos completos unidos por comas
    document.getElementById("res-desc").textContent = ordenMayorAMenor.join(", ");
    document.getElementById("res-asc").textContent = ordenMenorAMayor.join(", ");

    // Finalmente, quitamos la clase "oculto" a la sección de resultados para que aparezca en pantalla
    document.getElementById("seccion-resultados").classList.remove("oculto");

}



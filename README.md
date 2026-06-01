# Practicas-de-comparaci-n-de-n-meros-.js-
Este repositorio corresponde a la actividad 35.4, donde se solicita un archivo html y otro js.


Explicacion de el html
Diseño y experiencia de usuario.
Para este proyecto la interfaz se construyó bajo un "sistema de tarjetas ocultas" que reaccionan a los datos de usuarios.Dependiendo de la validación matematica en en JavaScrip, se mustra una de las siguientes tres tarjetas:

1. **Resultados del Ordenamiento :** Imprime con éxito los números ordenados tanto de *mayor a menor* como de *menor a mayor.*

2. **Alerta de Igualdad :** Una tarjeta que aparece únicamente si el sistema detecta que los tres números ingresados son *iguales.*

3. **Notificación de Error :** Una tarjeta de contingencia que le avisa al usuario si el ingreso de datos falló al escribir caracteres no numéros en los *promrts*

***Diseño de la interfaz*** 
Para el diseño visual, el archivo CSS fue estructurado para ofrecer una vista limpia, sin distracciones. El diseño simula una *tarjeta* blanca central con sombras suaves, utilizado detalles y encabezados en tonos azules que le dan un toque sencillo. lapaletas de colores son blanco, azul, negro, verde y rojo

**Codigo de Js Seccion Matematico**
1. Se declaro 3 variables (lef), para almacenar los numeros por medio de *prompt*
Ademas de que las variables tiene una funcion del tipo (parseFloat) con esta función ayuda para que el *prompt* solo reconozca números de punto flotante a comparacion de la función *(parseInt)* que esta funcion es de Números enteros.

En el codigo se encontrar fragmento como:***document.getElementById("ID")*** : Es el puente de comunicacion entre el .js, y el html. La etiqueda busca en el documento en el html.

En este otro fragmento como:***.classList.add("oculto")*** : Accede al elemento scc.

2. Filtro lógica; Una vez capturados los datos:
Se usa operador condicional*or (||)*, para evaluar, lo introducido por el usiario, y si una de las 3 opciones son *"String"*, se logra por medio de la función **(isNaN)** despues sale la tarjete del html de la seccion de error.
y epesamos por usar un *(if)*. Despues en un *(else if)* en esta decision se penso en los usuariso que ingresen numeros que son iguales, como por ejemplo *(2, 2, 2)* entonces se usar el operador logico de *AND(&&)* ```(num1===num3 && num2===num3) .classList.remove("oculto")```: Hace lo contrario a add. Le quita la "capa de invisibilidad" al contenedor en el HTML para revelar la tarjeta correspondiente (la de error o la verde de números iguales).

El bloque else y la decisión de usar Arrays (Arreglos)
Si los datos no son errores y no son idénticos, el programa cae por descarte en el bloque else. Aquí, en lugar de usar variables sueltas, se decide empaquetar los tres números dentro de un Array (let numeros = [num1, num2, num3];).

¿Por qué un Array?
Comparar tres variables individuales de forma manual requeriría múltiples bloques de código largos y propensos a errores (ej. if (num1 >= num2 && num1 >= num3)...). Al meter los valores en un contenedor Array, desbloqueamos métodos nativos de JavaScript que hacen las matemáticas pesadas por nosotros en una sola línea.

4. Ordenamiento Matemático con .sort()
JavaScript
let ordenMenorAMayor = [...numeros].sort(function(a, b) {
    return a - b;
});
[...numeros]: Crea una copia exacta del arreglo original para no modificar los datos base.

.sort(): Es un método de los Arrays que ordena elementos.

function(a, b) { return a - b; }: Por defecto, .sort() ordena alfabéticamente (lo cual pondría un "100" antes que un "2"). Al pasarle esta función, le enseñamos a restar dos números a la vez (a y b). Si el resultado del return es negativo, sabe que a es menor; si es positivo, sabe que b es menor. Así logramos un ordenamiento matemático perfecto. (Para invertir el orden de mayor a menor, simplemente se retorna b - a).

5. Extracción de Índices y el método .join()
Con la lista ordenada de mayor a menor (ordenMayorAMenor), ya no necesitamos hacer cálculos para saber cuál es el mayor o el menor . Simplemente extraemos los valores por su posición (Índice) dentro del arreglo:

Posición [0]: Siempre será el Número Mayor.

Posición [1]: Siempre será el Número del Centro.

Posición [2]: Siempre será el Número Menor.

Estos valores individuales se envían al HTML usando .textContent.

JavaScript
document.getElementById("res-desc").textContent = ordenMayorAMenor.join(", ");
El método .join(", "): Toma todos los elementos que están separados dentro de un arreglo y los fusiona en un solo texto (String), colocando el separador que le indiquemos entre comillas (en este caso, una coma y un espacio). Es ideal para imprimir arreglos completos de forma estética en la pantalla.

Esto fue por investigacion.
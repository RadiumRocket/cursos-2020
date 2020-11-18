/****************************
  1) Variables y Operadores 
*****************************/

/* a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos
números en una 3er variable.*/

var a,b,c;
a = 2;
b = 3;
c= a + b;
console.log(c);

/* b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/

var name,surname,final;
name = "Emanuel";
country = "Ginobili";
final = name + country;
console.log(final);


/* c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado la suma una 3er variable (utilizar length).*/

var firstw,secondw,thirdw;
firstw = "Hello";
secondw = "World";
thirdw = firstw.length + secondw.length;
console.log(thirdw);

/****************************
  2) Strings 
*****************************/

/* a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase).*/

var text;
text= "One of the best";
text.toUpperCase();
console.log(text.toUpperCase());

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var text2;
text2= "Number of the beast";
text2.substring (0,4);
console.log(text2.substring (0,4));

/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var text3,result;
text3= "Back in time";
result = text3.substring (9);
console.log(result);

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
toUpperCase, toLowerCase y el operador +).*/

var text4,result2;
text4 = "rUN TO THE HILLS"
result2 = text4.substring(0,1).toUpperCase() 
        + text4.substring(1).toLocaleLowerCase();
console.log(result2);

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la 
posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var text5,result3;
text5 = "Brave new world";
result3 = text5.indexOf(" ");
console.log(result3);

/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre
medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera
letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
toLowerCase y el operador +).*/

var text6,result4;
text6 = "iNDUSTRIAL eNGINEERING";
result4 = text6.substring(text6.indexOf("i"),text6.indexOf("i")+1).toUpperCase()
        + text6.substring(text6.indexOf("i")+1,10).toLocaleLowerCase()
        + " "
        + text6.substring(text6.indexOf("e"),text6.indexOf("e")+1).toUpperCase()
        + text6.substring(text6.indexOf("e")+1).toLocaleLowerCase();
console.log(result4);

/****************************
  3) Arrays
*****************************/

/* a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)*/

var months = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre","Octubre", "Noviembre", "Diciembre"];
console.log (months[4],months[10]); /* I supossed that exercise refeers to May (5) and November (11) */

/* b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log(months.sort());

/* c)Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

months.unshift("Hello");
months.push("Bye");
console.log(months.unshift("Hello"), months.push("Bye"));

/* d) Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

months.shift("Hello");
months.pop("Bye");
console.log(months.shift("Hello"),months.pop("Bye"));

/* e) Invertir el orden del array (utilizar reverse)*/

months.reverse();
console.log(months.reverse());

/* f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

months.join("-");
console.log(months.join("-"));

/* g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var monthsCopy = months.slice(4,11);
console.log(monthsCopy);

/****************************
  4) If Else
*****************************/

/* a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar
una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”*/

if (Math.random() >= 0.5) {
      console.log("Greater than 0,5");
}   else {
      console.log("Lower than 0,5");
}

/* b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
            i) “Bebe” si la edad es menor a 2 años
            ii) “Nino” si la edad es entre 2 y 12 años
            iii) “Adolecente” si la edad es entre 13 y 19 años
            iv) “Joven” si la edad está entre 20 y 30 años
            v) “Adulto” entre 31 y 60 años
            vi) “Adulto mayor” entre 61 y 75 años
            vii) “Anciano” si es mayor a 75 años*/

var Age;
Age = Math.floor(Math.random()*101);
if (Age < 2) {
    console.log("Bebe");
  } else if (Age >= 2 && Age < 12) {
    console.log("Nino");
  } else if (Age >= 13 && Age <= 19) {
    console.log("Adolescente");
  } else if (Age >= 20 && Age <= 30) {
    console.log("Joven");
  } else if (Age >= 31 && Age <= 60) {
    console.log("Adulto");
  } else if (Age >= 61 && Age < 75) {
    console.log("Adulto mayor");
  } else {
    console.log("Anciano");
};

/****************************
  5) For
*****************************/

/* a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una
alerta utilizando cada una de las palabras.*/

var words;
words = ["red","blue","orange","green","yellow"];
for (var i = 0; i <=4; i++) {
  console.log(words[i]);
}

/* b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.*/

for (var i = 0; i <=4; i++) {
  console.log(words[i].substring(0,1).toUpperCase()+words[i].substring(1).toLowerCase());
}

/* c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for 
para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

var sentence = " ";
for (var i = 0; i <=4; i++) {
  sentence += words [i] + " ";
}
console.log(sentence);

/* d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir
que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. 
Mostrar por la consola del navegador el al array final (utilizar console.log).*/

var array = [];
for (var i=0; i<=9; i++) {
  array [i]=i;
}
console.log (array);

/****************************
  6) Funciones
*****************************/

/* a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado
en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

function suma(val1,val2) {
  var sum;
  sum = val1 + val2 ;
  return (sum);
}
var val1, val2, funcResult;
val1 = 5;
val2 = 4;
funcResult = suma(val1,val2);
console.log (funcResult);

/* b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar
una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function suma(val1,val2) {
  if (typeof(val1) !== "number" || typeof(val2) !== "number") {
      console.log("One or two parameters are not numbers");
      return NaN;
    } else {
      var sum;
      sum = val1 + val2 ;
      return (sum);
    }
}
var val1, val2, funcResult;
val1 = 5;
val2 = 4;
funcResult = suma(val1,val2);
console.log (funcResult);

/* c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

function validateInteger(val3) {
  if (Number.isInteger(val3) === true) {
    return ("true");
  } else {
    return ("The parameter is not a integer value");
  }
}
var val3;
val3 = 5;
console.log (validateInteger(val3));

/* d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales
mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

function suma(val1,val2) {
  if (typeof(val1) !== "number" || typeof(val2) !== "number") {
      console.log("One or two parameters are not numbers");
      return NaN;
    } else if (Number.isInteger(val1) != true || Number.isInteger(val2) != true) {
      console.log("One or two parameters are not integer values");
      var sum;
      sum = Math.round(val1) + Math.round(val2);
      return (sum);
    } else {
      var sum;
      sum = val1 + val2 ;
      return (sum);
    }
  }
var val1, val2, funcResult;
val1 = 5;
val2 = 4;
funcResult = suma(val1,val2);
console.log (funcResult);

/* e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga
funcionando igual*/

function suma(val1,val2) {
  if (validacion(val1,val2) === "Nan") {
      return NaN;
    } else if (Number.isInteger(val1) != true || Number.isInteger(val2) != true) {
      console.log("One or two parameters are not integer values");
      var sum;
      sum = Math.round(val1) + Math.round(val2);
      return (sum);
    } else {
      var sum;
      sum = val1 + val2 ;
      return (sum);
    }
  }
function validacion(val1,val2) {
  if (typeof(val1) !== "number" || typeof(val2) !== "number") {
      console.log("One or two parameters are not numbers");
      return NaN;
  }
}
var val1, val2, funcResult;
val1 = 5;
val2 = 4;
funcResult = suma(val1,val2);
console.log (funcResult);
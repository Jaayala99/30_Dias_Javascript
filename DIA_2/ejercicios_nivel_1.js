// 1.- Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
    var desafio = "30 días de Javascript"

// 2.- Imprima la cadena en la consola del navegador usando console.log()
    console.log(desafio);

// 3.- Imprima la longitud de la cadena en la consola del navegador usando console.log()
    console.log("La longitud de la cadena es " , desafio.length);

// 4.- Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
    console.log("Si usamos ToUpperCase la cadena quedaría así " , desafio.toUpperCase());

// 5.- Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
    console.log("Si usamos ToLowerCase la cadena quedaría así " , desafio.toLowerCase());

// 6.- Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
    console.log("Si usamos el metodo substr() con la primera palabra quedaría así : " , desafio.substring(0,2));

// 7.- Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
    console.log("Si nos queremos quedar con días de JavaScript quedaría así : " , desafio.substring(2));

// 8.- Verifique si la cadena contiene una palabra Script usando el método includes()
    console.log("Usando el metodo includes() para buscar 'script' " , desafio.includes("script"));

// 9.- Divide la cadena en un array usando el método split()
    console.log("Dividiendo la cadena en un array usando el metodo split()" , desafio.split());

// 10.- 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y la cambia a una matriz.
    var empresas = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
    console.log ("Si convertimos la cadena 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' en un array y la dividmos por comas quedaría así : " , empresas.split(","));

// 11.- Cambie 30 días de JavaScript a 30 días de Python usando el método replace() .
    console.log("Si usamos el metodo replace() y cambiamos la cadena '30 dias de Javascript' a '30 dias de Phyton' quedarías así : " , desafio.replace("Javascript","Phyton"));

// 12.- ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
    console.log("Buscando el caracter numero 15 con ayuda de charAt() : " , desafio.charAt(15));

// 13.- ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
    console.log("Buscando el codigo del caracter J con ayuda de charCodeAt() :" , desafio.charCodeAt("J"));

// 14.- Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
    console.log("Usando indexof para determinar la posición de la primera aparición de a en la cadena '30 dias de Javascript' : " , desafio.indexOf("a"));

// 15.- Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
    console.log("Usando lastIndexOf para encontrar la ultima posición de a en la cadena '30 dias de Javascript' : " , desafio.lastIndexOf("a"));

// 16.- Use indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 'No puede terminar una oración con porque porque porque es una conjunción'
    var cadena = "No puede terminar una oración con porque porque porque es una conjunción"
    console.log("Buscando la primera posicion de la palabra porque en la cadena " , cadena , " con ayuda de indexOf() " , cadena.indexOf("porque"));

// 17.- Use lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración: 'No puede terminar una oración con porque porque porque es una conjunción'
    var cadena = "No puede terminar una oración con porque porque porque es una conjunción"
    console.log("Buscando la ultima posicion de la palabra porque en la cadena " , cadena , " con ayuda de lastindexOf() " , cadena.lastIndexOf("porque"));

// 18.- Use la búsqueda para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 'No puede terminar una oración con porque porque porque es una conjunción'
    console.log("Buscando la primera aparicion de la palabra porque con la ayuda de search() " , cadena.search("porque"));

// 19.- Use el método beginWith() con la cadena 30 Days Of JavaScript y haga que el resultado sea verdadero
    console.log("Usando el metodo startsWith() y haciendo que sea verdadero : " , desafio.startsWith("3"));

// 20.- Use el método beginWith() con la cadena 30 Days Of JavaScript y haga que el resultado sea falso
    console.log("Usando el metodo endsWith() y haciendo que sea falso : " , desafio.endsWith("3"));

// 21.- Use el método match() para encontrar todas las a en 30 días de JavaScript
    console.log("Buscando todas las a en la cadena '30 dias de Javascript' con ayuda del metodo match() :" , desafio.match('a'));

// 22.- Use concat() y combine '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
    var part1 = "30 dias de";
    var part2 = "Javascript";
    console.log("Concatenando variables para formar una cadena : " , part1.concat(' ' ,part2));

// 23.- Utilice el método repeat() para imprimir 30 días de JavaScript 2 veces
    console.log("Usandoi el metodo repeat() para imprimir una cadena varias veces : " , desafio.repeat(2));

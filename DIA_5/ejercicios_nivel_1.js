// 1.- Declarar una matriz vacía
    console.log("EJERCICIO 1")
    var deportes = []
    console.log(deportes)
// 2.- Declarar una matriz con más de 5 elementos
    console.log("EJERCICIO 2")
    var deportes = [
        "futbol",
        "padel",
        "tenis",
        "ping-pong",
        "baloncesto"
    ]
    console.log(deportes)
// 3.- Encuentre la longitud de su matriz
    console.log("EJERCICIO 3")
    console.log("Mostrando longitud del array : " , deportes.length);

// 4.- Obtenga el primer elemento, el elemento del medio y el último elemento de la matriz
    console.log("EJERCICIO 4")
    console.log("Mostrando el primer elemento del array el del medio y el ultimo : " , deportes[0] , deportes[2] , deportes[4]);

// 5.- Declare una matriz llamada mixedDataTypes , coloque diferentes tipos de datos en la matriz y encuentre la longitud de la matriz. El tamaño de la matriz debe ser mayor que 5
    console.log("EJERCICIO 5")
    var mixedDataTypes = [
        "Juan Antonio",
        "Ayala Garcia",
        667567844,
        "30244567F",
        1.85,
        81
    ]
    console.log(mixedDataTypes)
    console.log("El tamaño de la matriz es de : " , mixedDataTypes.length);

// 6.- Declare una variable de matriz con el nombre itCompanies y asigne valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon
    console.log("EJERCICIO 6")
    var itCompanies = [
        "Facebook",
        "Google",
        "Microsoft",
        "Apple",
        "IBM",
        "Oracle",
        "Amazon"
    ]
    

// 7.- Imprima la matriz usando console.log()
    console.log("EJERCICIO 7")
    console.log(itCompanies)

// 8.- Imprimir el número de empresas en la matriz
    console.log("EJERCICIO 8")
    console.log("En el array hay " , itCompanies.length , "empresas")

// 9.- Imprime la primera empresa, la intermedia y la última empresa
    console.log("EJERCICIO 9")
    console.log("Imprimiendo la primera empresa, la intermedia y la ultima : " , itCompanies[0] , itCompanies[3] , itCompanies[6])

// 10.- Imprime cada empresa
    console.log("EJERCICIO 10")
    console.log("Imprimiendo todas las empresas : " , itCompanies[0] , itCompanies[1] , itCompanies[2] , itCompanies[3] , itCompanies[4] , itCompanies[5] , itCompanies[6])

// 11.- Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos
    console.log("EJERCICIO 11")
    console.log("Imprimiendo todas las empresas concertidas a mayusculas")
    console.log(itCompanies[0] = itCompanies[0].toUpperCase());
    console.log(itCompanies[1] = itCompanies[1].toUpperCase());
    console.log(itCompanies[2] = itCompanies[2].toUpperCase());
    console.log(itCompanies[3] = itCompanies[3].toUpperCase());
    console.log(itCompanies[4] = itCompanies[4].toUpperCase());
    console.log(itCompanies[5] = itCompanies[5].toUpperCase());
    console.log(itCompanies[6] = itCompanies[6].toUpperCase());

    itCompanies[0] = itCompanies[0].toLowerCase();
    itCompanies[1] = itCompanies[1].toLowerCase();
    itCompanies[2] = itCompanies[2].toLowerCase();
    itCompanies[3] = itCompanies[3].toLowerCase();
    itCompanies[4] = itCompanies[4].toLowerCase();
    itCompanies[5] = itCompanies[5].toLowerCase();
    itCompanies[6] = itCompanies[6].toLowerCase();



// 12.- Imprima la matriz como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
    console.log("EJERCICIO 12")
    console.log(itCompanies[0] , itCompanies[1] , itCompanies[2] , itCompanies[3] , itCompanies[4] , itCompanies[5] , "y" , itCompanies[6] , "son grandes empresas de TI")

// 13.- Compruebe si existe una determinada empresa en la matriz itCompanies. Si existe, devuelva la empresa; de lo contrario, devuelva una empresa que no se encuentra.
    console.log("EJERCICIO 13")
    var comprobar = prompt("Introduce la empresa que desea comprobar del array")
    comprobar=comprobar.toLowerCase();
    console.log("La empresa introducida es : " , comprobar);
    console.log("¿existe? " , itCompanies.includes(comprobar))
    itCompanies.includes(comprobar)==true?console.log("La empresa seleccionada es : " , itCompanies[itCompanies.indexOf(comprobar)]):console.log("La empresa seleccionada no existe");

// 14.- Filtre las empresas que tienen más de una 'o' sin el método de filtro
    console.log("EJERCICIO 14")
    for(var i=0; i<itCompanies.length; i++){
        var empresas = itCompanies[i];
        num_letras = 0;
        for(var j=0; j<empresas.length; j++){
            if(empresas[j]=='o'){
                num_letras++;
            }
        }
        if(num_letras>=2){
            console.log("El numero de empresas que tienen mas de una letra o son : " , empresas)
        }
    }

// 15.- Ordenar la matriz usando el método sort()
    console.log("EJERCICIO 15")
    console.log(itCompanies.sort())

// 16.- Invierta la matriz usando el método reverse()
    console.log("EJERCICIO 16")
    console.log(itCompanies.reverse())

// 17.- Cortar las primeras 3 empresas de la matriz
    console.log("EJERCICIO 17")
    var eliminar_3_primeras = itCompanies.splice(0,3);
    console.log(itCompanies);

// 18.- Cortar las últimas 3 empresas de la matriz
    console.log("EJERCICIO 18")
    var eliminar_3_ultimas = itCompanies.splice(3,3);
    console.log(itCompanies);

// 19.- Eliminar la primera empresa de TI de la matriz
    console.log("EJERCICIO 19")
    var eliminar_primer_elemento = itCompanies.shift()
    console.log(itCompanies);

// 20.- Eliminar la última empresa de TI de la matriz
    console.log("EJERCICIO 20")
    var eliminar_ultimo_elemento = itCompanies.pop()
    console.log(itCompanies)

// 21.- Eliminar todas las empresas de TI
    console.log("EJERCICIO 21")
    itCompanies.push('google' , 'amazon' , 'apple' , 'ibm' , 'oracle' , 'microsoft');
    itCompanies.sort()
    console.log(itCompanies)
    var eliminar_todo = itCompanies.splice(0, itCompanies.length)
    console.log(itCompanies)

    
// 1.- Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
    console.log("EJERCICIO 1")
    console.log("Usando bucle for : ")
    for(var i=0 ; i<=10 ; i++){ 
        console.log(i)
    }

    console.log("Usando while :")
    var num=0;
    while(num<10){
        num++
        console.log(num)
    }

    console.log("Usando do-while")
    var num=0
    do{
        num++
        console.log(num)
    }while(num<10)

// 2.- Itera de 10 a 0 usando el bucle for, haga lo mismo usando los bucles while y do while
    console.log("EJERCICIO 2")
        console.log("Usando bucle for : ")
        for(var i=10 ; i>=0 ; i--){ 
            console.log(i)
        }

        console.log("Usando while :")
        var num=10;
        while(num>=0){
            console.log(num)
            num--
        }

        console.log("Usando do-while")
        var num=10
        do{
            console.log(num)
            num--
        }while(num>=0)

// 3.- Itera de 0 a n usando el bucle for
        console.log("EJERCICIO 3")
        var n = 22
        for(var i = 0 ; i <=n ; i++){
            console.log(i)
        }

/* 4.- Escribe un bucle que haga el siguiente patrón usando console.log():</p>

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/ 
        console.log("EJERCICIO 4")
        var cadena = ""
        var signo = "#"
        for ( var i = 0 ; i<=7 ; i++){
            cadena = signo.repeat(i)
            console.log(cadena)
        }

/* 5.- Usa un bucle para imprimir el siguiente patrón:</p>
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
*/ 
        console.log("EJERCICIO 5 ")
        var numero = 0;
        for (var i =0 ; i<=10 ; i++){
            numero=i
            console.log(numero , "x" , numero , "=" , numero*numero)
        }

/* 6.- Usando un bucle, imprime el siguiente patrón:</p>

    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
*/  
        console.log("EJERCICIO 6")
            var numero = 0
            for(i=0 ; i<=10 ; i++){
                numero=i
                console.log(numero , numero**2 , numero**3);
            }

// 7.- Usa el bucle para iterar de 0 a 100 e imprimir solo números pares
    console.log("EJERCICIO 7")
    console.log("Imprimiendo los numeros pares de 0 a 100")
    for (var i = 0 ; i<=100 ; i++){
        i%2==0?console.log(i):console.log("")
    }

// 8.- Usa el bucle para iterar de 0 a 100 e imprimir solo números impares
    console.log("EJERCICIO 8")
    console.log("Imprimiendo los numeros impares de 0 a 100")
    for (var i = 0 ; i<=100 ; i++){
        i%2!=0?console.log(i):console.log("")
    }

// 9.- Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los números.
    console.log("EJERCICIO 9")
    console.log("Imprimiendo los la suma de todos los numeros de 0 a 100")
    var suma =0
    for (var i = 0 ; i<=100 ; i++){
        suma += i  
    }
    console.log(suma)
    
// 10 .- Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
    console.log("EJERCICIO 10")
    console.log("Imprimiendo la suma de los numeros pares de 0 a 100")
    var par = 0
    for (var i = 0 ; i<=100 ; i++){
        if(i%2==0){
            par += i
            
        }
        
    }console.log(par)

    console.log("Imprimiendo la suma de los numeros impares de 0 a 100")
    var impar = 0
    for (var i = 0 ; i<=100 ; i++){
        if(i%2!=0){
            impar += i
            
        }
        
    }console.log(impar)


// 11 .- Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array
    console.log("EJERCICIO 11")
    console.log("Imprimiendo la suma de los numeros pares e impares de la suma de los numeros de 0 a 100 como un array")

    var num_array = [
        par,
        impar
    ]

    console.log(num_array)

// 12 .- Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
    console.log("EJERCICIO 12")
    var numeros = [] 
    var contador = 0;
    while(contador<5){
        numeros.unshift(Math.random())
        contador++
    } console.log(numeros)

// 13.- Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:
    console.log("EJERCICIO 13")
    var letra = ""
    var cadena = ""
    var caracteres = 0;
    var letras_numeros = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789"
    var numeros = Math.round(Math.random()*9)

    while(caracteres<6){
        var letra = letras_numeros.charAt(Math.round(Math.random()*letras_numeros.length))
        var cadena = cadena + letra
        caracteres++;
    }console.log(cadena)
    

// 1.- Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
    console.log("EJERCICIO 1")
    var edad = prompt("Ingrese su edad");
    console.log("La edad introducida es de : " , edad);

    edad>=18 ? console.log("Tiene la edad suficiente para conducir") : console.log("Eres menor de edad, debes esperar a los 18"); 

// 2.- Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Use prompt(“Ingrese su edad:”) para obtener la edad como entrada.
    console.log("EJERCICIO 2");
    var mi_edad = prompt("Introtuce tu edad");
    var tu_edad = prompt("Introduce la edad de otra persona");

    console.log("Tu edad es de : " , mi_edad);
    console.log("La segunda edad es de : " , tu_edad);

    if(mi_edad>tu_edad){
        console.log("Eres mayor que la otra persona");
    }
    if(mi_edad=tu_edad){
        console.log("Teneis la misma edad");
    }
    else{
        console.log("La segunda persona es mayor que tú");
    }

// 3.- Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes
    console.log("EJERCICIO 3");
    var valor_a = prompt("Introduce valor de a");
    var valor_b = prompt("Introduce valor de b");
    console.log("El valor introducido de a es : " , valor_a);
    console.log("El valor introducido para b es : " , valor_b);
    //Usando if
    if(valor_a>valor_b){
        console.log("A es mayor que B (usando if-else)");
    }else{
        console.log("B es mayor que A (usando if-else)");
    }
    //Usando operador ternario
    valor_a>valor_b? console.log("A es mayor que B (usando operador ternario)"):console.log("B es mayor que A (usando operador ternario)");

// 4.- Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usar JavaScript?
    console.log("EJRCICIO 4");
    var numero = prompt("Introduce un numero");
    console.log("El numero introducido es : " , numero);

    if(numero%2==0){
        console.log("El numero es par (usando if-else)");
    }else{
        console.log("El numero es impar (usando if-else)")
    }

    numero%2==0?console.log("El numero es par ( usando operador ternario)"):console.log("El numero es impar (usando operador ternario)");


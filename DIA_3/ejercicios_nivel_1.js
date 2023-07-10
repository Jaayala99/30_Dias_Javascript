// 1.- Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
    console.log("EJERCICIO 1")
    var firstName = "Juan Antonio";
    var lastName = "Ayala Garcia";
    var country = "España";
    var city = "Sevilla";
    var age = 23;
    var isMarried = false;
    var year = 2023;

    console.log("La variabel firstName es : " , typeof(firstName));
    console.log("La variabel lastName es : " , typeof(lastName));
    console.log("La variabel country es : " , typeof(country));
    console.log("La variabel city es : " , typeof(city));
    console.log("La variabel age es : " , typeof(age));
    console.log("La variabel isMarried es : " , typeof(isMarried));
    console.log("La variabel year es : " , typeof(year));

// 2.- Verifique si typeof '10' es igual a 10
    console.log("EJERCICIO 2")
    var number_string = "10";
    var number = 10;
    var respuesta;
    
    if (typeof(number)===typeof(number_string)){
        respuesta = true;
        console.log("La condicion es : " , respuesta);
    }else{
        respuesta = false;
        console.log("La condicion es : " , respuesta);
    }

// 3.- Verifique si parseInt('9.8') es igual a 10
    console.log("EJERCICIO 3")
    var number_string = "9.8";
    var number = 10;
    var respuesta;

    if (parseFloat(number_string)===number){
        respuesta = true;
        console.log("La condicion es : " , respuesta);
    }else{
        respuesta = false;
        console.log("La condicion es : " , respuesta);
    }

/* 4.- Verifique cualquier valor booleano true o false.
        Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
        Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
*/
    console.log("EJERCICIO 4")
    var mi_edad = 23;
    var mi_ciudad = "Sevilla";
    var isMarried = false;
    var respuesta;

    if(mi_ciudad == "Sevilla"){
        respuesta = true;
        console.log(respuesta);
    }
    if(mi_edad == 23){
        respuesta = true;
        console.log(respuesta);
    }
    if(isMarried == false){
        respuesta = true;
        console.log(respuesta);
    }

    if(mi_ciudad.startsWith("S")){
        respuesta = false;
        console.log(respuesta);
    }
    if(mi_edad > 1){
        respuesta = false;
        console.log(respuesta);
    }
    if(isMarried != true){
        respuesta = false;
        console.log(respuesta);
    }

    /* 5.- Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confírmelo usando console.log()

            4 > 3
            4 >= 3
            4 < 3
            4 <= 3
            4 == 4
            4 === 4
            4 != 4
            4 !== 4
            4 != '4'
            4 == '4'
            4 === '4'
            Encuentre la longitud de Python y la jerga y haga una declaración de comparación falsa.
    */
        console.log("EJERCICIO 5");
        console.log("4 > 3 es " , (4 > 3));
        console.log("4 >= 3 es " , (4 >= 3));
        console.log("4 < 3 es " , (4 < 3));
        console.log("4 <= 3 es " , (4 <= 3));
        console.log("4 == 3 es " , (4 == 3));
        console.log("4 === 3 es " , (4 === 3));
        console.log("4 != 4 es " , (4 != 4));
        console.log("4 !== 4 es " , (4 !== 4));
        console.log("4 != '4' es " , (4 != "4"));
        console.log("4 == '4' es " , (4 == "4"));
        console.log("4 === '4' es " , (4 === "4"));
        
        
       

    /* 6.- Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confírmelo usando console.log()

            4 > 3 && 10 < 12
            4 > 3 && 10 > 12
            4 > 3 || 10 < 12
            4 > 3 || 10 > 12
            !(4 > 3)
            !(4 < 3)
            !(FALSO)
            !(4 > 3 && 10 < 12)
            !(4 > 3 && 10 > 12)
            !(4 === '4')
            No hay 'on' tanto en dragon como en python
    */
            
            console.log("EJERCICIO 6");
            var plb1 = "dragon";
            var plb2 = "python";
            console.log("4 > 3 && 10 < 12 es " , (4 > 3 && 10 < 12) );
            console.log("4 > 3 && 10 > 12 es " , (4 > 3 && 10 > 12));
            console.log("4 > 3 || 10 < 12 es " , (4 > 3 || 10 < 12));
            console.log("4 > 3 || 10 > 12 es " , (4 > 3 || 10 > 12));
            console.log("!(4 > 3) es " , (!(4 > 3)));
            console.log("!(4 < 3) es " , (!(4 < 3)));
            console.log("!(FALSO) es " , (!(false)));
            console.log("!(4 > 3 && 10 < 12) es " , (!(4 > 3 && 10 < 12)));
            console.log("!(4 > 3 && 10 > 12) es " , (!(4 > 3 && 10 > 12)));
            console.log("!(4 === '4') es " , (!(4 === '4')));
            console.log("No hay 'on' tanto en dragon como en python es " , !(plb1.includes("on") && plb2.includes("on")));

    /* 7.- Utilice el objeto Fecha para realizar las siguientes actividades

            ¿Qué año es hoy?
            ¿Cuál es el mes de hoy en número?
            ¿Cuál es la fecha de hoy?
            ¿Cuál es el día de hoy como un número?
            ¿Cuál es el horario ahora?
            ¿Cuáles son los minutos ahora?
            Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
    */
        console.log("EJERCICIO 7");
        var tiempo = new Date();
        console.log("¿Qué año es hoy? " , tiempo.getFullYear());
        console.log("¿Cuál es le mes de hoy en número? " , tiempo.getMonth());
        console.log("¿Cuál es la fecha de hoy? " , tiempo.getDay() + "/" + tiempo.getMonth() + "/" + tiempo.getFullYear());
        console.log("¿Cuál es el día de hoy como numero? " , tiempo.getDay());
        console.log("¿Cuál es el horario ahora? " , tiempo);
        console.log("¿Cuáles son los minutos ahora? " , tiempo.getMinutes());
        console.log("Averigue el numero de segundos transcurridos desde el 1 de enero de 1970 hasta ahora " , tiempo.getTime());


        
    
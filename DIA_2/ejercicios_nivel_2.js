// 1.- Usando console.log() imprima la siguiente declaración:
    var cadena = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
    console.log(cadena);
// 2.- Usando console.log() imprima la siguiente cita de la Madre Teresa:
    var madre_teresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
    console.log(madre_teresa);
// 3.- Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
    var numero_string = "10";
    console.log("La variable es : " , numero_string);
    console.log("La variable 10 es tipo : " , typeof(numero_string));
    console.log("Usando el metodo parseInt lo convertimos a un numero :" , parseInt(numero_string));

// 4.- Compruebe si 'on' se encuentra tanto en Python como en la jerga
    var cadena = "Python como en la jerga"
    console.log(cadena);
    console.log("Comprobando si 'on' se encuentra en la cadena 'Phyton como en la jerga' : " , cadena.includes("on"));

// 6.- Espero que este curso no esté lleno de jerga . Compruebe si hay jerga en la oración.
    var string = "Espero que este curso este lleno de jerga";
    console.log("Comprobando si 'jerga' está en la cadena 'Este curso está lleno de jerga' : " , string.includes("jerga"));

// 7.- Genera un número aleatorio entre 0 y 100 inclusive.
    console.log("Generando un numero aleatorio entre 0 y 100 : " , Math.random()*(0,100+1));

// 8.- Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
    var palabra = "JavaScript";
    console.log("Accedemos a un caracter aleatorio de la palabara 'Javascript' usando un numero aleatorio : " , palabra.charAt(Math.random()*(0,9)));

// 9.- Use substr para separar la frase porque porque porque de la siguiente oración: 'No puede terminar una oración con porque porque porque es una conjunción'
    var oracion = "No puede terminar una oración con porque porque porque es una conjunción";
    console.log("La oración es : " , oracion);
    console.log("Separando porque porque porque de la oracion usando substr : " , oracion.substring(oracion.indexOf("porque") , oracion.lastIndexOf("es")));
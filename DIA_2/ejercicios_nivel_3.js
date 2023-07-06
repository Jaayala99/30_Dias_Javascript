// 1.- 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.
    var frase = "El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor";
    console.log(frase);
    console.log("La palabra amor sale en la oración : " , frase.match(/amor/g));

// 2.- Use match() para contar el número de todos porque en la siguiente oración: 'No puede terminar una oración con porque porque porque es una conjunción'
    var frase = "No puede terminar una oración con porque porque porque es una conjunción";
    console.log("La oracion es la siguiente : " , frase);
    console.log("Contando las veces que aparece porque en la oracion : " , frase.match(/porque/g));

// 3.- Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).
    var texto = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
    console.log("Este es el texto original : " , texto);
    console.log("Este es el texto limpiando los caracteres especiales : " , texto.replace(/\W/g,""));

// 4.- Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
    var texto = "Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.";
    console.log(texto);
    console.log("Cifras que gana al año : " , (texto.match(/(\d+)/g)));
    var primer_numero = parseInt(texto.match(/(\d+)/g)[0]);
    var segundo_numero = parseInt(texto.match(/(\d+)/g)[1]);
    var tercer_numero = parseInt(texto.match(/(\d+)/g)[2]);
    console.log("La suma sería : " , primer_numero+segundo_numero+tercer_numero);
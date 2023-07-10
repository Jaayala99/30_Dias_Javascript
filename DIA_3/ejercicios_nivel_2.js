 // 1.- Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 xbxh).
    console.log("EJERCICIO 1");
    var base = prompt("Ingrese base del triángulo");
    var altura = prompt("Ingrese altura del triángulo");
    var area = base*altura;
    
    console.log("La base especificada es : " , base);
    console.log("La altura especificada es : " , altura);
    console.log("El area del triángulo para los datos especificados es de : " , area);

// 2.- Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
    console.log("EJERCICIO 2");
    var lado_a = prompt("Ingrese lado A triángulo");
    var lado_b = prompt("Ingrese lado B del triángulo");
    var lado_c = prompt("Ingrese lado C del triángulo");
    var perimetro = parseFloat(lado_a)+parseFloat(lado_b)+parseInt(lado_c);

    console.log("Lado A introducido es : " , lado_a);
    console.log("Lado B introducido es : " , lado_b);
    console.log("Lado C introducido es : " , lado_c);
    console.log("El perímetro del triángulo para los datos especificados es de : " , perimetro);

// 3.- Obtenga el largo y el ancho usando el indicador y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
    console.log("EJERCICIO 3");
    var largo = prompt("Ingrese el largo del rectángulo");
    var ancho = prompt("Ingrese el ancho del rectángulo");

    var area_rectangulo = parseFloat(largo)*parseFloat(ancho);
    var perimetro_rectangulo = 2*(parseFloat(largo)+parseFloat(ancho));

    console.log("El largo introducido es de : " , largo);
    console.log("El ancho introducido es de : " , ancho);
    console.log("El área del rectángulo es : " , area_rectangulo);
    console.log("El perímetro del rectangulo es : " , perimetro_rectangulo);

// 4.- Obtenga el radio usando el indicador y calcule el área de un círculo (área = pi xrxr) y la circunferencia de un círculo (c = 2 x pi xr) donde pi = 3.14.
    console.log("EJERCICIO 4");
    var radio = prompt("Introduce el radio del círculo");
    console.log("El radio introducido es de : " , radio);

    var circunferencia = 2*3.14*parseFloat(radio);
    var area = 3.14*parseFloat(radio**2);

    console.log("La circunferencia es de : " , circunferencia);
    console.log("El area es de : " , area);

// 9.- Escriba un script que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
    console.log("EJERCICIO 9");
    var horas = prompt("Por favor, introduzca el nº de horas : ");
    var tarifa_hora = prompt("Por favor. introduzca la tarifa/hora : ");
    var total = parseFloat(tarifa_hora)*parseFloat(horas);

    console.log("Las horas introducidas es de : " , horas);
    console.log("La tarifa por horas introducida es de : " , tarifa_hora);
    console.log("Usted cobra " , tarifa_hora , " € la hora, por lo tanto si usted trabaja " , horas , " horas, usted cobra : " , total);

// 10.- Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
    console.log("EJERCICIO 10")
    var nombre = prompt("Por favor, introduzca su nombre");
    console.log("El nombre introducido es : " , nombre);

    if(nombre.length>7){
        console.log("Su nombre es largo");
    }else{
        console.log("Su nombre es corto");
    }

// 11.- Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
    console.log("EJERCICIO 11");
    var nombre = prompt("Introduzca su nombre");
    var apellido = prompt("Introduzca apellido");

    console.log("El nombre introducido es : " , nombre);
    console.log("El apellido introducido es : " , apellido);

    if(nombre.length<apellido.length){
        console.log("La longitud del nombre es menor que la longitud del apellido");
    }else{
        console.log("La longitud del nombre es mayor que la longitud del apellido");
    }

// 12.- Declare dos variables miEdad y suEdad y asígneles valores iniciales y miEdad y suEdad.
    console.log("EJERCICIO 12");
    var mi_edad = prompt("Introduzca su edad");
    var su_edad = prompt("Introduzca la edad de su hermano/a");

    console.log("Su edad es de : " , mi_edad);
    console.log("La edad de su hermano/a es : " , su_edad);

    var mi_edad = parseInt(mi_edad);
    var su_edad = parseInt(su_edad);

    if(mi_edad>su_edad){
        console.log("Eres mayor que tu hermano/a por " , mi_edad-su_edad);
    }else{
        console.log("Eres menor que tu hermano/a por " , su_edad-mi_edad);
    }

// 13.- Con el aviso, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
    console.log("EJERCICIO 13");
    var edad = prompt("Introduzca su edad");
    console.log("La edad introducida es de : " , edad);
    var edad = parseInt(edad);

    if(edad>=18){
        console.log("Eres mayor de edad, puedes conducir");
    }else{
        console.log("Aún eres menor de edad, no puedes conducir");
    }
// 14.- Escriba un script que solicite al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
    console.log("EJERCICIO 14");
    var años = prompt("Introduce años");
    console.log("Los años introducidos son : " , años);

    console.log("Viviste " ,  años , " años");
    var segundos = años * 365 * 24 * 60 * 60;

    console.log("Has vivido " , segundos , " segundos");

/* 15.- Cree un formato de hora legible por humanos usando el objeto de fecha y hora

    AAAA-MM-DD HH:mm
    DD-MM-AAAA HH:mm
    DD/MM/AAAA HH:mm
*/
    console.log("EJERCICIO 15");
    var fecha = new Date();

    var primera = (fecha.getFullYear() + " - " + fecha.getMonth() + " - " + fecha.getDate());
    var segunda = (fecha.getDate() + " - " + fecha.getMonth() + " - " + fecha.getFullYear()) ;
    var tercera = (fecha.getDate() + " / " + fecha.getMonth() + " / " + fecha.getFullYear());


    console.log("AAAA-MM-DD HH:mm : " , primera , " La hora actual es " ,  fecha.getHours()+ ":" +fecha.getMinutes());
    console.log("DD-MM-AAAA HH:mm : " , segunda , " La hora actual es " ,  fecha.getHours()+ ":" +fecha.getMinutes());
    console.log("DD/MM/AAAA HH:mm : " , tercera , " La hora actual es " ,  fecha.getHours()+ ":" +fecha.getMinutes());


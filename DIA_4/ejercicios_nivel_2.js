/* 1.-Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:

    80-100, A
    70-89, segundo
    60-69, C
    50-59, D
    0-49, F
*/
    console.log("EJERCICIO 1");
    var puntaje = prompt("Introduzca el puntaje del alumno");
    console.log("El puntaje introducido es de : " , puntaje);

    if(puntaje>=80 && puntaje<=100){
        console.log("Tienes una calificación de A");
    }
    if(puntaje>=70 && puntaje<=89){
        console.log("Tienes una calificación de segundo");
    }
    if(puntaje>=60 && puntaje<=69){
        console.log("Tienes una calificación de C");
    }
    if(puntaje>=50 && puntaje<=59){
        console.log("Tienes una calificación de D");
    }
    if(puntaje<=49){
        console.log("Tienes una calificacion de F")
    }

// 2.- Consulta si la temporada es Otoño, Invierno, Primavera o Verano.
    console.log("EJERCICIO 2");
    var mes = prompt("Introduce mes del año");
    var mes = mes.toLowerCase();
    
    console.log("El mes introducido es : " , mes);

    switch(mes){
        case "enero":
            console.log("Es Invierno");
            break;
        case "febrero":
            console.log("Es Invierno ");
            break;
        case "marzo":
            console.log("Es Primavera");
            break;
        case "abril":
            console.log("Es Primavera");
            break;
        case "mayo":
            console.log("Es Primavera");
            break;
        case "junio":
            console.log("Es Verano");
            break;
        case "julio":
            console.log("Es Verano");
            break;
        case "agosto":
            console.log("Es Verano");
            break;
        case "septiembre":
            console.log("Es Otoño");
            break;
        case "octubre":
            console.log("Es Otoño");
            break;
        case "noviembre":
            console.log("Es Otoño");
            break;
        case "diceimbre":
            console.log("Es invierno");
            break;    
    }

// 3.- Compruebe si un día es un día de fin de semana o un día laborable. Su guión tomará el día como entrada.
console.log("EJERCICIO 2");
var dia_semana = prompt("Introduce dia de la semana");
var dia_semana = dia_semana.toLowerCase();

console.log("El dia introducido es : " , dia_semana);

switch(dia_semana){
    case "lunes":
        console.log("Es Laborable");
        break;
    case "martes":
        console.log("Es Laborable ");
        break;
    case "miercoles":
        console.log("Es Laborable");
        break;
    case "jueves":
        console.log("Es Laborable");
        break;
    case "viernes":
        console.log("Es Laborable");
        break;
    case "sabado":
        console.log("Es Fin de Semana");
        break;
    case "domingo":
        console.log("Es Fin de Semana");
        break;
        
}    

    

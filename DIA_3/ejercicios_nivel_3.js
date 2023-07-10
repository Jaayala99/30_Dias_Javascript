// 1.- Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05) YYY-MM-DD HH:mm eg. 20120-01-02 07:05
    console.log("EJERCICIO 1");
    var fecha = new Date();
    var año = fecha.getFullYear();
    var mes = fecha.getMonth();
    var dia = fecha.getDate();

    if( mes < 10){
        var mes = "0"+fecha.getMonth();
    }
    
    if( dia < 10){
        var dia =  "0"+fecha.getDate();  
    }
    
     console.log("La fecha es : " , año  , "-" , mes , "-" , dia, " La hora actual es " ,  fecha.getHours()+ ":" +fecha.getMinutes());

    
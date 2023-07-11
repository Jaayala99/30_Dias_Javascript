/* 1.- La siguiente es una matriz de 10 edades de estudiantes:</p>
        Ordene la matriz y encuentre la edad mínima y máxima
        Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
        Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
        Encuentre el rango de las edades (max menos min)
        Compare el valor de (mín - promedio) y (máx - promedio), use el método abs()
*/
    console.log("EJERCICIO 1")
    var edades = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    console.log(edades)
    edades.sort()
    console.log("Las edades ordenadas son : " , edades)
    edad_minima = edades[0]
    edad_máxima = edades[edades.length -1]
    console.log("La edad mínima es : " , edad_minima , "La edad máxima es : " , edad_máxima);

    var suma=0;
    for ( var i =0 ; i<edades.length ; i++){
        suma += edades[i]
    }
    var promedio = suma/edades.length
    console.log("La edad promedio es de : " , promedio)

    console.log("El rango de las edades es de : " , (edades[edades.length-1]-edades[0]))
    console.log("Comparando el valor de (min-promedio) y (max-promedio) : " , Math.abs((edades[0] - promedio)) , Math.abs((edades[edades.length-1]-promedio)))
    console.log("Si redondeamos los numeros quedaría así : " , Math.round(Math.abs((edades[0] - promedio))) , Math.round(Math.abs((edades[edades.length-1]-promedio))))

// 2.- Corte los primeros diez países de la matriz de países
    var paises = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
    ]
    console.log("EJERCICIO 2")
    console.log("Cortando los 10 primeros paises del array")
    console.log(paises)
    var paises_eliminados = paises.splice(0,9)
    console.log("Estos son los 10 primeros paises : " , paises_eliminados)

// 3.- Encuentre el(los) país(es) intermedio(s) en la matriz de países
    var paises = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
    ]

    console.log("EJERCICIO 3")
    console.log(paises)
    var medio = Math.round(paises.length/2)
    var paises_medio = paises.splice(medio, 1)
    console.log("Este es el país intermedio : " , paises_medio)

// 4.- Divida la matriz de países en dos matrices iguales si es par. Si la matriz de países no es pareja, un país más para la primera mitad.
    var paises = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya',
        'España'
    ]

    if(paises.length%2==0){
        var mitad = paises.splice(paises.length/2)
        console.log(paises , mitad)
    }else{
        paises.unshift('Spain')
        var mitad = paises.splice(paises.length/2)
        console.log(paises , mitad)
    }

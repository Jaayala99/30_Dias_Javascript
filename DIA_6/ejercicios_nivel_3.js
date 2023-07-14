// 1.- Copiar matriz de países (Evitar mutación)
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
]  
var WebTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
var mernStack = ['MongoDB', 'Express', 'React', 'Node']
    console.log("EJERCICIO 1")
    for(var i=0 ; i<paises.length ; i++){
        var paises_elementos = paises[i]
        var paises_2 = paises.map(function(paises_elementos){
            return paises_elementos
        })
    }
    console.log("Copiando la matriz de paises con el nombre paises_2 : " , paises_2)

// 2.- Las matrices son mutables. Cree una copia de la matriz que no modifique el original. Ordene la matriz copiada y guárdela en una variable sortedCountries
    console.log("EJERCICIO 2")
    var sortedcountries = paises_2.sort()
    console.log("Ordenando la matriz paises_2 y guardandola en una variable llamada sortedcountries : " , sortedcountries)

// 3.- Ordenar la matriz webTechs y la matriz mernStack
    console.log("EJERCICIO 3")
    console.log("Mostrando los arrays originales : " , WebTechs , mernStack)
    console.log("Mostrando los arrays ordenados : " , WebTechs.sort() , mernStack.sort())

// 4.- Encuentre el país que contiene la mayor cantidad de caracteres en la matriz de países
    console.log("EJERCICIO 4")
    var pais_largo = ""
        for(var i=0 ; i<paises.length ; i++){
            if(paises[i].length > pais_largo.length){
                pais_largo = paises[i]
            }else{
                pais_largo = pais_largo
            }

        }console.log("Este es el país con el nombre más largo : " , pais_largo)

// 5.- Extraiga todos los países que contengan la palabra 'tierra' de la matriz de países e imprímala como matriz
    console.log("EJERCICIO 5")
        var land=[]
        var no_land=[]
        for(var i=0 ; i<paises.length ; i++ ){
            
            if (paises[i].includes('land')==true){
                land.unshift(paises[i])
            }else{
                no_land.unshift(paises[i])
            }
        }
        console.log("Países que contienen 'land' : " , land)
        
// 6.- Extraiga todos los países que contengan solo cuatro caracteres de la matriz de países e imprímalos como una matriz
        console.log("EJERCICIO 6")
        var pais_5 = []
        for(var i=0 ; i<paises.length ; i++){
            if(paises[i].length == 5){
                pais_5.unshift(paises[i])
            }
        }console.log("Este es el pais o paises que tienen 5 letras : " , pais_5)

// 7.- Invertir la matriz de países y poner en mayúscula cada país y almacenarlo como una matriz
        console.log("EJERICIO 7")
        for(var i=0 ; i<paises.length ; i++){
            var paises_elementos = paises[i]
            var paises_2 = paises.map(function(paises_elementos){
                return paises_elementos.toUpperCase()
            })
        }
        console.log("Invirtiendo la matriz paises y poniendo los paises en mayuscula : " , paises_2.reverse())
        
    
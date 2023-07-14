// 1.-Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:
    console.log("EJERCICIO 1")
    var id = ""
    var letra = ""
    var posibles_caracteres = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789"
    var numero_caracteres = Math.round(Math.random()*30)

    for (var i = 0 ; i <= numero_caracteres ; i++){
        letra = posibles_caracteres.charAt(Math.round(Math.random()*posibles_caracteres.length))
        id = id+letra
    } console.log(id)

// 2.- Escriba un script que genere un número de color rgb aleatorio.
console.log("EJERCICIO 2")
    var color_r = Math.round(Math.random()*999)
    var color_g = Math.round(Math.random()*999)
    var color_b = Math.round(Math.random()*999)
    var color = ("rgb("+color_r+","+color_g+","+color_b+")")
    console.log (color)

// 3.- Usando la matriz de países anterior, cree la siguiente nueva matriz
console.log("EJERCICIO 3")
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
    for(var i = 0 ; i<paises.length ; i++){
        var pais = paises[i]
        var arraymayus = paises.map(function(pais){
            return pais.toUpperCase();
        });
        

    }console.log(arraymayus)

// 4.- Usando la matriz de países anterior, cree una matriz para la longitud de los países
    console.log("EJERCICIO 4")

    for(var i = 0 ; i<paises.length ; i++){
        longitud = paises[i]
        var arraylong = paises.map(function(longitud){
            return longitud.length
        })
    }console.log(arraylong)

// 5.- Utilice la matriz de países para crear la siguiente matriz de matrices:
    console.log("EJERCICIO 5")
    for (var i=0 ; i<paises.length ; i++){
        var iniciales = paises[i]
        var iniciales_mayus = paises.map(function(iniciales){
            return (iniciales.charAt(0) + iniciales.charAt(1) + iniciales.charAt(2)).toUpperCase()
        })
    }



    for (var i=0 ; i<paises.length ; i++){       
    var new_paises = paises[i]
    var new_paises = paises.map(function(new_paises){
        new_paises =new_paises + " , " + (new_paises.charAt(0) + new_paises.charAt(1) + new_paises.charAt(2)).toUpperCase() + " , " + new_paises.length
        return new_paises.split(",")
    })
    
    
    }
    console.log("Array original : " ,paises)
    console.log("Nuevo array generado con iniciales y longitud de cada pais : " ,new_paises)

// 6.- En la matriz de países anterior, verifique si hay un país o países que contengan la palabra 'tierra'. Si hay países que contienen 'tierra', imprímalo como matriz. Si no hay ningún país que contenga la palabra 'tierra', escriba 'Todos estos países no tienen tierra'.
    console.log("EJERCICIO 6")
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
    console.log("Países que no contienen 'land' : " , no_land)
        
// 7 .- En la matriz de países anterior, verifique si hay un país o países que terminan con una subcadena 'ia'. Si hay países que terminan con, imprímalo como una matriz. Si no hay ningún país que contenga la palabra 'ai', escriba 'Estos son países que terminan sin ia'.
        console.log("EJERCICIO 7")       
        var ia=[]
        var no_ia=[]
        for(var i=0 ; i<paises.length ; i++ ){
            
            if (paises[i].includes('ia')==true){
                ia.unshift(paises[i])
            }else{
                no_ia.unshift(paises[i])
            }
        }
        console.log("Países que contienen 'ia' : " , ia)
        console.log("Países que no contienen 'ia' : " , no_ia)
    
// 8.- Usando la matriz de países anterior, encuentre el país que contiene la mayor cantidad de caracteres.
        console.log("EJERCICIO 8")
        var pais_largo = ""
        for(var i=0 ; i<paises.length ; i++){
            if(paises[i].length > pais_largo.length){
                pais_largo = paises[i]
            }else{
                pais_largo = pais_largo
            }

        }console.log("Este es el país con el nombre más largo : " , pais_largo)

// 9.- Usando la matriz de países anterior, encuentre el país que contiene solo 5 caracteres.
        console.log("EJERCICIO 9")
        var pais_5 = []
        for(var i=0 ; i<paises.length ; i++){
            if(paises[i].length == 5){
                pais_5.unshift(paises[i])

            }
        }console.log("Este es el pais o paises que tienen 5 letras : " , pais_5)

// 10.- Encuentre la palabra más larga en la matriz webTechs
    console.log("EJERCICIO 10")
        var WebTechs = [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Redux',
            'Node',
            'MongoDB'
        ]
        var web_largo = ""
        for(var i=0 ; i<WebTechs.length ; i++){
            if(WebTechs[i].length > web_largo.length){
                web_largo = WebTechs[i]
            }else{
                web_largo = web_largo
            }

        }console.log("Este es la herramienta con el nombre más largo : " , web_largo)

// 11.- Utilice la matriz de webTechs para crear la siguiente matriz de matrices:
        console.log("EJERCICIO 11")
        for (var i=0 ; i<WebTechs.length ; i++){
            var web = WebTechs[i]
            var arrayweb = WebTechs.map(function(web){
                web = web + "," + web.length
                return web.split(",")              
            })

        }console.log("Array generado con el nombre y longitud de cada string : " , arrayweb)

// 12.- Una aplicación creada con MongoDB, Express, React y Node se denomina aplicación de pila MERN. Cree el acrónimo MERN usando la matriz mernStack
        console.log("EJERCICIO 12")
        var mernStack = ['MongoDB', 'Express', 'React', 'Node']
        var nombre = ""
        for(var i=0 ; i<mernStack.length ; i++){
            var inicial = mernStack[i].charAt(0)
            nombre = nombre + inicial
            
        }
        console.log("El array es : " , mernStack)
        console.log("El acrónimo sacando las iniciales de cada elemento es : " , nombre)
    
// 13.- Iterar a través de la matriz, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando un bucle for o for of e imprimir el elementos.
        console.log("EJERCICIO 13")
        var elemento = ""
            for(var i=0 ; i<WebTechs.length ; i++){
                elemento = elemento + " " + WebTechs[i] 
            }console.log("Los elementos son :" , elemento)

// 14.- Esta es una matriz de frutas, ['plátano', 'naranja', 'mango', 'limón'] invierta el orden usando bucle sin usar un método inverso.
        console.log("EJERCICIO 14")
        var elementos = ""
        var frutas = ['plátano', 'naranja', 'mango', 'limón'] 
        for (var i=frutas.length-1 ; i>=0 ; i--){
            elementos = elementos + " " + frutas[i]
        }console.log("Los elementos del array frutas en orden inverso son :" ,elementos)
    
// 15.- Imprima todos los elementos de la matriz como se muestra a continuación.
        console.log("EJERCICIO 15")
        var fullStack = [
            ['HTML', 'CSS', 'JS', 'React'],
            ['Node', 'Express', 'MongoDB']
          ]
          
        var nombre =""
        for(var i=0 ; i<fullStack.length ; i++){
            
            for(var j=0 ; j<fullStack[i].length ; j++){
                nombre = nombre + "\n" + fullStack[i][j]
            }
        }console.log(nombre.toUpperCase())





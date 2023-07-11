// 2.- Primero elimine todos los signos de puntuación y cambie la cadena a matriz y cuente la cantidad de palabras en la matriz
    console.log("EJERCICIO 2")
    var texto = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
    console.log(texto)
    var texto = texto.replace(/[,.]/g , "")
    var texto = texto.split(" ");
    console.log("El texto sin signos de puntuacion quedaría así " , texto)

/* 3.- En el siguiente carrito de compras agregue, elimine, edite artículos
        agregue 'Carne' al comienzo de su carrito de compras si aún no se ha agregado
        agregue azúcar al final de su carrito de compras si aún no se ha agregado
        elimine 'Honey' si es alérgico a la miel
        modificar té a 'té verde'
*/
    console.log("EJERCICIO 3")
    var carrito = ['Leche', 'Café', 'Té', 'Miel']
    console.log(carrito)
    carrito.unshift("Carne")
    console.log("Si añadimos carne al principio del carrito quedaría así : " , carrito)
    carrito.push("Azúcar")
    console.log("Si añadimos Azúcar al final del carrito quedaría así : " , carrito)
    carrito.splice(4,1)
    console.log("Si eres alergico a la miel tu carrito quedaría así : " , carrito)
    carrito.splice(3,1, "Té Verde")
    console.log("Modificando el tipo de te : " , carrito)

// 4.- En la matriz de países, verifique si 'Etiopía' existe en la matriz; si existe, imprima 'ETIOPÍA'. Si no existe agregar a la lista de países.

    console.log("EJERCICIO 4")
    var busqueda = paises.includes('Sevilla')
    busqueda?console.log("ETIOPÍA"):paises.push('Ethiopia')
    console.log(paises);

// 5.- En la matriz de webTechs, verifique si Sass existe en la matriz y, si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass a la matriz e imprima la matriz.
    
    console.log("EJERCICIO 5")
    var busqueda = WebTechs.includes('Sass')
    busqueda==true?console.log("Sass es un preproceso de CSS"):WebTechs.push('Sass')
    console.log(WebTechs)
    

/* 6.- Concatene las siguientes dos variables y guárdelas en una variable fullStack.
        const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']    
        const backEnd = ['Node','Express', 'MongoDB']
*/
        console.log("EJERCICIO 6")
        var front = [
            "HTML",
            "CSS",
            "JS",
            "React",
            "Redux"
        ]    

        var back = [
            "Node",
            "Express",
            "MongoDB"
        ]

        console.log("Las tareas del un desarrollador front son : " ,front)
        console.log("Las tareas del un desarrollador back son : " ,back)

        var fullStack = front.concat(back)
        console.log("Las tareas del un fullstack son : " , fullStack);
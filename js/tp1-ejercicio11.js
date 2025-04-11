//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
const numero = parseFloat(prompt("Ingrese un número: "));

let resultado = ""

if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        if (resultado == "") {
            resultado = "El " + numero + " es divisible por 2"
        }
    }
    if (numero % 3 === 0) {
        if (resultado == "") {
            resultado = "El " + numero + " es divisible por 3"
        } else {
            resultado = resultado + ", por 3"
        }
    }
    if (numero % 5 === 0) {
        if (resultado == "") {
            resultado = "El " + numero + " es divisible por 5"
        } else {
            resultado = resultado + ", por 5"
        }
    }
    if (numero % 7 === 0) {
        if (resultado == "") {
            resultado = "El " + numero + " es divisible por 7"
        } else {
            resultado = resultado + " y por 7"
        }
    }
} else {
    document.writeln("Operación Inválida")
}

if (resultado != "") {
    document.writeln(resultado)
}

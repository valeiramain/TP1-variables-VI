//Determinar si un número es par o impar: Crear un algoritmo que permita al usuario ingresar un número y determinar si es par o impar.
//Mostrar el resultado.

const numero = parseInt(prompt("Ingrese un número entero: "));

if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        document.writeln("El número " + numero + " es Par")
    } else {
        document.writeln("El número " + numero + " es Impar")
    }
} else {
    document.writeln("Operación inválida")
}
//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const numero1 = parseFloat(prompt("Ingrese primer número: "));
const numero2 = parseFloat(prompt("Ingrese segundo número: "));
const numero3 = parseFloat(prompt("Ingrese tercer número: "));

if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
    if ((numero1 === numero2) && (numero2 === numero3) && (numero1===numero3)) {
        document.writeln("Los tres números son iguales");
    } else {
        if (numero1 > numero2) {
            if (numero1 > numero3) {
                document.writeln("el número " + numero1 + " es el mayor");
            } else {
                document.writeln("el número " + numero3 + " es el mayor");
            }
        } else if (numero2 > numero3) {
            document.writeln("el número " + numero2 + " es el mayor");
        } else if (numero3 > numero1) {
            document.writeln("el número " + numero3 + " es el mayor");
        } else {
            document.writeln("el número " + numero1 + " es el mayor");
        }
    }
} else {
    document.writeln("Operación inválida");
}

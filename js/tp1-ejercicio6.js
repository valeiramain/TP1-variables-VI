//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const numero1 = parseFloat(prompt("Ingrese primer número: "));
const numero2 = parseFloat(prompt("Ingrese segundo número: "));

if (!isNaN(numero1) && !isNaN(numero2)){
    if(numero1 > numero2){
        document.writeln("El primer número ingresado "+numero1+" es el más grande")
    }else if (numero1 < numero2){
        document.writeln("El segundo número ingresado "+numero2+" es el más grande")
    }else{
        document.writeln("Los números ingresados son iguales")
    }
} else{
    document.writeln('Operación inválida')
}


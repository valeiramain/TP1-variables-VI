//8.- Escribe un programa que pida un número y diga si es divisible por 2
const numero = parseInt(prompt("Ingrese un número entero: "));

if (!isNaN(numero)){
    if ((numero % 2) === 0){
        document.writeln("El número "+numero+" es divisible por 2")
    }else{
        document.writeln("El número "+numero+" No es divisible por 2")
    }
}else{
    document.writeln("Operación inválida");
}
//Pedir la edad y decir si es mayor de edad: Crear un algoritmo que pida la edad del usuario y 
//determine si es mayor de edad (18 años o más)

const edad = parseInt(prompt("Ingrese su edad: "));

if (!isNaN(edad)) {
    if (edad >= 18){
        document.writeln("Es mayor de edad")
    }else{
        document.writeln("No es mayor de edad")
    }
}else{
    document.writeln("Operación inválida")
}
//Calcular el precio con descuento: Crear un algoritmo que permita ingresar el precio de un producto y aplicar un descuento del 15% si el precio es mayor a 1000.
//Mostrar el precio final.
const precio = parseFloat(prompt("Ingrese el precio sin descuento: $"));

if (!isNaN(precio)) {
    if (precio>1000){
        // 15% de descuento
        const precioFinal = precio * 0.85
        document.writeln("El precio con descuento es = $ "+precioFinal)
    }else{
        document.writeln("El precio sin descuento es = $ "+precio)
    }
}else {
    document.writeln("Operación inválida")
}
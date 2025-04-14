//Calcular el perímetro y área de un rectángulo: 
//Crear un algoritmo que permita al usuario ingresar el largo y el ancho de un rectángulo, y calcular su perímetro
//y área. Las fórmulas son:
//Perímetro: P = 2*(largo+ancho)
//Área: A=largo×ancho

const largo = parseFloat(prompt("Ingrese el largo: "));
const ancho = parseFloat(prompt("Ingrese el ancho: "));

if (!isNaN(ancho) && !isNaN(largo)) {
    const perimetro = 2*(largo+ancho);
    const area = largo * ancho;
    document.writeln("El perímetro es = "+perimetro);
    document.writeln("<br>El área es = "+area);
}else{
    document.writeln("Operación inválida")
}
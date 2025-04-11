//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

const frase = prompt("Escriba una Frase: ");
const fraseMayusculas =  frase.toUpperCase();
console.log(frase)
console.log(fraseMayusculas)
console.log(frase.length)

for (let i=0; i<= fraseMayusculas.length; i++) {
    if ((fraseMayusculas.charAt(i))=="A"){
        document.writeln(fraseMayusculas.charAt(i));
    }
    if ((fraseMayusculas.charAt(i))=="E"){
        document.writeln(fraseMayusculas.charAt(i));
    }
    if ((fraseMayusculas.charAt(i))=="I"){
        document.writeln(fraseMayusculas.charAt(i));
    }
    if ((fraseMayusculas.charAt(i))=="O"){
        document.writeln(fraseMayusculas.charAt(i));
    }
    if ((fraseMayusculas.charAt(i))=="U"){
        document.writeln(fraseMayusculas.charAt(i));
    }
}
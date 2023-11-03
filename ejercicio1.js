const numeros = document.getElementsByClassName("numeros")[0];
const iguales = document.getElementsByClassName("iguales")[0];
const acomodoMayor = document.getElementsByClassName("mayor")[0];
const acomodoMenor = document.getElementsByClassName("menor")[0];

let num1 = parseFloat(prompt("Ingrese el primer número")); 
let num2 = parseFloat(prompt("Ingrese el segundo número"));
let num3 = parseFloat(prompt("Ingrese el tercer número"));
let menor;
let medio;
let mayor;
numeros.textContent = `Los números ingresados son: ${num1}, ${num2}, ${num3}`;

// Encontrar el mayor, el del centro y el menor
if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    if (num2 >= num3) {
        medio = num2;
        menor = num3;
    } else {
        medio = num3;
        menor = num2;
    }
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    if (num1 >= num3) {
        medio = num1;
        menor = num3;
    } else {
        medio = num3;
        menor = num1;
    } 
} else {
    mayor = num3;
    if (num1 >= num2) {
        medio = num1;
        menor = num2;
    } else {
        medio = num2;
        menor = num1;
    }
}

acomodoMayor.textContent = `De mayor a menor: ${mayor}, ${medio}, ${menor}`;
acomodoMenor.textContent = `De menor a mayor: ${menor}, ${medio}, ${mayor}`;

// Comprobar si los números son iguales
if (num1 === num2 && num2 === num3) {
    iguales.textContent = `Los números ingresados son iguales: ${num1}`;
}
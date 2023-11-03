function calcFibonacci() {
    let numero;
    do {
        numero = prompt("Introduce un número para calcular la serie Fibonacci");
        numero = parseFloat(numero);
        if (isNaN(numero)) {
            alert("Introduce un número válido");
        }
    } while (isNaN(numero));
  
    let resultado = serieFibonacci(numero);
    console.log("El cálculo de la serie Fibonacci es de: ", resultado);
  }
  
  function serieFibonacci(numero) {
    let serie = [];
    if (numero <= 0) {
        return serie;
    }
    if (numero >= 1) {
        serie.push(0);
    }
    if (numero >= 2) {
        serie.push(1);
    }
    for (let i = 2; i < numero; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie;
  }
  
  calcFibonacci();
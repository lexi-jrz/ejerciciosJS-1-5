function factorial(num) {
    if (num === 1 || num === 0) {
      return 1;
    } else if (num < 0) {
      return "Ingresa un  numeros mayor a cero";
    } else if (num > 1) {
      return num * factorial(num - 1);
    }
  }
  
  function numfactorial() {
    let numero = prompt("Introduce un número para calcular su factorial");
  
    if (isNaN(numero)) {
      alert("Introduce un número válido");
      numfactorial();
    } else {
      const num = parseFloat(entrada);
      if (num % 1 !== 0) {
        alert("El número debe ser un entero para calcular el factorial");
        numfactorial();
      } else {
        const num1 = factorial(num);
        console.log("El factorial de " + num + " es " + num1);
      }
    }
  }
  
  numfactorial();
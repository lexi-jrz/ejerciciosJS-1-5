function guessRandomNumber() {

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = [];

    while (true) {

        let userEntry = prompt("Ingresa un número del 1 al 100:");
        let userNumber = parseInt(userEntry);

        if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            console.log("Ingresa un número válido (del 1 al 100).");
        } else {
            attempts.push(userNumber);

            if (userNumber === randomNumber) {
                console.log("¡Felicidades, adivinaste el número aleatorio!");
                console.log("Estos fueron tus intentos: " + attempts.join(", "));
                return;
            } else if (userNumber < randomNumber) {
                console.log("El número es mayor. Vuelve a intentarlo.");
            } else {
                console.log("El número es menor. Vuelve a intentarlo.");
            }
        }
    }
}
guessRandomNumber();

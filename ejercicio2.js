function convertirTemp (){
    let tempCelsius;
    do{
        tempCelsius=prompt("Ingrese la temperatura en °C");
        tempCelsius=parseFloat(tempCelsius);
     
    if (isNaN(tempCelsius)){
        alert("Ingrese un valor númerico");
     } 
    } while (isNaN(tempCelsius));
    
        const cFahrenheit = (tempCelsius*1.8) + 32
        const cKelvin = tempCelsius + 273.15
       
        console.log("La conversion de " + tempCelsius + "°C a °F es de: " + cFahrenheit);
        console.log("La conversion de " + tempCelsius + "°C a °K es de: " + cKelvin);
    }
    convertirTemp();
/* **4. Transformador de Temperaturas (15 pontos)**

Crie um programa que converta uma lista de temperaturas de Celsius para Fahrenheit:

- Use o array: `[0, 10, 20, 30, 40]` (temperaturas em Celsius)
- Crie um novo array com as temperaturas convertidas para Fahrenheit usando a fórmula: F = C * 9/5 + 32
- Exiba ambos os arrays lado a lado usando console.table()
*/

//declaração de variáveis 
const temperaturaCelsius = [0, 10, 20, 30, 40];
let temperaturaFahrenheit = [];
let contadorFahrenheit = 0;

//usamos o for para percorrer o array temperatura celsius, depois disso fazemos a conversão do array de temperatura em Celsius para o nosso novo array em temperaturas em fahrenheit.
for (let i = 0; i < temperaturaCelsius.length; i++) {
    temperaturaFahrenheit[contadorFahrenheit] = temperaturaCelsius[i] * 9/5 + 32
    contadorFahrenheit ++;
}

//Mostramos o valor dos 2 arrays na tela.
console.table(temperaturaCelsius);
console.table(temperaturaFahrenheit); 
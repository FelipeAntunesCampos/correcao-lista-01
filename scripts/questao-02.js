/* **2. Verificador de Números (10 pontos)**

Dado o array de números: `[12, 5, 8, 21, 16, 7, 30, 45, 13, 27]`

- Conte quantos números são pares
- Conte quantos números são ímpares
- Conte quantos números são maiores que 20
- Exiba os resultados no console
*/

let numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27]; // Declaração de variáveis 
let numerosPares = 0;
let numerosImpares = 0;
let numerosMaioresVinte = 0;

//desenvolvimento, usamos o for para percorrer o array numeros, dentro usamos um if para dar a condição, na qual, se o numero for divido por 2 e restar 0 ele é par, senão ele é impar, e adicionamos nas variaveis +1 ao valor, toda vez um numero for par ou impar, usamos tambem um if no final para saber quais números são maiores que 20 e adicionamos na variavel +1 toda vez que tiver um número maior que 20.
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerosPares ++;
    } else {
        numerosImpares ++;
    }
    if (numeros[i] > 20) {
        numerosMaioresVinte ++;
    }
}
console.log(`Temos ${numerosPares} números pares, ${numerosImpares} impares, e ${numerosMaioresVinte} números maiores que 20`);
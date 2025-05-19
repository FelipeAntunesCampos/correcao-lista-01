/***1. Verificador de Idade (10 pontos)**

Crie um programa que receba um array com as idades de 5 pessoas: `[17, 21, 16, 25, 19]`

- Verifique quantas pessoas são maiores de idade (idade >= 18)
- Verifique quantas pessoas são menores de idade (idade < 18)
- Exiba as duas contagens no console
*/


const idades = [17, 21, 16, 25, 19]; //declaração de variáveis 
let pessoasMaiores = 0;
let pessoasMenores = 0;

//desenvolvimento, percorremos o array idade, usamos a condição if para saber se a idade é maior ou igual a 18, senão usamos um else para saber, e adicionamos +1 a variavel pessoasMaiores e tbm para pessoasMenores se a condição for verdadeira.
for (let i = 0; i < idades.length; i++) { 
    if (idades[i] >= 18) {
        pessoasMaiores ++;
    } else {
        pessoasMenores ++;
    }
}
console.log(`${pessoasMaiores} pessoas são maiores de idade, e ${pessoasMenores} são menores de idade.`); //Imprimir o valor na tela, com uma mensagem.

/***3. Média de Notas (10 pontos)**

Crie um programa que calcule a média de notas de uma turma:

- Use o array: `[8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0]`
- Calcule e exiba a média da turma
- Mostre quantos alunos tiraram nota acima da média
- Mostre qual foi a maior e a menor nota
*/

//declaração de variáveis
let notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0];
let media = 0;
let totalNotas = 0;
let alunosAcimaMedia = 0;
let maiorNota = notas[0];
let menorNota = notas[0];

//Usamos o for para percorrer o array notas. dentro do for adicionamos a variavel totalNotas, para saber o valor da soma de todas as notas.
for (let i = 0; i < notas.length; i++) {
    totalNotas += notas[i]
}

// calculamos a variavel media, com a soma total de todas as notas divido pela quantidade de notas.
media = totalNotas / notas.length //media 7.75

//Criamos outro for para percorrer o array notas, usamos if para saber quais alunos ficaram acima da média, caso tenha ficado adicionamos um ao valor alunosAcimaMedia, criamos outro if pra verificar qual a maior nota, e ainda outro if para verificar qual menor nota.
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        alunosAcimaMedia ++;
    }
    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
    }
    if (notas[i] < menorNota) {
        menorNota = notas[i];
    }
}
//Mostramos os resultados na tela.
console.log(`A média da turma foi de ${media} pontos, ${alunosAcimaMedia} alunos tiraram notas acima da média, a maior nota foi de ${maiorNota} pontos, e a menor foi de ${menorNota} pontos`);
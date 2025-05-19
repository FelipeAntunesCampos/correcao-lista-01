/* 5) Uma loja está com uma promoção onde produtos com preço acima de 100 reais têm 10% de desconto:

- Use o array de preços: `[150, 50, 220, 80, 120, 30, 480, 70, 90, 190]`
- Crie um novo array onde cada preço já esteja com o desconto aplicado (se necessário)
- Calcule quanto a loja vai perder com os descontos
- Calcule o valor médio dos produtos após os desconto
*/

//declaração de variáveis
let precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
let precosComDescontos = [];
let contadorDescontos = 0;
let valorDesconto = 0;
let valorTotalSemDesconto = 0;
let valorTotalComDesconto = 0;
let valorSubtracaoEntreDescontos = 0;
let media = 0;

//Criamos um for para percorrer o array com os preços dos produtos, usamos uma condição com o if caso o valor for acima de 100 reais para aplicar o desconto, pegamos a variavel ValorDesconto e fizemos os preços dos produtos vezes 10% que é o desconto, colocamos o novo array (precosComDesconto) e fizemos que ele armazenasses os preços dos produtos com desconto.
for (let i = 0; i < precos.length; i++) {
    if (precos[i] > 100) {
    valorDesconto = precos[i] * 0.10; 
    precosComDescontos[contadorDescontos] = precos[i] - valorDesconto
    contadorDescontos ++;
    }
    valorTotalSemDesconto += precos[i] //calculamos o valor total dos produtos.
}
//criamos outro for para fazer o valor total dos produtos com o desconto.
for (let i = 0; i < precosComDescontos.length; i++) {
    valorTotalComDesconto += precosComDescontos[i]
}

//subtração dos valores dos produtos com desconto e sem desconto.
valorSubtracaoEntreDescontos = valorTotalSemDesconto - valorTotalComDesconto;

//calculamos a media 
media = valorTotalComDesconto / precosComDescontos.length

//mostramos os resultados
console.log(`O Valor perdido pela loja com os descontos é de R$ ${valorSubtracaoEntreDescontos.toFixed(2)}, os preços com descontos são ${precosComDescontos}, e a média dos produtos após os desconto é de R$ ${media} `);
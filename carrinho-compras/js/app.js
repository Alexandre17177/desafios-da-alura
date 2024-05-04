let total = 0;
limpar();



function adicionar() {
    //adicionar produto, valor e quantidade
let Produto = document.getElementById("produto").value;
let nomeproduto = Produto.split("-")[0];
let valorUnitario = Produto.split("R$")[1];
let quantidade = document.getElementById("quantidade").value;

let numero1 = 2;
let numero2 = 10;
let soma = numero1 + numero2;
let mensagem = `o numero ${numero1} e ${numero2} é igual a ${soma} `;
console.log (mensagem);
//calcular preço
let valorInteiro = valorUnitario * quantidade;
//adcionar no carrinho
if ((quantidade == "") || (quantidade <= 0)) {
    alert ("Voce insiriu uma quantidade invalida tente novamete");
    return;
}
let adcionarNoCarrinho = document.getElementById("lista-produtos");
adcionarNoCarrinho.innerHTML = adcionarNoCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeproduto} <span class="texto-azul">${valorUnitario}</span>
</section>`;
//calcura preço do carrinho
total = total + valorInteiro;
let valorTotal = document.getElementById("valor-total");
valorTotal.textContent = `R$ ${total}`;
document.getElementById("quantidade").value = "";
}
function limpar() {
    total = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "$";
    document.getElementById("quantidade").value = "";
}
let jogosAlugados = 0;

function totalDeJogosAlugados() {
    console.log (`jogos Alugados ${jogosAlugados}`);
};
function alterarStatus(id) {
let clicado = document.getElementById(`game-${id}`);
let imagem = clicado.querySelector(".dashboard__item__img");
let botão = clicado.querySelector(".dashboard__item__button");

if (imagem.classList.contains('dashboard__item__img--rented')) {
    if (confirm("voce tem cereteza disso?")) {
    imagem.classList.remove("dashboard__item__img--rented");
    botão.classList.remove("dashboard__item__button--return");
    botão.textContent = "Alugar";
    jogosAlugados--;
    }
} else {
    imagem.classList.add("dashboard__item__img--rented");
    botão.classList.add("dashboard__item__button--return");
    botão.textContent = "devolver";
    jogosAlugados++;
}
totalDeJogosAlugados();
}
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll(".dashboard__item__button--return").length;
    totalDeJogosAlugados();
})
palindromos()
function palindromos() {
    let palavra = 'rever';
    let separar = palavra.split("");
    let reverterPalavra = separar.reverse();
    reverterPalavra = reverterPalavra.join("");
    if (reverterPalavra == palavra) {
        console.log (`${palavra} é um palindromo`);
    } else {
        console.log (`${palavra} não é um palindromo`);

    }
}
ordenarNumeros(15, 2, 5)
function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}
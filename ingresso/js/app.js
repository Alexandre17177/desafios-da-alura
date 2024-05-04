function comprar() {
    //definir ingresso e quantidade
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeDeIngressos = parseInt(document.getElementById("qtd").value);
    console.log (quantidadeDeIngressos)
    //sistema de compra
    cobrarIngresso(tipoIngresso, quantidadeDeIngressos);
}
function cobrarIngresso(ingressos, qtd) {

    let qtdIngresso = document.getElementById(`qtd-${ingressos}`).textContent;

    if (qtdIngresso < qtd) {
        alert ("erro os ingressos acabram insira outro valor ou espere por mais");

    } else {
    qtdIngresso = qtdIngresso - qtd;
    document.getElementById(`qtd-${ingressos}`).textContent = qtdIngresso
    alert ("compra foi um sucesso!")
    }
}
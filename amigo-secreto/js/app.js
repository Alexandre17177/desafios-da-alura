let listaAmigos =[];
function adicionar() {
    //difinir valores
    let adicionarAmigos = document.getElementById("nome-amigo");
    if (adicionarAmigos.value == "") {
        alert ("preencha com um nome valido");
        return;
    }
    if (listaAmigos.includes(adicionarAmigos.value)) {
        alert ("nome ja adicionado!");
        return;
    }
    let amigosAdcionados = document.getElementById("lista-amigos");
    listaAmigos.push(adicionarAmigos.value);
    if (amigosAdcionados.textContent == "") {
    amigosAdcionados.textContent = adicionarAmigos.value;
    } else {
        amigosAdcionados.textContent = amigosAdcionados.textContent + ", " + adicionarAmigos.value;
    }
    adicionarAmigos.value = "";
}
function sortear() {
    if (listaAmigos.length < 4) {
        alert ("adicione ao menos 4 participantes");
        return;
    }
    embaralha(listaAmigos);
    let listaSorteio = document.getElementById("lista-sorteio");
    for (i = 0; i < listaAmigos.length; i++) {

        if (i == listaAmigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + "---->" + listaAmigos[0] + "<br>"
        } else {
        listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + "---->" + listaAmigos[i + 1] + "<br>"
        }
    }
}
function embaralha(lista) {

    let indice = lista.length
    
    while(indice) { 
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}
numeroV(-10);
function numeroV(numero) {
    if (numero > 0) {
        console.log ("V");
    } else {
        console.log ("F");
    }
}

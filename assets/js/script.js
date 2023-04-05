document.querySelector("#qtde").addEventListener("change", calcularOrcamento);
document.querySelector("#js").addEventListener("change", calcularOrcamento);

function calcularOrcamento() {
    let qtdePaginas = document.querySelector("#qtde").value;
    let preco = qtdePaginas * 100;

    let js = document.querySelector("#js").checked;

    js ? preco = preco + (preco * 10/100) : preco;

    document.querySelector("#preco").innerHTML = `R$ ${preco}`;
}


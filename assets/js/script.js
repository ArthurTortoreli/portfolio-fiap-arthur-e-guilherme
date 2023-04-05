document.querySelector("#qtde").addEventListener("change", calcularOrcamento);

function calcularOrcamento() {
    let qtdePaginas = document.querySelector("#qtde").value;
    let preco = qtdePaginas * 100;
    console.log(qtdePaginas, preco);
}


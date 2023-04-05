document.querySelector("#qtde").addEventListener("change", calcularOrcamento);
document.querySelector("#js").addEventListener("change", calcularOrcamento);
document.querySelector("#layout_sim").addEventListener("change", calcularOrcamento);
document.querySelector("#layout_nao").addEventListener("change", calcularOrcamento);
document.querySelector("#prazo").addEventListener("change", calcularOrcamento);

function calcularOrcamento() {
    let qtdePaginas = document.querySelector("#qtde").value;
    let preco = qtdePaginas * 100;

    let layout_sim = document.querySelector("#layout_sim").checked;
    layout_sim ? preco += 500 : preco;

    let js = document.querySelector("#js").checked;
    js ? preco *= 1.1 : preco;

    let prazo = document.querySelector("#prazo").value;
    let taxaDeUrgencia = preco * (1.1 - prazo * 0.1)
    preco += taxaDeUrgencia;
    
    document.querySelector("#label_prazo").innerHTML = `Prazo (${prazo} semanas)`;

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
}


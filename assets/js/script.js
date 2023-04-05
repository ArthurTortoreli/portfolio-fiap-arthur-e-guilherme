
document.querySelector("#qtde").addEventListener("change", calcularOrcamento)
document.querySelector("#js").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_sim").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_nao").addEventListener("change", calcularOrcamento)
document.querySelector("#prazo").addEventListener("change", calcularOrcamento)

function calcularOrcamento() {
    let qtde = document.querySelector("#qtde").value
    let preco = qtde * 100
    
    let js = document.querySelector("#js").checked
    if (js) preco *= 1.1

    let layout = document.querySelector("#layout_sim").checked
    if (layout) preco += 500

    let prazo = document.querySelector("#prazo").value
    let taxaDeUrgencia = preco * ( 1.1 - prazo * 0.1)
    preco += taxaDeUrgencia
    document.querySelector("#label_prazo").innerHTML = "Prazo (" + prazo + " semanas)"

    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)
}

//Manipulação do DOM

//ECMAScript
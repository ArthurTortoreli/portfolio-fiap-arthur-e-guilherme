
document.querySelector("#qtde").addEventListener("change", calcularOrcamento)
document.querySelector("#js").addEventListener("change", calcularOrcamento)

function calcularOrcamento() {
    let qtde = document.querySelector("#qtde").value
    let preco = qtde * 100
    
    let js = document.querySelector("#js").checked

    if (js == true){
        preco = preco + (preco * 10/100)
    }

    document.querySelector("#preco").innerHTML = "R$ " + preco
}

//Manipulação do DOM

//ECMAScript
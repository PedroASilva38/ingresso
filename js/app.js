function comprar() {
    tipoIngresso = document.getElementById('tipo-ingresso').value
    qtdComprada = document.getElementById('qtd').value

    if (qtdComprada < 0) {
        document.getElementById('qtd').value = ''
        return
    }

    switch (tipoIngresso) {
        case 'superior':
            terminarCompra('qtd-superior', qtdComprada)
            break
            
        case 'inferior':
            terminarCompra('qtd-inferior', qtdComprada)
            break
            
        case 'pista':
            terminarCompra('qtd-pista', qtdComprada)
            break

    }
    document.getElementById('qtd').value = ''
}

function terminarCompra(tipo, qtd) {
    let qtdRestante = parseInt(document.getElementById(`${tipo}`).textContent)
    const nomeTipo = tipo.split('-')[1]
    
    if (qtd > qtdRestante) {
        alert(`Não há ingressos suficientes para compra na ${nomeTipo}`)
        return
    }

    qtdRestante -= qtd
    document.getElementById(`${tipo}`).textContent = qtdRestante
}
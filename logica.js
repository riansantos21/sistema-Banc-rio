//variavel que armazena o saldo inicial da conta 
let saldo= 0
//funcao para atualizar o saldo da tela 
function atualizarSaldo(){
    //selecionar o elemento do saldo e atualizar o texto com o valor 
    document.getElementById("Saldo").textContent = saldo.toFixed(2)
}
//funcao que realiza o deposito
function depositar(){
    //obtem o valor digitado pelo usuario e converte para numero decimal
    valor = parseFloat(document.getElementById("valor").value)
    // verifica se o valor e valido (maior que 0 e numerico)
    if (isNaN(valor)|| valor<=0){
        //exibe alerta se o valor for valido
        alert("seja inteligente ,insira um valor valido!")
        return // interrompe a execução da função 

    }
//adicionar o valor ao saldo 
saldo += valor
//atualizar o saldo da tela
atualizarSaldo()
// exibir uma mensagem confirmando o deposito
alert("Tem dinheiro né!  "  + valor.toFixed(2)+" \n Realizado com sucesso!")

}

function sacar(){
    //obtem o valor digitado pelo usuario e converte para numero decimal
    valor = parseFloat(document.getElementById("valor").value)
    // verifica se o valor e valido (maior que 0 e numerico)
    if (isNaN(valor)|| valor <=0){
        //exibe alerta se o valor for valido
        alert("seja inteligente ,insira um valor valido!")
        return // interrompe a execução da função 

    }
    if (valor>saldo){
        alert("valor insuficiente")
        return
    }
//subtrair  o valor ao saldo 
saldo -= valor
//atualizar o saldo da tela
atualizarSaldo()
// exibir uma mensagem confirmando o saque
alert("aproveite enquanto tem!  "  + valor.toFixed(1)+" \n Realizado com sucesso!")

}

function letgo(){
    let a =(Math.random()*99).toFixed(0)
    if (a>80){
        saldo=saldo*4
        alert ("din din")
        atualizarSaldo()
        return
    }
    else{
        saldo=saldo/2
        atualizarSaldo()
        return
    }
} 
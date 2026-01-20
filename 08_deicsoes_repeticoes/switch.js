// switch case - usa com várias opções e if e else não comporta

// estrutura de decisão

//switch - um "if simplificado" MAS que NÃO AVALIA EXPRESSÕES LÓGICAS como o if
//break -  para, quebra a execução do bloco e sai dele
//default - resposta padrão - não é obrigtório ter

//let fruta = "banana"
let fruta = "maçã"
//let fruta = "kiwi"

switch(fruta){
    // js não precisa de identação para funcionar, mas a é recomendado
    case "laranja" : 
        console.log("suco de laranaja")
        // se não por break, o bloco continuará a se executado
        break

    // fluxo do switch
    // 1° verifica se condição combina com o case banana
    // Condição é true, inicia execução do códico dentro do bloco switch.
    // O bloco está vazio, sem break, sem return sem código
    // O fluxo segue para o próximo case, como ele já está sendo executado, os outros cases também serão realizados, entando em cada bloco seguinte
    // o case seguinte possui código que será realizado e um break, que será executado
    // após o break o bloco switch finaliza 
    case "banana" :
    case "morango": 
        console.log("Vitamina")
        break

    case "maçã" : 
        console.log("açaí com maçã")
        break

    case "melão" : 
        console.log("melão com presunto")
        break

    case "mamão" : 
        console.log("comer a fruta")
        break
    
    default:
        console.log("Fruta é o padrão\n")
}

let numero = 4

switch(numero){
    case 1:
        soma = 1+1
        multiploca =  soma*3
        console.log(`1 é ${multiploca}`)
        break
    case 2:
        soma = 1+2
        multiploca =  soma*3
        console.log(`2 é ${multiploca}`)
        break
    case 3:
        soma = 1+3
        multiploca =  soma*3
        console.log(`3 é ${multiploca}`)
        break
    case 4:
    case 5:
        soma = 1+4
        multiploca =  soma*3
        console.log(`4 é ${multiploca}`)
        break
}
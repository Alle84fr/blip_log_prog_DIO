// Função com retorno

// return - algo que poderá ser usado fora da função
// retorna um valor e um objeto

function porcentagem(a,b){
    let p = b/100

    if (a <= 0){
        console.log("Valor negativo")
    } else {
        let porcent = a * p
        return porcent
    }
}

function porcentAdd(a, b){
    let p = b/100

    if (a <= 0){
        console.log("Valor negativo")
    } else {
        let aumentar = a * (1 + p)
        return aumentar
    }
}

function porcentSub(a, b){
    let p = b/100

    if (a <= 0){
        console.log("Valor negativo")
    } else {
        let subtrair = a / (1 + p)
        return subtrair
    }
}

let val1 = 30.25
let porc = 10

//como tem retorno, devo por em uma variável para poder usar depois

console.log(`${porc}% de ${val1} é ${porcentagem(val1,porc.toFixed(3))}`)

let adic = porcentAdd(val1,porc)
let sub = porcentSub(val1,porc)

let difer = adic - sub

console.log(`a diferença entre ${adic.toFixed(3)} e ${sub.toFixed(3)} é ${difer.toFixed(3)}`)
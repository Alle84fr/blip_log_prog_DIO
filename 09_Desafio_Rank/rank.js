// rankeada

function saldoVirotia(v, d){
    let s = v - d
    return s
}

function nivel(s){
    if (s < 10){
        return "Ferro"

    // é e e não ou, ambos tem de ser verdade
    } else if (s >10 && s < 21){
        return "Bronze"

    } else if (s >20 && s < 51){
        return "Prata"

    } else if (s >50 && s < 81){
        return "Ouro"

    } else if (s >80 && s < 91){
        return "Diamante"

    } else if (s >90 && s < 101){
        return "Lendário"

    } else {
        return "Imortal"
    }
}

let vitoria = 1645
let derrota = 2 
let saldo = saldoVirotia(vitoria, derrota)

console.log(`\nO Herói tem de saldo de ${saldo} está no nível de ${nivel(saldo)}`)

vitoria = 10
derrota = 6
saldo = saldoVirotia(vitoria, derrota)

console.log(`\nO Herói tem de saldo de ${saldo} está no nível de ${nivel(saldo)}`)

vitoria = 58
derrota = 15
saldo = saldoVirotia(vitoria, derrota)

console.log(`\nO Herói tem de saldo de ${saldo} está no nível de ${nivel(saldo)}`)

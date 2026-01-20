// relacionais/comparação

// = recebe
// == compara valores
// === comara valores e tipo

let lista = ["amor", "avestruz", "armário", "Agenor", "Azul", "arder"]

let num = 1.0

let nume = 1

let numer = "1.0"

let agenor = "agenor"

let agenor2 = "Agenor"

let amor = "amor"

// aqui o resultado foi falso
//console.log(`O valor ${lista[0]} é o mesmo que o ${amor}? ` + lista[0] == amor)
// motivo
// string simples só possui um único valor, como a variável amor, tem só amor nela
// string inteirra é formada por várias partes, possui concatenização
// no cód acima, 1° se leu o texto, 2° concatenização e depois comparação
// ficando O valor amor é o mesmo que o amor amor == amor
// resultando em false
// para não acontecer deve isolar para mostrar é parte diferente

// SEMPRE ISOLE QUANDO HOUVER TEXTO + COMPARAÇÃO
console.log(`O valor ${lista[0]} é o mesmo que o ${amor}? ` + (lista[0] == amor))
console.log(`O valor ${num} é o mesmo que o ${numer}? ` + (num == numer))
console.log(`O valor e o tipo ${num} é o mesmo que o ${numer}? ` + (num === numer))
console.log(`O valor ${nume} é o mesmo que o ${numer}? ` + (nume == numer))
console.log(`O valor e tipo ${nume} é o mesmo que o ${numer}? ` + (nume === numer))
console.log(`O valor ${agenor} é o mesmo que o ${lista[3]}? ` + (agenor === lista[3]))
console.log(`O valor ${agenor2} é o mesmo que o ${lista[3]}? ` + (agenor2 === lista[3]))
console.log(``)

let cpf_block = "569.258.258-78"

let cpf_user1 = "769.268.258-79"

let cpf_user2 = "569.258.258-78"

let bloc = cpf_block === cpf_user1

let bloc1 = cpf_block === cpf_user2

let cor_toddy = "preto"
let cor_pedro = "preto"
let cor_rosa = "verde"
let compar = cor_toddy !== cor_pedro
let compara = cor_toddy !== cor_rosa

console.log(``)
console.log(`A Cor dos olhos do Toddy é diferente da do Pedro ` + compar)
console.log(`A Cor dos olhos do Toddy é diferente da de Rosa ` + compara)

console.log(``)
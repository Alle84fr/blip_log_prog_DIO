// estrutura condicional 

// if = se condição verdadeira
// else if  , que no .py é elif = se condição verdadeira
// else = se não condição

let btn_on = true

// para entrar no bloco if, deve ser resultado true, se btn_on fosse false, não executaria e iria para outro bloco
if(btn_on){
    console.log(`O botão está ativo: ${btn_on}`)
}

let ovo = false
let itens = ""

if(ovo){
    itens = "leite"
    console.log(`Possui ouvo: ${ovo}`)
}

// como ovo é falso, a variável itens que está no bloco(escolpo) do if, não será executado e irá retornar como itens vazio
console.log(`Comprar ovos e ${itens}\n`)

let picanha = false
let compre = ""

if(picanha){
    console.log(`Se tem picanha traga pão de alho`)
    compre = "pão de alho"
} 
else{
    console.log("Não tem picanha, traga lasanha ")
    compre = "lasanha\n"
}

console.log(`Comprei ${compre}`)

let idade = 18

conta = ""
if(idade>18){
    conta = idade + 10
}else if (idade === 18){
    conta = idade + 0
}else{
    conta = idade - 10
}

console.log(conta)

if(idade>16){
    conta = idade + 10
}else if (idade === 16){
    conta = idade + 0
}else{
    conta = idade - 10
}

console.log(conta)

if(idade>18){
    conta = idade + 10
}else if (idade === 16){
    conta = idade + 0
}else{
    conta = idade - 10
}

console.log(conta)
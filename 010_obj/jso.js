// json

//json - javascript object notation - notação de objeto em .js
//json é anotação universal, ele se comunica com .java e .py
//analisa e troca dados estruturados entre diferentes sistemas

// sem json
// se esquecer uma variável dá erro no cód ou em ter todos dados necesários

function generateInvoice(n, v, p, i){

    console.log("\n_________________________________")
    console.log(`| Consumidor ${n} - id ${i}   |`)
    console.log(`| Produto ${p[0]} R$ ${v[0]} |`)
    console.log(`| Produto ${p[1]} R$ ${v[1]} |`)
    console.log(`| Produto ${p[2]} R$ ${v[2]} |`)
    console.log(`| Produto ${p[3]} R$ ${v[3]} |`)
    console.log("_________________________________\n")
}

let nome = "Governal"
let id = 15
let produto = ["copo americano", "taça de vinho", "caneca de shopp", "cálice de licor" ]
let valor = [3.50, 15.20, 36.00, 45.00 ]

generateInvoice(nome, valor, produto, id)

// COM json

// declara json entre chaves: valor
// neste caso criou-se dicionário

function sell(invoice){
    console.log(`O valor do ${invoice.produtos.prod_2[0]} é R$ ${invoice.produtos.prod_2[1]}`)
    console.log(`O valor do ${invoice.produtos} \n`)
}

function scrollThough(invo){

    // para cada i no dicionário do invo, chave produtos
    // separare p(indicice 0 que é produto) e v(inidice 1 valor) da chave produtos
    // o i é o prod_0 que seria equivalente ao índice do dicionário
    for (let i in invo.produtos){
        let[p, v]= invo.produtos[i]
        console.log(`${p} - ${v}`)
    }

}

let invoice = {
    nomes: "Cubalino",
    ids: 45,
    produtos: {
        prod_0: ["cavalor", 4569.69],
        prod_1: ["égua", 10156.90],
        prod_2: ["potranca", 1500.00],
        prod_3: ["potro", 1001.01],
    }
}

console.log(invoice)
sell(invoice)
scrollThough(invoice)
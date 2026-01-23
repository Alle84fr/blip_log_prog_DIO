// parametro



function somar(valor, i, str, nome = "Odalvo", ){
    var nove = 9
    let soma = valor + nove
    console.log(`A soma de ${soma} e ${nove} = ${soma}`)
    console.log(`A variável valor2 é o parametro i = ${i}`)
    
    if(soma>60){
        console.log(`${nome} ${str}`)
    }
}

//variável, fora da função que será o parametro da função
let valor = 58
let valor2 = 4

//ao chamar a função deve por a variável que será o parametro da função
somar(valor, valor2, "Maior de 60")
somar(2, 2, "Maior de 60")




